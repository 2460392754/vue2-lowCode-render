import * as ElementUi from 'element-ui';
import * as Vant from 'vant'
import { getCompNameAll } from '@/components/index';

function element() {
    const component = {};

    // 筛选出 element-ui 组件，例如："ElButton"
    Object.keys(ElementUi).forEach((k) => {
        const val = ElementUi[k];

        if (/^El/.test(val.name)) {
            component[k] = ElementUi[k];
        }
    });

    return component;
}

function vant() {
    const component = {};

    // 筛选出 van 组件，例如："van-button"
    Object.keys(Vant).forEach((k) => {
        const val = Vant[k];

        if (/^van-/.test(val.name)) {
            component[k] = Vant[k];
        }
    });

    return component;
}

export default {
    ...element(),
    ...vant(),
    ...getCompNameAll
};
