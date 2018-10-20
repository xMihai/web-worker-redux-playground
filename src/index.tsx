import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import { App } from 'components/app'

import rootReducer from 'store/reducer'
import middleware from 'store/middleware'

import { send } from 'engine/start'

send('hey')

const store = createStore(rootReducer, applyMiddleware(middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('index')
)
