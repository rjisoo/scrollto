'use strict'

import React from 'react'
// import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {Router, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
// import {connect, Provider} from 'react-redux'

// import store from './store'
import App from './components/App'

render (
  // <Provider store={store}>
    <HashRouter >
      <Route 
        path="/" 
        render={() => {
          return <App />;
      }} > 
      </Route>
    </HashRouter>
  // </Provider>
  ,
  document.getElementById('main')
)


