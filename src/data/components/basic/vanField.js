export default {
    __name__: 'van 输入框',
    type: 'van-field',
    attribute: {
        style: {},
        props: {
            label: '用户名',
            placeholder: '请输入用户名'
        }
    },
    children: [],
    __attribute__: {
        props: {
            label: {
                name: '标签',
                type: 'input'
            },
            placeholder: {
                name: '提示内容',
                type: 'input'
            }
        }
    }
};
