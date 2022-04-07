import { funcToString } from '@/utils/funcToString';

export default {
    data: {
        // 回调函数里的语句需要写分号
        // 页面位置索引
        pageStep: funcToString(() => {
            eval(window.$ref(0));
        }),

        // 注册信息
        userInfo: funcToString(() => {
            eval(
                window.$ref({
                    name: '',
                    mobile: ''
                })
            );
        }),

        // 感兴趣 人数
        interestedPeopleCount: funcToString(() => {
            eval(window.$ref(0));
        }),

        // 注册成功弹窗 显示状态
        registerSuccessDialogVisible: funcToString(() => {
            eval(window.$ref(false));
        })
    },

    methods: {
        // 空函数事件
        empty: funcToString(() => {}),

        // 回调函数里的语句需要写分号
        onNextPage: funcToString(() => {
            '{{data.pageStep}}'.value++;
            console.log('{{data.pageStep}}'.value);
        }),

        // 设置用户信息
        setUserInfo: funcToString(() => {
            '{{data.userInfo}}'.value.name = 'Admin';
            '{{data.userInfo}}'.value.mobile = '18812341234';
        }),

        // 切换 注册成功弹窗 状态
        toggleRegisterSuccessDialog: funcToString(() => {
            const d = '{{data.registerSuccessDialogVisible}}';

            d.value = !d.value;
        })
    },

    created: funcToString(() => {
        console.log('is created');
    }),

    mounted: funcToString(() => {
        console.log('is mounted');
        eval('{{methods.setUserInfo}}');
    })
};
