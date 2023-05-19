import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  esbuild: {
    options: {
      target: 'esnext',
    },
  },
  storage: {
    data: { driver: 'vercelKV' },
  },
})
