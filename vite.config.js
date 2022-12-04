import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { SchemaOrg } from '@vueuse/schema-org-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    SchemaOrg({
      // Note: mocking is disable as it's expiremental
      mock: false,
      // use simple types
      full: false,
      // write type alias to tsconfig.json
      dts: true,
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
