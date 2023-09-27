import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// config.autoAddCss = false

library.add(far)
library.add(fab)
library.add(fas)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
