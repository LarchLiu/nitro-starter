import { eventHandler } from 'h3'

export default eventHandler((event) => {
  // const req = await readBody<{ webUrl: string }>(event)
  // const webUrl = req.webUrl

  return {
    test: 'ok',
  }
})
