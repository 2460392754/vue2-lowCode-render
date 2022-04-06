import BasicText from '@/data/components/basic/text';
import { setNodeSlotName } from '@/utils/nodeTools';

export default {
    __name__: '数据列表 copy2',
    type: 'myDataCardCopy2',
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
