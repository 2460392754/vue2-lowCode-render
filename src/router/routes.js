export const routes = [
    {
        path: '/editor',
        component: () => import('@/layouts/editor.vue')
    },
    {
        path: '/preview',
        component: () => import('@/layouts/preview.vue')
    }
];
