import { initBasicFonts } from '../utils/webCard/font'

export default defineNitroPlugin(async (_nitroApp) => {
  await initBasicFonts()
})
