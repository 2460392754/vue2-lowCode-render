import { BasicImage, BasicText } from '@/data/components/basic';
import { mergeDeep } from '@/utils/nodeTools';

export default {
    __name__: '注册成功弹窗',
    __draggable__: false,
    type: 'PageEslintRegisterSuccessDialog',
    attribute: {},
    children: [
        mergeDeep(BasicText, {
            attribute: {
                slot: 'closeBtn',
                class: 'closeBtn',
                props: {
                    value: '',
                    backgroundImage:
                        'https://partner-yanxin.oss-cn-beijing.aliyuncs.com/client-admin/comMobileMould/com/1633776555633.png'
                }
            },
            __attribute__: {
                props: {
                    value: null
                },
                style: {
                    textAlign: null,
                    color: null,
                    fontSize: null
                }
            }
        }),
        mergeDeep(BasicText, {
            attribute: {
                slot: 'tipsText',
                class: 'tipsText',
                props: {
                    value: '更多服务，请您下载“国寿AI健康”APP进行体验'
                },
                style: {
                    color: '#fff',
                    fontSize: '14px'
                }
            },
            __attribute__: {
                props: {
                    backgroundImage: null
                }
            }
        }),
        mergeDeep(BasicText, {
            attribute: {
                slot: 'openBtn',
                class: 'openBtn',
                props: {
                    value: '打开国寿AI健康APP',
                    backgroundImage:
                        'https://partner-yanxin.oss-cn-beijing.aliyuncs.com/client-admin/comMobileMould/enlist/signOk/btnBg.png'
                },
                style: {
                    color: '#F13110',
                    fontSize: '14px'
                }
            },
            __attribute__: {
                style: {
                    textAlign: null
                }
            }
        })
    ]
};
