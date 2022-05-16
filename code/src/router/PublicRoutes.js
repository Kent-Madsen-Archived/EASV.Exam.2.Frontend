/** 
* Authors: Kent vejrup Madsen
*/
module.exports =
[
    {
        path: '/',
        name: 'Home',
        component: () => import( '../views/public/HomeView.vue' )
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
        path: '/about',
        name: 'About',
        component: () => import( /* */ '../views/public/AboutView.vue' )
    }
];