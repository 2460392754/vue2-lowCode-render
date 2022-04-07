import { funcToString } from '@/utils/funcToString';

export default {
    data: {
        // 回调函数里的语句需要写分号
        // 页面位置索引
        pageStep: funcToString(() => {
            eval(window.$ref(0));
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

        setUserName: funcToString(() => {
            console.log(jsonData);
            // console.log('is methods setUserName');
            // '{{data.userName}}'.value = 'is FTY';

            // console.log('username:', '{{data.userName}}'.value);
            // console.log('{{data.userName}}');

            // window.$toast.success('修改用户名成功');

            // setTimeout(() => {
            '{{data.userName}}'.value = 'Admin';
            window.$toast.success('修改用户名成功');
            // }, 1000);
        }),

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
        eval('{{methods.setUserName}}');
    })
};
