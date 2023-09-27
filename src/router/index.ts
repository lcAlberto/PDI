import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../views/index-page.vue'
import UploadPage from '../views/upload-page.vue'
import KanbanPage from '../views/kanban-page.vue'
import Kanban2Page from '../views/kanban2-page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexPage
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadPage
    },
    {
      path: '/kanban',
      name: 'kanban',
      component: KanbanPage
    },
    {
      path: '/kanban2',
      name: 'kanban2',
      component: Kanban2Page
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
