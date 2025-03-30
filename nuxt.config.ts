import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  css: ['~/assets/styles/main.scss'],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {

      }
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    public: {
      formToMailApiKey: process.env.FORM_TO_MAIL_API_KEY,
    }
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
        'Unbounded': [300, 400, 500, 600, 700, 800]
      }
    }],
  ],
  devtools: {
    enabled: true
  },

  compatibilityDate: '2025-02-13'
})