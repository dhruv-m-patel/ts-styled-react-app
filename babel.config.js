module.exports = {
  plugins: [
    '@babel/transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/syntax-optional-chaining',
    '@babel/transform-react-inline-elements',
    '@babel/syntax-dynamic-import',
    '@babel/transform-typescript',
    '@loadable/babel-plugin',
    'babel-plugin-macros',
    'babel-plugin-css-modules-transform',
  ],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
