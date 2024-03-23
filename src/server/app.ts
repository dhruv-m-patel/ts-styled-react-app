import path from 'path';
import confit from 'confit';
// eslint-disable-next-line import/no-duplicates
import { Response, NextFunction } from 'express';
import handlers from 'shortstop-handlers';
import shortstopRegex from 'shortstop-regex';
import {
  configureApp,
  WebApplication,
  WebRequest,
} from '@dhruv-m-patel/web-app';
import { readConfiguration, betterRequire } from '../lib/utils';
import renderPage from './middleware/renderPage';

const configurations: Array<any> = [];

async function addConfigurationOverrides() {
  let lastConfig: any;
  for (const config of configurations.reverse()) {
    if (lastConfig) {
      // eslint-disable-next-line no-underscore-dangle
      config.addOverride(lastConfig._store);
    }
    // eslint-disable-next-line no-await-in-loop
    lastConfig = await readConfiguration(config);
  }
  return lastConfig;
}

function addDefaultConfiguration(rootDirectory: string) {
  const configFactory = confit({
    basedir: path.join(rootDirectory, 'config'),
    protocols: {
      root: handlers.path(rootDirectory),
      path: handlers.path(
        ['development', 'test'].includes(process.env.NODE_ENV || '')
          ? path.join(rootDirectory, 'src')
          : path.join(rootDirectory, 'build')
      ),
      require: betterRequire(rootDirectory),
      regex: shortstopRegex(),
      env: handlers.env(),
    },
  });
  configurations.push(configFactory);
}

export default async function useWebApp(): Promise<WebApplication> {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const app = await configureApp({
    paths: {
      routes: path.join(__dirname, 'routes'),
      staticDirectories: [
        path.resolve(__dirname, '../../static'),
        path.resolve(__dirname, '../../build-static'),
      ],
      webpackConfig: path.resolve(__dirname, '../../webpack.config.js'),
    },
    setup: async (webApp: WebApplication) => {
      addDefaultConfiguration(process.cwd());
      const config: any = await addConfigurationOverrides();
      if (config.get('trustProxy')) {
        webApp.enable('trust proxy');
      }

      webApp.use((req: WebRequest, res: Response, next: NextFunction) => {
        webApp.locals.config = config;
        req.app = webApp;
        next();
      });

      webApp.use('*', renderPage());
    },
  });
  return app;
}
