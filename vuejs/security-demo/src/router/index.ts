import { createRouter, createWebHistory } from 'vue-router'
import { useAuthService } from '../services/auth.service'
import LoginForm from '../components/LoginForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginForm,
      meta: { requiresAuth: false }
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuthService()
  
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next('/login')
  } else if (to.path === '/login' && isAuthenticated.value) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
