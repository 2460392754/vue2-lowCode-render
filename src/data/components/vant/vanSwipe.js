export default {
    __name__: 'vant 轮播图',
    type: 'van-swipe',
    attribute: {
        style: {
            textAlign: 'center',
            height: '100px',
            color: '#fff',
            backgroundColor: '#409eff'
        },
        props: {
            autoplay: 1000,
            loop: true,
            indicatorColor: 'white'
        }
    },
    children: [
        {
            type: 'van-swipe-item',
            attribute: {},
            children: 1
        },
        {
            type: 'van-swipe-item',
            attribute: {},
            children: 2
        },
        {
            type: 'van-swipe-item',
            attribute: {},
            children: 3
        }
    ],
    __attribute__: {
        style: {
            height: true,
            textAlign: true,
            color: true,
            backgroundColor: true
        },
        props: {
            autoplay: {
                name: '轮播速度',
                type: 'number',
                opts: {
                    min: 1000,
                    max: 1000 * 5,
                    unit: '毫秒'
                }
            },
            loop: {
                name: '循环播放',
                type: 'switch'
            }
            // indicatorColor: 'white'
        }
    }
};
