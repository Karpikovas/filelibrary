// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'

import App from './App'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

Vue.config.productionTip = false
Vue.use(Vuelidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    var firebaseConfig = {
      apiKey: 'AIzaSyDXMqV-6A38y9IPqTwtzZClplIYF7dMZG0',
      authDomain: 'film-library-f2a3b.firebaseapp.com',
      databaseURL: 'https://film-library-f2a3b.firebaseio.com',
      projectId: 'film-library-f2a3b',
      storageBucket: '',
      messagingSenderId: '460465166306',
      appId: '1:460465166306:web:2207f463d035b7df'
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
  }
})
