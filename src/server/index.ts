import dotenv from 'dotenv';
import { runApp } from '@dhruv-m-patel/web-app';
import getWebApp from './app';

dotenv.config();
// eslint-disable-next-line @typescript-eslint/no-var-requires
global.Promise = require('bluebird').Promise;

const port = Number(process.env.PORT) || 3000;

getWebApp().then(
  (app) =>
    new Promise((resolve, reject) => {
      runApp(app, {
        appName: 'ts-styled-react-app',
        port,
        callback: () => {
          resolve(app);
        },
      }).catch((err) => {
        reject(err);
      });
    })
);
