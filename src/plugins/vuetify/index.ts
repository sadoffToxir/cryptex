import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
  },
  components: {
    ...labsComponents,
    ...components
  },
  directives,
})
