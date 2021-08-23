import { createRouter, createWebHistory } from 'vue-router'

// Import Layouts
import FrontendLayout from '@/layouts/Frontend.vue'

// Import Views
// Frontend
import Home from '@/views/frontend/Home.vue'
import About from '@/views/frontend/About.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Service from '@/views/frontend/Service.vue'
import Contact from '@/views/frontend/Contact.vue'
import Register from '@/views/frontend/Register.vue'
import Login from '@/views/frontend/Login.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'
import NotFound404 from '@/views/frontend/NotFound404.vue'

// Backend
const routes = [
  {
    path: '/',
    name: 'Home',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: Home
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: About
      }
    ]
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: Portfolio
      }
    ]
  },
  {
    path: '/service',
    name: 'Service',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: Service
      }
    ]
  },
  {
    path: '/contact',
    name: 'Contact',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: Contact
      }
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: Register
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: Login
      }
    ]
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: ForgotPassword
      }
    ]
  },

  // Error 404
  {
    path: "/:catchAll(.*)",
    component: NotFound404,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
