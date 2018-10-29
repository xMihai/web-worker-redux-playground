import React from 'react'
import ReactDOM from 'react-dom'

import { App } from 'components/app'

import Worker from './store/redux.worker'

import { start } from './store/actions'

// tslint:disable:no-expression-statement

const worker = new Worker()

worker.onmessage = (e: MessageEvent) => {
  console.log('main: received:', e.data)
}

// worker.postMessage(start())

ReactDOM.render(<App />, document.getElementById('index'))
