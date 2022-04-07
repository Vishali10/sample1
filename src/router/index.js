import { createRouter, createWebHistory } from 'vue-router'
import AgentLanding from '../views/AgentLandingView'
const routes = [
  {
    path: '/superAgent',
    name: 'superAgent',
    component: AgentLanding
  },
  //redirect
  {
    path: '/',
    redirect: '/superAgent'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
