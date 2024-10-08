const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {
                path: 'settings',
                component: () => import('pages/SettingsPage.vue'),
            },
            {
                path: 'workouts',
                component: () => import('pages/Workout/WorkoutsPage.vue'),
            },
            {
                path: 'exercises',
                component: () => import('pages/Exercise/ExercisesPage.vue'),
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
]

export default routes
