const path = require('path');

module.exports = {
  showUsage: true,
  components: 'src/components/**/[A-Z]*.{ts,tsx}',
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', []).parse,
  webpackConfig: Object.assign({}, require('./config/webpack.config.lib.js'), {
    /* Custom config options */
  }),
  ignore: ['**/__tests__/**', '**/*.{test,stories}.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}', '**/*.d.ts'],
  require: [
    path.join(__dirname, './src/theme/defaultTheme.ts')
  ]
};