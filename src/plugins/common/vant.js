import Vue from 'vue';
import { Toast, Image, Button } from 'vant';

import 'vant/lib/toast/style';
import 'vant/lib/image/style';
import 'vant/lib/button/style';

export const VantCompList = [Image, Button];

window.$toast = Toast;

VantCompList.forEach((comp) => Vue.component(comp.name, comp));