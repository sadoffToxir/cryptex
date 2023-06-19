import { createApp } from 'vue'
import App from './App.vue'

import plugins from '@/plugins'

const app = createApp(App)

for(const plugin in plugins) {
  //@ts-ignore
  app.use(plugins[plugin])
}

app.mount('#app')
