# React Awesome Starter

This is an starter built on top of the Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app)

## Installation

```
git clone https://github.com/wengkhing/react-awesome-starter.git
cd react-awesome-starter
yarn
```

## Features
* [create-react-app](https://github.com/facebookincubator/create-react-app) as base. This project can received updates from create-react-app without a problem.
* [custom-react-script](https://github.com/kitze/custom-react-scripts) allow custom config for create-react-app WITHOUT ejecting. Check this project out, it's really cool. Right now it supports decorators, babel-preset-stage-0, LESS, SASS and CSS modules.
* [React Router v4](https://reacttraining.com/react-router/) as the router
* [redux](https://github.com/reactjs/redux) for state management
* [axios](https://github.com/mzabriskie/axios) for universal data fetching/rehydration on the client
* [redux-thunk](https://github.com/gaearon/redux-thunk) as the middleware to deal with asynchronous action
* [react-router-redux](https://github.com/reactjs/react-router-redux) to keep your router in sync with Redux state
* [react-helmet](https://github.com/nfl/react-helmet) to manage title, meta, styles and scripts tags
* CSS and SASS support with [PostCSS](https://github.com/postcss/postcss-loader) for advanced transformations (e.g. autoprefixer)
* [husky](https://github.com/typicode/husky) to ensure code standard. [standard](https://github.com/standard/standard) linting and code fixing with [snazzy](https://github.com/standard/snazzy) enabled happens at pre-commit.

## This is package is not

### A fullstack solution

This starter makes no assumptions about the backend of your app.

## `yarn <script>`

| Command            | Description                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------ |
| `start`            | Run your app on the development server at `localhost:3000`.                                |
| `build`            | Remove the previous bundled files and bundle it to `./build`.                              |
| `test`             | Run testing.                                                                               |
| `lint`             | Lint and fix all `.js` files if fixable.                                                   |
| `release`          | Shorthand for `release:patch`                                                              |
| `release:first`    | To generate changelog for first release                                                    |
| `release:major`    | Update major version number eg. 1.0.0 -> 2.0.0                                             |
| `release:minor`    | Update minor version number eg. 1.0.0 -> 1.1.0                                             |
| `release:patch`    | Update patch version number eg. 1.0.0 -> 1.0.1                                             |
| `release:dry`      | Running release without commiting to git                                                   |
| `prerelease`       | Make a pre-release update eg. 1.0.0 -> 1.0.1-0                                             |
