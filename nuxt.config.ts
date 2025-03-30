import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  css: [
    "vuetify/styles",
    '~/assets/styles/main.scss',
    '@mdi/font/css/materialdesignicons.css'
  ],
  plugins: ['~/plugins/vuetify.ts'],
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
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "vuetify/styles"',
        },
      }
    }
  },
  compatibilityDate: '2025-02-13'
})