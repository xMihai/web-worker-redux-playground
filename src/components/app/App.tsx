import React from 'react'

const App = ({ counter, onClick }: Props) => (
  <div>
    <img src="/images/fire.gif" onClick={onClick} />
    <div>
      <h1>{counter}</h1>
    </div>
  </div>
)

interface Props {
  counter: number
  onClick: () => any
}

export default App
