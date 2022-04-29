import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './main.css'
import VueSocialSharing from 'vue-social-sharing'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB9554l_WZMU5ybvkp6YBkdvZre33cE61A',
  authDomain: 'forittle.firebaseapp.com',
  projectId: 'forittle',
  storageBucket: 'forittle.appspot.com',
  messagingSenderId: '830353773337',
  appId: '1:830353773337:web:15c1beae3d3e254401ab88',
  measurementId: 'G-588RL58CT6',
}

// Initialize Firebase
initializeApp(firebaseConfig)

createApp(App).use(VueSocialSharing).mount('#app')
