import { BasicImage, BasicText } from '@/data/components/basic';
import { mergeDeep } from '@/utils/nodeTools';

export default {
    __name__: '首页用户信息',
    __draggable__: false,
    type: 'PageEslintHomeUserInfo',
    attribute: {},
    children: [
        mergeDeep(BasicImage, {
            attribute: {
                slot: 'bg',
                props: {
                    width: 375,
                    height: 247,
                    src: 'https://partner-yanxin.oss-cn-beijing.aliyuncs.com/client-admin/comMobileMould/enlist/CentralBackground.jpg'
                }
            }
        }),
        mergeDeep(BasicText, {
            attribute: {
                slot: 'shareLink',
                class: 'shareLinkBtn',
                props: {
                    value: '分享链接',
                    backgroundImage:
                        'https://partner-yanxin.oss-cn-beijing.aliyuncs.com/client-admin/comMobileMould/enlist/1624343882413.png'
                },
                style: {
                    color: '#fff',
                    fontSize: '12px'
                }
            }
        }),
        mergeDeep(BasicText, {
            attribute: {
                slot: 'sharePoster',
                class: 'sharePosterBtn',
                props: {
                    value: '分享海报',
                    backgroundImage:
                        'https://partner-yanxin.oss-cn-beijing.aliyuncs.com/client-admin/comMobileMould/enlist/1624343882413.png'
                },
                style: {
                    color: '#fff',
                    fontSize: '12px'
                }
            }
        }),
        mergeDeep(BasicText, {
            attribute: {
                slot: 'interestedPeopleCount',
                class: 'interestedPeopleCount',
                props: {
                    value: '感兴趣 {{data.interestedPeopleCount}} 人'
                },
                style: {
                    color: '#fff',
                    fontSize: '12px'
                },
                on: {
                    click: '{{methods.empty}}'
                }
            },
            __attribute__: {
                props: {
                    backgroundImage: null
                }
            }
        })
    ]
};
