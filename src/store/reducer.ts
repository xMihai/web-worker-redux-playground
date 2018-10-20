import { handleActions } from 'redux-actions'

const sleep = (milliseconds: number) => {
  var start = new Date().getTime()
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break
    }
  }
}

export default handleActions(
  {
    INCREMENT: ({ counter, ...state }) => {
      console.log(1, counter)
      sleep(1000)
      console.log(2, counter)
      return { ...state, counter: counter + 1 }
    },
  },
  { counter: 0 }
)
