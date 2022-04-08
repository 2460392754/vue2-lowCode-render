export default {
    __name__: '我的奖品',
    __draggable__: false,
    type: 'PageEslintHomeActivityPrizesSuspendedBtn',
    attribute: {
        style: {
            position: 'fixed',
            color: '#fff',
            backgroundColor: '#409eff',
            fontSize: '14px',
            top: '300px',
            right: '0px',
            zIndex: '9999'
        },
        on: {
            click: '{{methods.showToast}}'
        }
    },
    children: [],
    __attribute__: {
        style: {
            position: true,
            top: true,
            right: true,
            fontSize: true,
            color: true,
            backgroundColor: true
        }
    }
};
