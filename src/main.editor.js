import Vue from 'vue';
import App from './App.editor.vue';
import './plugins/editor';
import './plugins/common';

import Component from './components/index';
import './styles/index.scss';

Vue.use(Component);
Vue.config.productionTip = false;
Vue.prototype.$isEditor = true;
Vue.prototype.$isH5 = false;

new Vue({
    render: (h) => h(App)
}).$mount('#app');
