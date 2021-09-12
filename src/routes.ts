import { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    useLayout?: string
  }
}

const Home = () => import('./pages/Home.vue')
const About = () => import('./pages/About.vue')
const Auth = () => import('./pages/Auth.vue')

export const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: 'about',
    path: '/about',
    component: About,
    meta: {
      requiresAuth: true,
      useLayout: 'default',
    },
  },
  {
    name: 'login',
    path: '/auth/login',
    component: Auth,
    meta: {
      requiresAuth: false,
      useLayout: 'auth',
    },
  },
]
