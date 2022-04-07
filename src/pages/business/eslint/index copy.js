import {
    pageContainer,
    registerForm,
    registerBanner
} from '@/data/components/pages/eslint';
import { BasicButton, BasicText } from '@/data/components/basic';
import { mergeDeep } from '@/utils/nodeTools';
import { funcToString } from '@/utils/funcToString';

export default {
    vue: 2,
    editorVersion: 1,
    editorEdit: true,
    node: [
        // mergeDeep(BasicText, {
        //     attribute: {
        //         props: {
        //             value: '{{data.userName}}'
        //         }
        //     }
        // })
        // { type: 'div', attribute: {}, children: '{{data.pageStep}}' },
        // mergeDeep(
        //     pageContainer,
        //     {
        //         children: [
        //             {
        //                 __name__: '首页',
        //                 type: 'div',
        //                 attribute: {},
        //                 children: [
        //                     mergeDeep(
        //                         BasicButton,
        //                         {
        //                             attribute: {
        //                                 on: {
        //                                     click: '{{methods.nextPage}}'
        //                                 }
        //                             }
        //                         }
        //                     )
        //                 ]
        //             },
        //             {
        //                 __name__: '注册页',
        //                 type: 'div',
        //                 attribute: {},
        //                 children: [
        //                     mergeDeep(registerBanner, {
        //                         attribute: {
        //                             props: {
        //                                 src: 'https://partner-yanxin.oss-cn-beijing.aliyuncs.com/client-admin/comMobileMould/enlist/1624329510598.png'
        //                             }
        //                         }
        //                     }),
        //                     registerForm
        //                 ]
        //             }
        //         ]
        //     }
        // )
    ]
};
