import React, { Component } from 'react'
import { ReactDom, render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers, } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { BrowserHistory } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router-dom'
import thunk from 'redux-thunk'

import { App } from './components/App/App'
import { rootReducer } from './reducers/index.js'
import { loadLanguageList } from './actions/index.js'

const history = createHistory()
const routeMiddleware = routerMiddleware(history)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(rootReducer, devTools, applyMiddleware(thunk, routeMiddleware))


store.dispatch(loadLanguageList())


render(

  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App store={store}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('main'))
