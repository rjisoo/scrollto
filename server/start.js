'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const {resolve} = require('path');
const PrettyError = require('pretty-error');
let visits = 0;

const app = express();

app.use(require('volleyball'));

// Pretty error prints errors all pretty.
const prettyError = new PrettyError();

// Skip events.js and http.js and similar core node files.
prettyError.skipNodeFiles();

// Skip all the trace lines about express' core and sub-modules.
prettyError.skipPackage('express');

module.exports = app
  // Session middleware - compared to express-session (which is what's used in the Auther workshop), cookie-session stores sessions in a cookie, rather than some other type of session store.
  // Cookie-session docs: https://www.npmjs.com/package/cookie-session
  .use(require('cookie-session') ({
    name: 'session',
    keys: [process.env.SESSION_SECRET || 'an insecure secret key'],
  }))

  // Body parsing middleware
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

  // // Authentication middleware
  // .use(passport.initialize())
  // .use(passport.session())

  // Serve static files from ../public
  .use(express.static(resolve(__dirname, '..', 'public')))
  .use(express.static(resolve(__dirname, '..', 'node_modules')))


  // put route for updating the number of visits
  .put('/incrementVisits', (req, res, next) => {
    if (!req.headers.authorization) {
      return res.json({error: "Unauthorized"})
    }
    visits++
  })

  .get('/totalVisits', (req, res, next) => {
    res.json({"visits": visits})
  })

  // Send index.html for anything else.
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

  .use((err, req, res, next) => {
    console.log(prettyError.render(err))
    res.status(500).send(err)
    next()
  })

if (module === require.main) {
  // Start listening only if we're the main module.
  //
  // https://nodejs.org/api/modules.html#modules_accessing_the_main_module
  const server = app.listen(
    process.env.PORT || 1337,
    () => {
      console.log(`Listening on ${JSON.stringify(server.address())}`)
    }
  )
}

// This check on line 64 is only starting the server if this file is being run directly by Node, and not required by another file.
// Bones does this for testing reasons. If we're running our app in development or production, we've run it directly from Node using 'npm start'.
// If we're testing, then we don't actually want to start the server; 'module === require.main' will luckily be false in that case, because we would be requiring in this file in our tests rather than running it directly.
