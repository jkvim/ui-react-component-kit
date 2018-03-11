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
$ yarn install
      or 
$ npm install
```

## Usage <a name="usage"/>
The following section outlines commonly used commands. For a detailed list of all possible project commands please refer to the `scripts` section of the `package.json` file located in the root of the project directory.

> This project has opted to use Yarn as the preferred package manager. However, the commands `yarn` and `npm` can be used interchangeably if not available. For more information on the benefits and usage of Yarn please visit this [website](https://yarnpkg.com/en/).

### How To Use <a name="how-to"/>

### Install

```bash
$ yarn add ui-react-component-kit --dev 
                or 
$ npm install ui-react-component-kit --save-dev
```

### Import

An example:

```javascript
import { InputText } from 'ui-react-component-kit';
```

## Dev Process <a name="dev-process"/>

To ensure you are using the correct version of Node:
```bash
$ yarn check-node
        or
$ npm run check-node
```

To commit using commitizen:
```bash
$ yarn commit
        or
$ npm run commit
```

To build the library:
```bash
$ yarn build
        or
$ npm run build
```

To perform linting:
```bash
$ yarn lint
        or
$ npm run lint
```

To automatically fix linting where possible and perform linting:
```bash
$ yarn lint:fix
        or
$ npm run lint:fix
```

To perform testing (unit & snapshot):
```bash
$ yarn test
        or
$ npm run test
```

To update snapshots and perform testing (unit & snapshot):
```bash
$ yarn test:update-snapshot
        or
$ npm run test:update-snapshot
```

To start a mock server for sample api support:
```bash
$ yarn mock-server-start
        or
$ npm run mock-server-start
```

To run styleguide - without api support:
* styleguide - [http://localhost:6060]("http://localhost:6060)
```bash
$ yarn styleguide
        or
$ npm run styleguide
```

To run styleguide - with api support:
* styleguide - [http://localhost:6060]("http://localhost:6060)
* mock server (http) - [http://localhost:8882]("http://localhost:8882)
* mock server (https) - [http://localhost:8443]("http://localhost:7443)
* mock server (admin) - [http://localhost:8889]("http://localhost:8889)
```bash
$ yarn styleguide:with-mock-server
        or
$ npm run styleguide:with-mock-server
```

To build a static version of styleguide - without api support:
```bash
$ yarn styleguide:build
        or
$ npm run styleguide:build
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