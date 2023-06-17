import {createRouter, createWebHistory} from 'vue-router'

import AboutUsPage from '../components/AboutUsPage'
import ContactPage from '../components/ContactPage'
import TestimonialsPage from '../components/TestimonialsPage'
import PrivacyPage from '../components/PrivacyPage'
import TermsPage from '../components/TermsPage'

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
  },
  {
    path: '/privacy',
    name: 'PrivacyPage',
    component: PrivacyPage
  },
  {
    path: '/terms',
    name: 'TermsPage',
    component: TermsPage
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