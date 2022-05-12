import 
{ 
    createRouter, 
    createWebHistory 
} from 'vue-router';

import HomeView 
  from '../views/HomeView.vue';

import RedirectView 
  from '../views/RedirectView.vue';


const routes = 
[
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/redirect',
    name: 'redirect',
    component: RedirectView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* */ '../views/AboutView.vue')
  }
]

const router = createRouter(
  {
    history: createWebHistory( process.env.BASE_URL ),
    routes
  }
)

export default router
