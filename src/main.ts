import { createApp } from 'vue';

import App from './App.vue';
import BaseInput from './components/base/BaseInput.vue';

import { setupRouter } from './router';
import { registerPlugins } from './plugins';

import './assets/main.css';

const app = createApp(App);

await setupRouter(app)
registerPlugins(app)

app.component('BaseInput', BaseInput)

app.mount('#app');
