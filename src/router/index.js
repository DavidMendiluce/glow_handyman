import {createRouter, createWebHistory} from 'vue-router'

import AboutUsPage from '../components/AboutUsPage'
import ContactPage from '../components/ContactPage'
import TestimonialsPage from '../components/TestimonialsPage'

const routes = [
  {
    path: '/aboutus',
    name: 'AboutUsPage',
    component: AboutUsPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/testimonials',
    name: 'TestimonialsPage',
    component: TestimonialsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes
})

export default router