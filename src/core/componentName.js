import * as Vant from 'vant';
import { getCompNameAll } from '@/components/index';

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

function compNameAll() {
    const obj = {};

    getCompNameAll.map((name) => {
        obj[name] = name;
    });

    return obj;
}

export default {
    ...vant(),
    ...compNameAll()
};
