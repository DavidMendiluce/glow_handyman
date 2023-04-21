import {createRouter, createWebHistory} from 'vue-router'

import AboutUsPage from '../components/AboutUsPage'
import TestimonialsPage from '../components/TestimonialsPage'

const routes = [
  {
    path: '/aboutus',
    name: 'AboutUsPage',
    component: AboutUsPage
  },
  {
    path: '/testimonials',
    name: 'TestimonialsPage',
    component: TestimonialsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router