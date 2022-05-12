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
    component: () => import( '../views/public/HomeView.vue' )
  },

  {
    path: '/about',
    name: 'About',
    component: () => import( /* */ '../views/public/AboutView.vue' )
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import( /* */ '../views/public/LoginView.vue' )
  },

  {
    path: '/registration',
    name: 'Registration',
    component: () => import( /* */ '../views/public/RegistrationView.vue' )
  },

  {
    path: '/prices',
    name: 'Prices',
    component: () => import( /* */ '../views/public/PricesView.vue' )
  },
  
  {
    path: '/features',
    name: 'Features',
    component: () => import( /* */ '../views/public/FeaturesView.vue' )
  },
  
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import( /* */ '../views/login/DashboardView.vue' )
  },
  
  {
    path: '/profile',
    name: 'Profile',
    component: () => import( /* */ '../views/login/ProfileView.vue' )
  },
  
  {
    path: '/kanbans',
    name: 'Kanbans',
    component: () => import( /* */ '../views/login/KanbanView.vue' )
  },
  
  {
    path: '/projects',
    name: 'Projects',
    component: () => import( /* */ '../views/login/ProjectView.vue' )
  },
  
  {
    path: '/settings',
    name: 'Settings',
    component: () => import( /* */ '../views/login/SettingsView.vue' )
  }
]

const router = createRouter(
  {
    history: createWebHistory( process.env.BASE_URL ),
    routes
  }
)

export default router;
