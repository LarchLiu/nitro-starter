import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  esbuild: {
    options: {
      target: 'esnext',
    },
  },
  prerender: {
    crawlLinks: false,
    routes: ['/'],
  },
})
