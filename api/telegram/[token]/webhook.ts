import { initEnv } from '../../../utils/tgBot/env'
import { handleMessage } from '../../../utils/tgBot/message'
import { errorToString, makeResponse200 } from '../../../utils/tgBot/utils'

export default eventHandler(async (event) => {
  try {
    const raw = await readBody(event)
    const url = getRequestURL(event)
    await initEnv()
    return makeResponse200(await handleMessage(url, raw))
  }
  catch (error) {
    console.error(error)
    return new Response(errorToString(error), { status: 200 })
  }
})
