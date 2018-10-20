import { handleActions } from 'redux-actions'

import * as T from './actionTypes'

export default handleActions<State, any>(
  {
    [T.SET]: (state: State, action) => ({ ...state, counter: action.payload }),
    [T.START]: (state: State, action) => ({ ...state, timer: action.payload }),
    [T.STOP]: (state: State, action) => ({ ...state, timer: null }),
    [T.RESET]: (state: State, action) => ({ ...state, counter: 0 }),
  },
  { counter: 0, start: null, timer: null }
)

export interface State {
  readonly counter: number
  readonly timer: number | null
  readonly start: number | null
}
