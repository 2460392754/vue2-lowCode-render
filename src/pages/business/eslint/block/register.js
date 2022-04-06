import { mergeDeep } from '@/utils/nodeTools';
import { registerForm, registerBanner } from '@/data/components/pages/eslint';

export default [
    mergeDeep(registerBanner, {
        attribute: {
            props: {
                src: 'https://partner-yanxin.oss-cn-beijing.aliyuncs.com/client-admin/comMobileMould/enlist/1624329510598.png'
            }
        }
    }),
    registerForm
];
