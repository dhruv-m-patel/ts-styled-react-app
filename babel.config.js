module.exports = {
  plugins: [
    '@babel/transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/syntax-optional-chaining',
    '@babel/transform-react-inline-elements',
    '@babel/syntax-dynamic-import',
    '@loadable/babel-plugin',
    'babel-plugin-macros',
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' },
        exclude: ['transform-regenerator'],
      },
    ],
    '@babel/preset-react',
  ],
};
