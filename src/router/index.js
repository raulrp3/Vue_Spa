import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login';
import Register from '@/components/Register';
import Home from '@/components/Home';
import Detail from '@/components/Detail';

Vue.use(Router)

const routes = [
    { path: '/', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/home', name: 'Home', component: Home },
    { path: '/detail/:id', name: 'Detail', component: Detail },
]

export default new Router({
    routes
})