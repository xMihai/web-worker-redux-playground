import { createWorker } from 'react-engine'

onmessage = createWorker()

class WebpackWorker extends Worker {
  constructor(url: string = '') {
    super(url)
  }
}

export default WebpackWorker
