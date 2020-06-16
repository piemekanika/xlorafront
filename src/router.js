import VueRouter from 'vue-router';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/views/chat.vue'),
        },
        {
            path: '/login',
            meta: { layout: 'rectangle' },
            component: () => import('@/views/login.vue'),
        },
        { path: '*', redirect: '/' },
    ],
});

export default router;