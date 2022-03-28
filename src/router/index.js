import { routes } from './routes';
import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes,
    mode: 'hash'
});
