import Worker from './engine.worker'

const worker = new Worker()

export const send = (message: string) => worker.postMessage([message])
