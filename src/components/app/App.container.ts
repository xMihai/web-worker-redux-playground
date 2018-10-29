import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { start, stop, reset } from '../../store/actions'
import { getCounter } from '../../store/selectors'
import State from '../../store/State'

import App, { Props } from './App'

export default compose<OutProps, InProps>(
  connect(
    (state: State) => ({ counter: getCounter(state) }),
    { start, stop, reset }
  ),
  withHandlers({
    startOnClick: ({ start }) => () => start(),
    stopOnClick: ({ stop }) => () => stop(),
    resetOnClick: ({ reset }) => () => reset(),
  })
)(App)

type OutProps = Props

type InProps = {}
