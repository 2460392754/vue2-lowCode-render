export default {
    __name__: '文本',
    type: 'basicText',
    attribute: {
        class: 'isTextTest',
        style: {
            textAlign: 'center',
            fontSize: '14px',
            // padding: '5px',
            color: '#000',
            backgroundImage: ''
        },
        props: {
            value: '这是文本'
        },
        on: {
            click: ''
        }
    },
    children: [],
    __attribute__: {
        style: {
            textAlign: true,
            fontSize: true,
            // padding: true,
            color: true
        },
        props: {
            value: {
                name: '内容',
                type: 'input'
            },
            backgroundImage: {
                name: '图片地址',
                type: 'upload',
                data: []
            }
        },
        on: {
            click: {
                name: '点击'
            }
        }
    }
};
