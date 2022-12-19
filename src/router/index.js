import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  
  {
    path: '/metter',
    name: 'metter',
    component: () => import('../views/metter/MetterView.vue')
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('../views/teacher/TeacherView.vue')
  },
  {
    path: '/student',
    name: 'student',
    component: () => import('../views/student/StudentView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
