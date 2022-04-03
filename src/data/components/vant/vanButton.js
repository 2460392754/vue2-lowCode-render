export default {
    __name__: 'vant 按钮',
    type: 'van-button',
    attribute: {
        style: {},
        props: {
            round: false,
            type: 'primary',
            block: true
        },
        on: {}
    },
    children: '按钮',
    __attribute__: {
        on: {
            click: {
                name: '点击'
            }
        },
        props: {
            round: {
                name: '圆角',
                type: 'switch'
            },
            type: {
                name: '属性',
                type: 'select',
                data: [
                    {
                        label: '主要',
                        value: 'primary'
                    },
                    {
                        label: '信息',
                        value: 'info'
                    },
                    {
                        label: '默认',
                        value: 'default'
                    },
                    {
                        label: '警告',
                        value: 'warning'
                    },
                    {
                        label: '危险',
                        value: 'danger'
                    }
                ]
            }
        }
    },
    __children__: true
};
