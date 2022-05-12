import 
{ 
    createRouter, 
    createWebHistory 
} from 'vue-router';

import RedirectView 
  from '../views/RedirectView.vue';


const routes = 
[
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/HomeView.vue' )
  },

  {
    path: '/redirect',
    name: 'Redirect',
    component: RedirectView
  },

  {
    path: '/about',
    name: 'About',
    component: () => import( /* */ '../views/AboutView.vue' )
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import( /* */ '../views/LoginView.vue' )
  },

  {
    path: '/registration',
    name: 'Registration',
    component: () => import( /* */ '../views/RegistrationView.vue' )
  },

  {
    path: '/prices',
    name: 'Prices',
    component: () => import( /* */ '../views/PricesView.vue' )
  },
  
  {
    path: '/features',
    name: 'Features',
    component: () => import( /* */ '../views/FeaturesView.vue' )
  },
  
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import( /* */ '../views/DashboardView.vue' )
  },
  
  {
    path: '/profile',
    name: 'Profile',
    component: () => import( /* */ '../views/ProfileView.vue' )
  },
  
  {
    path: '/kanban',
    name: 'Kanban',
    component: () => import( /* */ '../views/KanbanView.vue' )
  },
  
  {
    path: '/project',
    name: 'Project',
    component: () => import( /* */ '../views/ProjectView.vue' )
  }
]

const router = createRouter(
  {
    history: createWebHistory( process.env.BASE_URL ),
    routes
  }
)

export default router
