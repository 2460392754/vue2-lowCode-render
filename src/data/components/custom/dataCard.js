import BasicText from '@/data/components/basic/text';

export default {
    __name__: '数据列表',
    type: 'myDataCard',
    attribute: {},
    children: [
        BasicText,
        {
            type: 'div',
            attribute: {},
            children: [BasicText, BasicText]
        },
        {
            type: 'div',
            attribute: {},
            children: [BasicText, BasicText]
        }
    ],
    __attribute__: {}
};
