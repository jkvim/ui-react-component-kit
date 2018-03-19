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
    path.join(__dirname, './src/theme/defaultTheme.ts')
  ],
  sections: [
    {
      name: 'Buttons',
      components: () => appendPath(componentsPath, [
        'button/Button.tsx'
      ])
    },
    {
      name: 'Links',
      components: () => appendPath(componentsPath, [
        'link/Link.tsx'
      ])
    },
    {
      name: 'Selections',
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
    }
  ]
};

function appendPath(root, relativePaths) {
  return relativePaths.map((relativePath) => {
    return path.join(root, relativePath);
  });
}