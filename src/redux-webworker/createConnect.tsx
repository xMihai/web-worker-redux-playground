import React, { ComponentType } from 'react'

export default (Consumer: ComponentType) => (options?: any) => (WrappedComponent: ComponentType) => (props: {}) => (
  <Consumer>
    {(value: any) => {
      console.log(33, value)
      return <WrappedComponent {...props} />
    }}
  </Consumer>
)
