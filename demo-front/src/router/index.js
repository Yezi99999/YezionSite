import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/',          name: 'Home',  component: () => import('@/views/Home.vue') },
    { path: '/tech',      name: 'Tech',  component: () => import('@/views/Tech.vue') },
    { path: '/project',   name: 'Project', component: () => import('@/views/Project.vue') },
    { path: '/about',     name: 'About', component: () => import('@/views/About.vue') },
    { path: '/post/:id', component: () => import('@/views/post/[id].vue') }
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
