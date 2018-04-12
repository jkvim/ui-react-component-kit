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
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.0.9/css/all.css',
          integrity: 'sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  sections: [
    {
      name: 'Components',
      components: () => appendPath(componentsPath, [
        'heading/Heading.tsx',
        'paragraph/Paragraph.tsx',
        'label/Label.tsx',
        'hint/Hint.tsx',
        'error/Error.tsx',
        'button/Button.tsx',
        'link/Link.tsx',
        'select/Select.tsx',
        'input-text/InputText.tsx',
        'input-radio-group/InputRadioGroup.tsx',
        'input-checkbox-group/InputCheckboxGroup.tsx',
        'static-autocomplete/StaticAutoComplete.tsx',
        'address-autocomplete/AddressAutoComplete.tsx',
        'alert/Alert.tsx',
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