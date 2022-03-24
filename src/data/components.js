export const basic = [
    {
        name: 'van 按钮',
        type: 'van-button',
        attribute: {
            style: {
                round: false
            },
            props: {
                type: 'primary',
                block: true
            }
        },
        children: '按钮',
        __attribute__: {
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
                        },
                    ]
                }
            }
        },
        __children__: true
    },
    {
        name: 'el 按钮',
        type: 'ElButton',
        attribute: {
            style: {},
            props: {
                type: 'primary',
                round: false
            }
        },
        children: '按钮',
        __attribute__: {
            props: {
                type: {
                    name: '属性',
                    type: 'select',
                    data: [
                        {
                            label: '主要',
                            value: 'primary'
                        },
                        {
                            label: '成功',
                            value: 'success'
                        }
                    ]
                },
                round: {
                    name: '圆角',
                    type: 'switch'
                }
            }
        },
        __children__: true
    }
];

export default {
    basic
};
