import Vue from 'vue';
import Vant, { Toast } from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
window.$toast = Toast;
