import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Application from './App.vue'
import router from './router'

const app = createApp(Application)

app.use(createPinia())
app.use(router)

app.mount('#app')