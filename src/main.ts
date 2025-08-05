import { createApp } from 'vue'

import App from './App.vue'

import './assets/main.css'
// @ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()


createApp(App).mount('#app')
