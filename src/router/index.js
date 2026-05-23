import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Inside from '../views/Inside.vue'
import User from '../views/User.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/about',name: 'about', component: About },
    { path: '/contact',name: 'contact', component: Contact },  // новый маршрут
    { path: '/contact/inside',name: 'inside', component: Inside },
    { path: '/user/:id',name: 'user', component: User },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router