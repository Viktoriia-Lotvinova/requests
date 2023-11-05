import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import RequestListPage from '../views/RequestListPage.vue'
import FormRequestPage from '../views/FormRequestPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/requests',
      name: 'requests',
      component: RequestListPage
    },
    {
      path: '/newrequest',
      name: 'newrequest',
      component: FormRequestPage,
    },
    {
      path: '/request/:id',
      name: 'editrequest',
      component: FormRequestPage,
    },
  ]
})



export default router
