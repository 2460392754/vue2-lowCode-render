import {
    pageContainer,
    registerForm,
    registerBanner
} from '@/data/components/pages/eslint';
import { BasicButton, BasicText } from '@/data/components/basic';
import { mergeDeep } from '@/utils/nodeTools';

export default {
    vue: 2,
    editorVersion: 1,
    editorEdit: true,
    node: [
        mergeDeep(
            { ...pageContainer },
            {
                children: [
                    {
                        __name__: '首页',
                        type: 'div',
                        attribute: {},
                        children: [
                            // mergeDeep(
                            //     { ...BasicButton },
                            //     {
                            //         attribute: {
                            //             on: {
                            //                 click: '{{methods.nextPage}}'
                            //             }
                            //         }
                            //     }
                            // )
                        ]
                    }
                    // {
                    //     __name__: '注册页',
                    //     type: 'div',
                    //     attribute: {},
                    //     children: [
                    //         mergeDeep(registerBanner, {
                    //             attribute: {
                    //                 props: {
                    //                     src: 'https://partner-yanxin.oss-cn-beijing.aliyuncs.com/client-admin/comMobileMould/enlist/1624329510598.png'
                    //                 }
                    //             }
                    //         }),
                    //         registerForm
                    //     ]
                    // }
                ]
            }
        )
    ],
    data: {
        pageStep: 'eval(window.$ref(0))'
    },
    methods: {
        nextPage: "window.$toast.success('操作成功');"
        // nextPage: '{{data.pageStep.value++}}'
    }
};
