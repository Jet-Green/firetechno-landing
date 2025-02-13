import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  css: ['~/assets/styles/main.scss'],

  //...
  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    ['@nuxtjs/google-fonts', {
      families: {
        'Dela Gothic One': [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    }],
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  devtools: {
    enabled: true
  },

  compatibilityDate: '2025-02-13'
})