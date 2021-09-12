import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { useUserStore } from './stores/userStore'
import './main.css'
import App from './App.vue'
import DefaultLayout from './layouts/Default.vue'
import AuthLayout from './layouts/Auth.vue'

// Create vue app
const app = createApp(App)

// define layouts
app.component('default-layout', DefaultLayout)
app.component('auth-layout', AuthLayout)

// use pinia
app.use(createPinia())
const userStore = useUserStore()

// configure router
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// add navigation guard
router.beforeEach((to) => {
  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    return {
      name: 'login',
      query: { redirect: to.fullPath },
    }
  }
})
// use vue router
app.use(router)

// mount app
app.mount('#app')
