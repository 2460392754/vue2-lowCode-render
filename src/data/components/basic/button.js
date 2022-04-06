export default {
    __name__: '按钮',
    type: 'basicButton',
    attribute: {
        props: {
            fontSize: '14px',
            color: '#fff',
            backgroundColor: '#409eff'
        }
    },
    children: '提交',
    __attribute__: {
        props: {
            fontSize: {
                name: '字体大小',
                type: 'input'
            },
            color: {
                name: '字体颜色',
                type: 'color'
            },
            backgroundColor: {
                name: '背景颜色',
                type: 'color'
            }
        }
    },
    __children__: true
};
