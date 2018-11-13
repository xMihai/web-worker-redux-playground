import { createStore, applyMiddleware } from 'redux'

import rootReducer from 'store/reducer'
import middleware from 'store/middleware'
import * as selectors from './selectors'
import State from './State'

interface ObjectMap<T = any> {
  [key: string]: T
}

type Selector = (state: State, props?: any) => any
type Selectors = ObjectMap<Selector>

const selectorKeys = Object.keys(selectors)

const getSelectorValues = (state: State): ObjectMap =>
  selectorKeys.reduce((result, key) => ({ ...result, [key]: (selectors as Selectors)[key](state) }), {})

// Create store
const store = createStore(rootReducer, applyMiddleware(middleware))

// Subscribe to updates
store.subscribe(() => {
  const newSelectorValues = getSelectorValues(store.getState())
  const diffKeys = selectorKeys.filter(key => selectorValues[key] !== newSelectorValues[key])
  selectorValues = newSelectorValues
  postMessage(diffKeys.reduce((result: ObjectMap, key) => ({ ...result, [key]: selectorValues[key] }), {}))
})

// Calculate inital values of selectors
let selectorValues = getSelectorValues(store.getState())

// Post intial values
postMessage(selectorValues)

onmessage = (e: MessageEvent) => {
  console.log('webworker: dispatch:', e.data)
  store.dispatch(e.data)
}

declare const postMessage: (message: any) => void
