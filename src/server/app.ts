import path from 'path';
import confit from 'confit';
// eslint-disable-next-line import/no-duplicates
import { Application, Request, Response, NextFunction } from 'express';
// eslint-disable-next-line import/no-duplicates
import express from 'express';
import meddleware from 'meddleware';
import handlers from 'shortstop-handlers';
import shortstopRegex from 'shortstop-regex';
import 'fetch-everywhere';
import { readConfiguration, betterRequire } from '../lib/utils';

/* eslint-disable @typescript-eslint/no-explicit-any */
const app: Application = express();

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

export default async function configureApp() {
  addDefaultConfiguration(process.cwd());
  const config: any = await addConfigurationOverrides();

  // disable X-Powered-By header
  app.disable('x-powered-by');

  if (config.get('trustProxy')) {
    app.enable('trust proxy');
  }

  app.use((req: Request, res: Response, next: NextFunction) => {
    // eslint-disable-next-line dot-notation
    (req as any).config = config;
    next();
  });

  // NOTE: configure using webpack-dev-middleware and webpack-hot-middleware earlier than other middlewares
  // for hot- reloading to work. Changing order may not guarantee live browser refresh.
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
    const webpack = require('webpack');
    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
    const compiler = webpack(require('../../webpack.config.js'));
    app.use(
      // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
      require('webpack-dev-middleware')(compiler, {
        stats: { colors: true },
        serverSideRender: true,
      })
    );
    app.use(
      // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
      require('webpack-hot-middleware')(compiler, {
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000,
        // @ts-ignore
        dynamicPublicPath: true,
        reload: true,
      })
    );
  }

  const middleware = config.get('meddleware');
  if (middleware) {
    app.use(meddleware(middleware));
  }

  return new Promise((resolve) => {
    const port = ['staging', 'production'].includes(process.env.NODE_ENV || '')
      ? process.env.PORT
      : config.get('port');
    app.listen(port, () => {
      resolve(port);
    });
  });
}
/* eslint-enable @typescript-eslint/no-explicit-any */
