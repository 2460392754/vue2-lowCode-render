import Vue from 'vue';
import App from './App.h5.vue';
import './plugins/common'

import Component from './components/index';
import './styles/index.scss';

Vue.use(Component);

Vue.config.productionTip = false;
Vue.prototype.$isEditor = false;
Vue.prototype.$isH5 = true;

new Vue({
    render: (h) => h(App)
}).$mount('#app');
