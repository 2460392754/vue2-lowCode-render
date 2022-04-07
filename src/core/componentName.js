import { VantCompList } from '@/plugins/common/vant';
import { getCompNameAll } from '@/components/index';

function vant() {
    const component = {};

    VantCompList.forEach((comp) => {
        component[comp.name] = comp;
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
