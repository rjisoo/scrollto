# jeesooryoo.com

[jeesooryoo.com](http://jeesooryoo.com) is a single page portfolio application to demonstrate the usage of the React/Redux and its libraries for responsive website.

## Running Locally

### Prerequisites
- Node (>6.7) and npm

### Run It

```sh
npm install
npm run dev
```
or
```sh
npm install
npm run build-css
npm run build
npm start
```


The above script will go through the following steps:
1. install npm dependencies
1. convert scss files in '/public/scss' into css to '/public/css'
1. perform a build with Webpack and watch for changes
1. run the server

visit `localhost:1337` in your browser

## Structures

`/app` has the React/Redux setup. `main.jsx` is the entry point.

`/server` has the Express server and routes. `start.js` is the entry point.

`/public` has the basic `index.html` and `scss` file.



## Deploying to Heroku

All pushes to GitHub are being built.

[jeesooryoo.com](http://jeesooryoo.com)