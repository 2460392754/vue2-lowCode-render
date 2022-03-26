export const routes = [
    {
        path: '/editor',
        component: () => import('@/pages/editor.vue')
    },
    {
        path: '/preview',
        component: () => import('@/pages/preview.vue')
    }
];
