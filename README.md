# Quikz App

## Overview

an app comprising from messaging app and todolist app

### Background

Repository for Quikz app

## Technical Information

### Requirements

- Programming Language : Typescript v4.7.4
- Node : v16.15.1 ([doc](https://nodejs.org/fa/blog/release/v16.15.1/))
- NPM : v8.11.0 ([doc](https://www.npmjs.com/package/node-v8-version))

### Tech Stack

- App Framework : React with typescript v18.2
  - official doc react([doc](https://reactjs.org/versions/))
  - how to install ([doc](https://create-react-app.dev/docs/adding-typescript/))
- UI Framework : Material ui v5.10.0 ([doc](https://mui.com/))
- keycloak-js v18.0 ([doc](https://www.keycloak.org/guides#getting-started))
- react-keycloak/web v3.4.0 ([doc](https://www.npmjs.com/package/@react-keycloak/web))
- react-redux v8.0.2 ([doc](https://react-redux.js.org/introduction/getting-started))

### How to run

- Clone repository

```
$ git clone git@github.com:akmalays/quirkz.git
$ cd Quikz
$ npm install
```

- The whole environment can be run with:

```
npm start
```

- To running test with coverage, use this:

 ```
 npm test -- --watchAll=false --coverage
 ```