# Desk Agent Polyvalent

Projet de bureau polyvalent pour Carte Blanche à Cahors

## Directory Structure

```bash
├── node_modules/
├── README.md
├── jest.config.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── public/
├── server
│   └── server.js
├── src
│   ├── actions
│   ├── app.jsx
│   ├── components
│   ├── config
│   ├── data
│   ├── images
│   ├── routers
│   ├── styles
│   ├── templates
│   └── tests
├── tests.config.js
└── webpack.config.js
```

## Prerequisites

- [Node.js](https://nodejs.org)
- [NPM](https://github.com/npm/npm)

## Installation

Clone the repo and install dependencies.

```bash
$ git clone https://github.com/MatthiasFeraga/desk-agent-polyvalent.git
$ cd desk-agent-polyvalent
$ npm install
```

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
