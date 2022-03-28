export default {
    __name__: '悬浮按钮',
    __draggable__: false,
    type: 'mySuspendedBtn',
    attribute: {
        style: {
            position: 'fixed',
            color: '#fff',
            backgroundColor: '#409eff',
            padding: '10px',
            fontSize: '18px',
            right: '10px',
            bottom: '10px',
            zIndex: '9999'
        },
        on: {},
        attrs: {
            id: 'xxx'
        }
    },
    children: [],
    __attribute__: {
        style: {
            position: true,
            top: true,
            left: true,
            right: true,
            bottom: true,
            padding: true,
            fontSize: true,
            color: true,
            backgroundColor: true
        },
        on: {
            click: {
                name: '点击'
            }
        }
    }
};
