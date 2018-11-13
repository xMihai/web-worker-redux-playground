import { compose, withHandlers } from 'recompose'
import App, { Props } from './App'

export default compose<OutProps, InProps>(
  withHandlers({
    startOnClick: ({ start }) => () => start(),
    stopOnClick: ({ stop }) => () => stop(),
    resetOnClick: ({ reset }) => () => reset(),
  })
)(App)

type OutProps = Props

type InProps = {}
