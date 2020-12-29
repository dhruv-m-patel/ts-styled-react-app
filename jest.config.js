module.exports = {
  verbose: false,
  roots: ['./src'],
  globals: {
    NODE_ENV: 'test',
  },
  moduleFileExtensions: ['js', 'json'],
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['./config/jest.setup.js'],
};
