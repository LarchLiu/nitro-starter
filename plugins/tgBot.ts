import { initEnv } from '../utils/tgBot/env'

export default defineNitroPlugin(async (_nitroApp) => {
  await initEnv()
})
