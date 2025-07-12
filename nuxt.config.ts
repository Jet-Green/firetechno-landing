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
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1',
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" }
      ]
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml'], // включаем sitemap в генерацию
    }
  },
  modules: [
    '@nuxtjs/sitemap',
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
  compatibilityDate: '2025-02-13',
  site: {
    url: 'https://firetechno.ru',
    name: 'FIRE TECHNO',
  },
  // sitemap: {
  //   hostname: 'https://firetechno.ru',
  //   gzip: true,
  //   routes: ['/']
  // },

})