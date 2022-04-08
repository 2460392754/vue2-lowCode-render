export default {
    __name__: '活动管理',
    __draggable__: false,
    type: 'PageEslintHomeActivityManageSuspendedBtn',
    attribute: {
        style: {
            position: 'fixed',
            color: '#fff',
            backgroundColor: '#409eff',
            fontSize: '14px',
            top: '250px',
            left: '0px',
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
            left: true,
            fontSize: true,
            color: true,
            backgroundColor: true
        }
    }
};
