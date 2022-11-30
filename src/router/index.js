import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/metter/MetterView.vue')
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('../views/teacher/TeacherView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
