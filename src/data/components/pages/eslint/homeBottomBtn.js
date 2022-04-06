import { BasicButton } from '@/data/components/basic';
import { mergeDeep } from '@/utils/nodeTools';

// export default mergeDeep(BasicButton, {
//     __name__: '首页底部按钮',
//     __draggable__: false,
//     attribute: {
//         style: {
//             position: 'fixed',
//             bottom: '0px',
//             zIndex: '9999'
//         },
//         props: {
//             block: true
//         }
//     },
//     children: '我感兴趣',
//     __attribute__: {
//         style: {
//             position: true
//         }
//     }
// });
export default {
    __name__: '首页底部按钮',
    __draggable__: false,
    type: 'PageEslintHomeBottomBtn',
    attribute: {
        style: {
            position: 'fixed',
            bottom: '0px',
            fontSize: '14px',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#409eff'
        },
        props: {}
    },
    children: '我感兴趣',
    __attribute__: {
        style: {
            position: true,
            textAlign: true,
            fontSize: true,
            color: true,
            backgroundColor: true
        }
    }
};
