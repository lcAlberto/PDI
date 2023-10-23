import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from "@/views/player/authenticated/default-layout.vue";

import PlayerPage from '../views/player/authenticated/pages/player-page.vue'

import IndexPage from '../views/index-page.vue'
import UploadPage from '../views/upload-page.vue'
import KanbanPage from '../views/kanban-page.vue'
import Kanban2Page from '../views/kanban2-page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: DefaultLayout,
      children: [
        { path: '',  component: IndexPage, name: 'home'},
        { path: '/player',  component: PlayerPage, name: 'home'},
        { path: '/kanban2',  component: Kanban2Page, name: 'kanban'}
      ]
    },
    {
      path: '/login',
      name: 'login',
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
