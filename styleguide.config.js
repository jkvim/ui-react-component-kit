const path = require('path');
const componentsPath = path.join(__dirname, 'src', 'components');

module.exports = {
  showUsage: true,
  components: 'src/components/**/[A-Z]*.{ts,tsx}',
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', []).parse,
  webpackConfig: Object.assign({}, require('./config/webpack.config.lib.js'), {
    /* Custom config options */
  }),
  ignore: [
    '**/__tests__/**',
    '**/*.{test,stories}.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts'
  ],
  require: [
    path.join(__dirname, './src/theme/global.ts')
  ],
  sections: [
    {
      name: 'Typography',
      components: () => appendPath(componentsPath, [
        'heading/Heading.tsx',
        'label/Label.tsx',
        'hint/Hint.tsx',
        'error/Error.tsx'
      ])
    },
    {
      name: 'Actions',
      components: () => appendPath(componentsPath, [
        'button/Button.tsx',
        'link/Link.tsx'
      ])
    },
    {
      name: 'Dropdowns',
      components: () => appendPath(componentsPath, [
        'select/Select.tsx'
      ])
    },
    {
      name: 'Inputs',
      components: () => appendPath(componentsPath, [
        'input-text/InputText.tsx',
        'input-radio-group/InputRadioGroup.tsx',
        'input-checkbox-group/InputCheckboxGroup.tsx'
      ])
    },
    {
      name: 'Autocomplete',
      components: () => appendPath(componentsPath, [
        'static-autocomplete/StaticAutoComplete.tsx',
        'address-autocomplete/AddressAutoComplete.tsx'
      ])
    },
    {
      name: 'Notifications',
      components: () => appendPath(componentsPath, [
        'alert/Alert.tsx'
      ])
    },
    {
      name: 'Events',
      components: () => appendPath(componentsPath, [
        'before-unload/BeforeUnload.tsx',
        'idle-time/IdleTime.tsx'
      ])
    }
  ]
};

function appendPath(root, relativePaths) {
  return relativePaths.map((relativePath) => {
    return path.join(root, relativePath);
  });
}