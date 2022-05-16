/** 
* Authors: Kent vejrup Madsen
*/
module.exports =
[
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
];