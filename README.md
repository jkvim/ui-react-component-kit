ui-react-component-kit
========================
[![Build Status](https://travis-ci.org/Rob-Leggett/ui-react-component-kit.svg?branch=master)](https://travis-ci.org/Rob-Leggett/ui-react-component-kit)
[![npm](https://img.shields.io/npm/v/ui-react-component-kit.svg)](https://www.npmjs.com/package/ui-react-component-kit)
[![codecov](https://codecov.io/gh/Rob-Leggett/ui-react-component-kit/branch/master/graph/badge.svg)](https://codecov.io/gh/Rob-Leggett/ui-react-component-kit)
[![Dependency Status](https://img.shields.io/david/Rob-Leggett/ui-react-component-kit.svg?style=flat-square)](https://david-dm.org/Rob-Leggett/ui-react-component-kit)
[![Known Vulnerabilities](https://snyk.io/test/github/rob-leggett/ui-react-component-kit/badge.svg?targetFile=package.json)](https://snyk.io/test/github/rob-leggett/ui-react-component-kit?targetFile=package.json)

A react component library that is not prescribing state management and has theming capabilities. 

# Table of contents
1. [Installation](#installation)
    1. [Prerequisites](#prerequisites)
    2. [Install Dependencies](#install-dependencies)
2. [Usage](#usage)
    1. [How To](#how-to)
    2. [Theming](#theming)
3. [Dev Process](#dev-process)
4. [Styleguide](#styleguide)
5. [Metrics](#metrics)
6. [Third-Party Dependencies](#third-party-dependencies)
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

The defaultTheme is used if you don't provide your own theme, it has been written with mobile first, therefore breakpoints are triggered on min-width rather then max-width. 

Wrap your application in the ThemeProvider and pass in your own theme.

Example: [defaultTheme](https://github.com/Rob-Leggett/ui-react-component-kit/blob/master/src/theme/defaultTheme.ts)

App.[js|ts]
```javascript static
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
// custom theme provided with library
import { customTheme } from './your/custom/theme/path'; 

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={customTheme}>
        {/* rest of your app */}
      </IdleTime>
    );
  }
}

export default App
```

index.[js|ts]
```javascript static
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
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

In order to use any components specified below in this section you will be required to have an API with the endpoints the components requires.

### Interface Spec

For use with address-autocomplete component:

#### Get Addresses

```text
GET - ${endpoint}?query=${term}&limit=${limit}
```

| Parameter | Description                                             | Example                          | Default |
|-----------|---------------------------------------------------------|----------------------------------|---------|
| endpoint  | The addresses endpoint                                  | https://localhost:3000/addresses | N/A     |
| term      | Query to best match addresses to return in the response | 123 Cha                          | N/A     |
| limit     | Max number of addresses to return in the response       | 15                               | 10      |

##### Success Response Example (HTTP Status Code 2XX)

```json
{
  "data": [
    {
      "id": "12345",
      "address": "123 Champion Road Clayton South VIC 3169"
    },
    {
      "id": "23456",
      "address": "123 Champion Road Umina Beach NSW 2257"
    }
  ]
}
```

##### No Match Response Example (HTTP Status Code 2XX)
```json
{
  "data": []
}
```

##### Error Response Example (HTTP Status Code 4XX or 5XX)
```json
{}
```

#### Get Address Details

```text
GET - ${endpoint}/${id}
```

| Parameter | Description                                              | Example                                | Default |
|-----------|----------------------------------------------------------|----------------------------------------|---------|
| endpoint  | The address details endpoint                             | https://localhost:3000/addresses/45678 | N/A     |
| id        | ID of the address to return the details via the response | 45678                                  | N/A     |

##### Success Response Example (HTTP Status Code 2XX)

The json payload must have property address for the component to be functional, all the other payload properties such as house_number etc are optional and can be anything that represents an address

```json
{
  "data": {
    "id": "45678",
    "house_number": "123",
    "street": "Champion Street",
    "locality": "Dubbo",
    "state": "NSW",
    "postcode": "2830",
    "address": "123 Champion Street Dubbo NSW 2830"
  }
}
```

##### Error Response Example (HTTP Status Code 4XX or 5XX)
```json
{}
```

## Styleguide <a name="styleguide"/>

Styleguide via: https://rob-leggett.github.io/ui-react-component-kit/

Donations
====================

### How you can help?

Any donations received will be able to assist me provide more blog entries and examples via GitHub, any contributions provided is greatly appreciated.

Thanks for your support.

[![paypal](https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=EV2ZLZBABFJ34&lc=AU&item_name=Research%20%26%20Development&currency_code=AUD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)