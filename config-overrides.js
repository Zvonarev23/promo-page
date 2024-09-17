const {
  override,
  addWebpackModuleRule,
  addWebpackAlias,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: './src/assets/styles/variables.scss',
        },
      },
    ],
  }),

  addWebpackAlias({
    '@ui': path.resolve(__dirname, 'src/ui'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@sections': path.resolve(__dirname, 'src/sections'),
    '@data': path.resolve(__dirname, 'src/data'),
  })
);
