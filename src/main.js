import Vue from 'vue'
import firebase from 'firebase'

import App from './App'
import router from './router'
import store from './store/index';

import './components/firebaseInit'

Vue.config.productionTip = false

let app

firebase.auth().onAuthStateChanged(function(user) {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            components: { App },
            template: '<App/>'
        })
    }
});
