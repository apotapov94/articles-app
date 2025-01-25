import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '../views/404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Главная',
      component: HomeView,
    },
    {
      path: '/articles',
      name: 'Статьи',
      component: () => import('../views/ArticlesView.vue'),
    },
    {
      path: '/articles/:keyword',
      component: () => import('../views/ArticleDetailView.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: PageNotFound,
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404',
    },
  ],
})

export default router
