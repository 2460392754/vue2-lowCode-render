export default {
    __name__: '注册页-图片',
    type: 'PageEslintRegisterBanner',
    attribute: {
        style: {
            margin: '0px'
        },
        props: {
            fit: 'cover',
            width: 375,
            height: 150,
            src: ''
        },
        on: {}
    },
    children: [],
    __attribute__: {
        style: {
            margin: true
        },
        props: {
            fit: {
                name: '填充模式',
                type: 'select',
                data: [
                    {
                        label: '拉伸图片，使图片填满元素',
                        value: 'fill'
                    },
                    {
                        label: '保持宽高缩放图片，使图片的长边能完全显示出来',
                        value: 'contain'
                    },
                    {
                        label: '保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边',
                        value: 'cover'
                    },
                    {
                        label: '保持图片原有尺寸',
                        value: 'none'
                    },
                    {
                        label: '危险',
                        value: 'scale-down'
                    }
                ]
            },
            width: {
                name: '宽度',
                type: 'number',
                opts: {}
            },
            height: {
                name: '高度',
                type: 'number',
                opts: {}
            },
            src: {
                name: '图片地址',
                type: 'upload',
                data: []
            }
            // src: {
            //     name: '图片地址',
            //     type: 'input'
            // },
        }
    }
};
