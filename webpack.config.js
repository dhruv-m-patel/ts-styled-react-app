const { getWebpackConfig } = require('@dhruv-m-patel/web-app');
const dotenv = require('dotenv');

dotenv.config();

module.exports = () => {
  const webpackConfig = getWebpackConfig(process.env.NODE_ENV, __dirname);
  return webpackConfig;
};
