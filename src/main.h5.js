import Vue from 'vue';
import App from './App.h5.vue';
// ===
import Vant from 'vant';
import { Toast } from 'vant';
import 'vant/lib/index.css';
// ===
import VueCompositionAPI from '@vue/composition-api';
import { ref } from '@vue/composition-api';
// ===
import Component from './components/index';
import './styles/index.scss';

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);
Vue.use(Vant);
Vue.use(Component);

window.$ref = ref;
window.$toast = Toast;

new Vue({
    render: (h) => h(App)
}).$mount('#app');
