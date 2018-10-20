import { Middleware } from 'redux'
import { Action } from 'redux-actions'

import * as T from './actionTypes'
import { set } from './actions'

const middleware: Middleware = store => next => (action: Action<any>) => {
  console.log(action, store.getState())

  if (action.type === T.START) {
    const { timer } = store.getState()
    if (timer === null) {
      next({
        ...action,
        payload: setInterval(() => {
          const { counter } = store.getState()
          store.dispatch(set(counter + 1))
        }, 1000),
      })
      return
    }
  }

  if (action.type === T.STOP) {
    const { timer } = store.getState()
    if (timer !== null) {
      clearInterval(timer)
    }
  }

  next(action)
}

export default middleware
