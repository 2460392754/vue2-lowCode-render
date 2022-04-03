import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { ref } from '@vue/composition-api';

Vue.use(VueCompositionAPI);
window.$ref = ref;
