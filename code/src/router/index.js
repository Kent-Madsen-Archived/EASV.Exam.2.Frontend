import 
{ 
    createRouter, 
    createWebHistory 
} from 'vue-router';

<<<<<<< HEAD
import RedirectView 
  from '../views/RedirectView.vue';

=======
import HomeView 
  from '../views/HomeView.vue';
>>>>>>> 9c987f1a29d3e73d43d0a3dd98b88e94e6583a30

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
<<<<<<< HEAD
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
    path: '/kanbans',
    name: 'Kanban',
    component: () => import( /* */ '../views/KanbanView.vue' )
  },
  
  {
    path: '/projects',
    name: 'Project',
    component: () => import( /* */ '../views/ProjectView.vue' )
  },
  
  {
    path: '/settings',
    name: 'Settings',
    component: () => import( /* */ '../views/SettingsView.vue' )
  }
=======
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
>>>>>>> 9c987f1a29d3e73d43d0a3dd98b88e94e6583a30
]

const router = createRouter(
  {
    history: createWebHistory( process.env.BASE_URL ),
    routes
  }
)

export default router;
