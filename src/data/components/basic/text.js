export default {
    __name__: '文本',
    type: 'basicText',
    attribute: {
        class:'aaabb',
        style: {
            textAlign: 'center',
            fontSize: '15px',
            padding: '5px',
            color: '#000'
        },
        props: {
            value: '这是文本'
        },
        on: {
            click: '{{methods.onSubmitCallback}}'
        }
    },
    children: [],
    __attribute__: {
        style: {
            textAlign: true,
            fontSize: true,
            padding: true,
            color: true
        },
        props: {
            value: {
                name: '内容',
                type: 'input'
            }
        },
        on: {
            click: {
                name: '点击'
            }
        }
    }
};
