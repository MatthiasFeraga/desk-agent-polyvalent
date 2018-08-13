## Desk Frontend

Use:

- [Webpack](https://github.com/webpack)
- [Jest](https://facebook.github.io/jest/)
- [Enzyme](https://github.com/airbnb/enzyme)
- [Browsersync](https://browsersync.io)

---

## Table of Contents

- [Directory Structure](#directory-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

---

## Directory Structure

```bash
├── node_modules/                      # 3rd-party libraries and utilities
├── server/
│   ├── server.js/                     # Express server configuration
├── public/                            # Compiled output
├── src/                               # Source files
│   ├── actions/                       # Redux actions
│   ├── components/                    # React components
│   ├── containers/                    # React containers (the glue between Redux and components)
│   ├── images/                        # Images and icons
│   ├── reducers/                      # Redux reducers
│   ├── routers/                       # React routers
│   ├── store/                         # Redux store configuration
│   ├── styles/                        # CSS files
│   ├── templates/                     # HTML Webpack Plugin templates
│   ├── tests/                         # Test files
│   ├── app.jsx                        # Main file
├── .babelrc                           # Babel configuration
└── .browserslistrc                    # Browserslist configuration
└── jest.config.json                   # Jest configuration
└── package.json                       # List of project dependencies + NPM scripts
└── postcss.config.js                  # Post CSS configuration
└── webpack.config.js                  # Webpack configuration
```

---

## Prerequisites

- [Node.js](https://nodejs.org)
- [NPM](https://github.com/npm/npm)

---

## Installation

Clone the repo and install dependencies.

```bash
$ git clone {REPO}.git MyApp
$ cd MyApp
$ npm install
```

---

## Usage

### Running Development Server

```bash
$ npm run dev-server
```

Then open [http://localhost:3000](http://localhost:3000) to see your app.

### Testing

```bash
$ npm test
$ npm test -- --watch                  # Run Jest in watch mode
```

### Deploying Locally

```bash
$ npm run build:dev                    # Build in development mode
$ npm run build:prod                   # Build in production mode (minified files versions)
```

### Deploying on Heroku

First You should install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

```bash
$ heroku login                         # Login to Your Heroku account
$ cd MyApp
$ git init                             # Initialize a git repository (ignore if already exists)
$ heroku git:remote -a your-app-name
$ git add .
$ git commit -m "Nice commit message"
$ git push heroku master
```
