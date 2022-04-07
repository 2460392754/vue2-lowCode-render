import Vue from 'vue';
import { Toast, Image, Button, Form, Field, Icon } from 'vant';

import 'vant/lib/toast/style';
import 'vant/lib/image/style';
import 'vant/lib/button/style';
import 'vant/lib/form/style';
import 'vant/lib/field/style';
import 'vant/lib/icon/style';

export const VantCompList = [Image, Button, Form, Field, Icon];

window.$toast = Toast;

VantCompList.forEach((comp) => Vue.component(comp.name, comp));
