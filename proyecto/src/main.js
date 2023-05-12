import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

///////////////////Firebase///////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-qQDoLe8dxi9zcPZw-hXDyA9XAEAWquI",
  authDomain: "practicalogin-30a2c.firebaseapp.com",
  databaseURL: "https://practicalogin-30a2c-default-rtdb.firebaseio.com",
  projectId: "practicalogin-30a2c",
  storageBucket: "practicalogin-30a2c.appspot.com",
  messagingSenderId: "86035441408",
  appId: "1:86035441408:web:22f86af525b656d799f5e5"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
//////////////////////////////////////////////////////

const app = createApp(App)
  .use(IonicVue)
  .use(appFirebase)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});