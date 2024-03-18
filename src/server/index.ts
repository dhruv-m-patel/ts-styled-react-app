import dotenv from 'dotenv';
import configureApp from './app';

dotenv.config();
// eslint-disable-next-line @typescript-eslint/no-var-requires
global.Promise = require('bluebird').Promise;

configureApp().then((port) => {
  // eslint-disable-next-line no-console
  console.log(`App has started on port ${port}`);
});
