// server/api/webcard.ts

import { errorMessage } from '@stargram/core/utils'
import { SupabaseImageStorage } from '@stargram/core/storage/supabase'

export default eventHandler(async (event) => {
  try {
    const { imgCfg } = await readBody(event)
    const imgStorage = new SupabaseImageStorage(imgCfg)

    return imgCfg
  }
  catch (error: any) {
    setResponseStatus(event, 400)

    const message = errorMessage(error)
    return { error: message }
  }
})
