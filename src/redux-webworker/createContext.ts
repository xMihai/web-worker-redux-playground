import React from 'react'
import { mapProps } from 'recompose'
import createConnect from './createConnect'

const context = React.createContext<Value>({})

export const Provider = mapProps<ProviderProps, ProviderInProps>(({ worker, children }) => ({
  value: { '@@redux-webworker': worker },
  children,
}))(context.Provider)

export const Consumer = context.Consumer

export const connect = createConnect(Consumer)

interface ProviderInProps {
  worker: Worker
  children?: any
}

interface Value {
  '@@redux-webworker'?: Worker
}

interface ProviderProps {
  value: Value
}
