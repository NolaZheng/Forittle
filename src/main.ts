import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './main.css'
import VueSocialSharing from 'vue-social-sharing'

createApp(App).use(VueSocialSharing).mount('#app')
