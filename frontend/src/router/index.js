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
    ],
    meta: {
      title: 'หน้าหลัก',
      description: 'หน้าหลักระบบคงคลังสินค้า'
    }
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
    ],
    meta: {
      title: 'เกี่ยวกับเรา',
      description: 'รายละเอียดหน้าเกี่ยวกับเรา'
    }
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
    ],
    meta: {
      title: 'ผลงานของเรา',
      description: 'รายละเอียดหน้าผลงานของเรา'
    }
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
    ],
    meta: {
      title: 'บริการของเรา',
      description: 'รายละเอียดหน้าบริการของเรา'
    }
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
    ],
    meta: {
      title: 'ติดต่อเรา',
      description: 'รายละเอียดหน้าติดต่อเรา'
    }
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
    ],
    meta: {
      title: 'สมัครสมาชิกใหม่',
      description: 'รายละเอียดสมัครสมาชิกใหม่'
    }
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
    ],
    meta: {
      title: 'เข้าสู่ระบบ',
      description: 'รายละเอียดหน้าเข้าสู่ระบบ'
    }
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
    ],
    meta: {
      title: 'ลืมรหัสผ่าน',
      description: 'รายละเอียดหน้าลืมรหัสผ่าน'
    }
  },

  // Error 404
  {
    path: "/:catchAll(.*)",
    component: NotFound404,
    meta: {
      title: '404 ไม่พบหน้านี้',
      description: 'รายละเอียดหน้า 404'
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
