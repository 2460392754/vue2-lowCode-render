export default {
    __name__: '图片',
    type: 'basicImage',
    attribute: {
        style: {
            textAlign: 'left'
        },
        props: {
            round: false,
            fit: 'cover',
            width: 100,
            height: 100,
            src: ''
        },
        on: {}
    },
    children: [],
    __attribute__: {
        style: {
            textAlign: true
        },
        props: {
            round: {
                name: '圆形',
                type: 'switch'
            },
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
            // width: {
            //     name: '宽度',
            //     type: 'number',
            //     opts: {}
            // },
            // height: {
            //     name: '高度',
            //     type: 'number',
            //     opts: {}
            // },
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
