import Vue from 'vue';
import App from './App.editor.vue';
// ===
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// ===
import Vant from 'vant';
import 'vant/lib/index.css';
// ===
import VueCompositionAPI from '@vue/composition-api';
import { ref } from '@vue/composition-api';
// ===
import Contextmenu from 'vue-contextmenujs';

// ===
import Component from './components/index';
import './styles/index.scss';

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(Component);
Vue.use(Contextmenu);

window.$ref = ref;
window.$message = ElementUI.Message;

new Vue({
    // router,
    render: (h) => h(App)
}).$mount('#app');
