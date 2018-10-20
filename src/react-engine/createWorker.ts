const createWorker = () => (e: MessageEvent) => {
  console.log(1, e.data[0])
}

export default createWorker
