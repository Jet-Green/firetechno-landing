// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const myCustomTheme = {
  colors: {
    background: '#0a0a0a',
    primary: "#c91313",
  }
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
      defaultTheme: 'myCustomTheme',
      themes: {
        myCustomTheme
      }
    },
  })
  app.vueApp.use(vuetify)
})
