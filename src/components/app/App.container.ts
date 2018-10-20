import { connect } from 'react-redux'
import { increment } from '../../store/actions'

import App from './App'

export default connect(
  ({ counter }: { counter: number }) => ({ counter }),
  { onClick: increment }
)(App)
