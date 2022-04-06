import BasicText from '@/data/components/basic/text';
import { setNodeSlotName } from '@/utils/nodeTools';

export default {
    __name__: '静态数据列表',
    type: 'DemoStaticDataList',
    attribute: {},
    children: [
        {
            type: 'div',
            attribute: {
                id: 'aaa',
                slot: 'header',
                __renderBorder__: false
            },
            children: [BasicText]
        },

        // setNodeSlotName(BasicText, 'main'),

        {
            type: 'div',
            attribute: {
                slot: 'footer'
            },
            children: [BasicText, BasicText, BasicText]
        }
    ],
    __attribute__: {}
};
