/// <reference types="vitest" />
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [ vue(), vuetify() ],
  test:{
    globals:true, 
    environment: 'happy-dom', 
    deps: { inline: [ 'vuetify' ] }
  },
  resolve: {
    alias:{
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './'),
    }
  }
})
