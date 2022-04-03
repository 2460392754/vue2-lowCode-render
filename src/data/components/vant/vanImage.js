export default {
    __name__: 'vant 图片',
    type: 'van-image',
    attribute: {
        style: {},
        props: {
            round: false,
            fit: 'cover',
            width: '10rem',
            height: '10rem',
            src: 'https://img01.yzcdn.cn/vant/cat.jpeg'
        },
        on: {}
    },
    children: [],
    __attribute__: {
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
            src: {
                name: '图片地址',
                type: 'input'
            }
        }
    }
};
