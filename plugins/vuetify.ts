import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const myCustomTheme = {
  dark: true,
  colors: {
    background: '#0a0a0a',
    primary: "#c91313",
  }
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myCustomTheme',
      themes: {
        myCustomTheme
      }
    },
  })
  app.vueApp.use(vuetify)
})
