import { createRouter, createWebHashHistory } from 'vue-router'
import RecommendView from '@/views/recommend'
import SearchView from '@/views/search'
import SingerView from '@/views/singer'
import TopListView from '@/views/top-list'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: RecommendView
  },
  {
    path: '/search',
    component: SearchView
  },
  {
    path: '/singer',
    component: SingerView
  },
  {
    path: '/top-list',
    component: TopListView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
