import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { installSchemaOrg } from '@vueuse/schema-org-vite/vite'

import './assets/main.css'

const app = createApp(App)

app.use(router)

installSchemaOrg({ app, router }, {
  canonicalHost: 'https://vitejs.dev',
})

app.mount('#app')
