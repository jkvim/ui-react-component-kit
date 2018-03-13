ui-react-component-kit
========================
[![Build Status](https://travis-ci.org/Rob-Leggett/ui-react-component-kit.svg?branch=master)](https://travis-ci.org/Rob-Leggett/ui-react-component-kit)

A react component library that is not prescribing a state management and has theming capabilities.

# Table of contents
1. [Installation](#installation)
    1. [Prerequisites](#prerequisites)
    2. [Install Dependencies](#install-dependencies)
2. [Usage](#usage)
    1. [How To](#how-to)
    2. [Theming](#theming)
    3. [Components](#components)
3. [Dev Process](#dev-process)
4. [Metrics](#metrics)
5. [Third-Party Dependencies](#third-party-dependencies)
    1. [Microservice](#microservice)

## Installation <a name="installation"/>

### Prerequisites <a name="prerequisites"/>
- [Node.js](https://nodejs.org/en/) (>9.x).
- [Yarn](https://yarnpkg.com/en/) (optional).

Use [Source Tree](https://www.sourcetreeapp.com/) to clone the [ui-react-component-kit](https://github.com/Rob-Leggett/ui-react-component-kit) repo or manually clone:

``` bash
$ git clone https://github.com/Rob-Leggett/ui-react-component-kit.git
```

### Install Dependencies <a name="install-dependencies"/>

```bash
$ yarn install | npm install
```

## Usage <a name="usage"/>
The following section outlines commonly used commands. For a detailed list of all possible project commands please refer to the `scripts` section of the `package.json` file located in the root of the project directory.

> This project has opted to use Yarn as the preferred package manager. However, the commands `yarn` and `npm` can be used interchangeably if not available. For more information on the benefits and usage of Yarn please visit this [website](https://yarnpkg.com/en/).

### How To Use <a name="how-to"/>

### Install

```bash
$ yarn add ui-react-component-kit --dev | npm install ui-react-component-kit --save-dev
```

### Theming <a name="theming"/>

```javascript
import { ThemeProvider } from 'styled-components';
// default theme provided with library
import { defaultTheme } from 'ui-react-component-kit'; 
```

Wrap your application in the ThemeProvider and pass in the defaultTheme or your own theme.

NOTE: If you don't wrap you application in the ThemeProvider the components will still be theme to the defaults, but you won't be able to override them unless you wrap your application in the ThemeProvider to pass your own theme.

```javascript
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* rest of your app */}
    </ThemeProvider>
  );
}
```

### Components <a name="components"/>

#### InputText
```javascript
import { InputText } from 'ui-react-component-kit';
```

#### InputRadioGroup
```javascript
import { InputRadioGroup } from 'ui-react-component-kit';
```

#### InputCheckboxGroup
```javascript
import { InputCheckboxGroup } from 'ui-react-component-kit';
```

#### Fieldset
```javascript
import { Fieldset } from 'ui-react-component-kit';
```

#### Select
```javascript
import { Select } from 'ui-react-component-kit';
```

#### Button
```javascript
import { Button } from 'ui-react-component-kit';
```

#### Link
```javascript
import { Link } from 'ui-react-component-kit';
```

#### AutoComplete
```javascript
import { AutoComplete } from 'ui-react-component-kit';
```

#### StaticAutoComplete
```javascript
import { StaticAutoComplete } from 'ui-react-component-kit';
```

#### AddressAutoComplete
```javascript
import { AddressAutoComplete } from 'ui-react-component-kit';
```

#### BeforeUnload
```javascript
import { BeforeUnload } from 'ui-react-component-kit';
```

#### IdleTime
```javascript
import { IdleTime } from 'ui-react-component-kit';
```

## Dev Process <a name="dev-process"/>

To ensure you are using the correct version of Node:
```bash
$ yarn check-node | npm run check-node
```

To commit using commitizen:
```bash
$ yarn commit | npm run commit
```

To build the library:
```bash
$ yarn build | npm run build
```

To perform linting:
```bash
$ yarn lint | npm run lint
```

To automatically fix linting where possible and perform linting:
```bash
$ yarn lint:fix | npm run lint:fix
```

To perform testing (unit & snapshot):
```bash
$ yarn test | npm run test
```

To update snapshots and perform testing (unit & snapshot):
```bash
$ yarn test:update-snapshot | npm run test:update-snapshot
```

To start a mock server for sample api support:
```bash
$ yarn mock-server-start | npm run mock-server-start
```

To run styleguide - without api support:
* styleguide - [http://localhost:6060]("http://localhost:6060)
```bash
$ yarn styleguide | npm run styleguide
```

To run styleguide - with api support:
* styleguide - [http://localhost:6060]("http://localhost:6060)
* mock server (http) - [http://localhost:8882]("http://localhost:8882)
* mock server (https) - [http://localhost:8443]("http://localhost:7443)
* mock server (admin) - [http://localhost:8889]("http://localhost:8889)
```bash
$ yarn styleguide:with-mock-server | npm run styleguide:with-mock-server
```

To build a static version of styleguide - without api support:
```bash
$ yarn styleguide:build | npm run styleguide:build
```

## Metrics <a name="metrics"/>

When running the tests you will get the following metrics:
* Code Coverage Report - /coverage
* Test Report (junit parsable) - test-report.xml

## Third-Party Dependencies <a name="third-party-dependencies"/>


### Microservice <a name="microservice"/>

### Interface Spec

For use with address-autocomplete component:

TBD

Donations
====================

### How you can help?

Any donations received will be able to assist me provide more blog entries and examples via GitHub, any contributions provided is greatly appreciated.

Thanks for your support.

[![paypal](https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=EV2ZLZBABFJ34&lc=AU&item_name=Research%20%26%20Development&currency_code=AUD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)