import {
    homeActivityRulesSuspendedBtn,
    homeActivityPrizesSuspendedBtn,
    homeActivityManageSuspendedBtn,
    homeUserInfo,
    homeContainer,
    homeBottomBtn
} from '@/data/components/pages/eslint';
import { mergeDeep } from '@/utils/nodeTools';

export default [
    homeActivityRulesSuspendedBtn,
    homeActivityPrizesSuspendedBtn,
    homeActivityManageSuspendedBtn,
    homeUserInfo,
    homeBottomBtn,
    mergeDeep(homeContainer, {
        attribute: {
            props: {
                src: 'https://partner-yanxin.oss-cn-beijing.aliyuncs.com/client-admin/comMobileMould/enlist/Longchart.jpg'
            }
        }
    })
];
