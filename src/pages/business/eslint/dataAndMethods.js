import { funcToString } from '@/utils/funcToString';

export default {
    data: {
        // 回调函数里的语句需要写分号
        pageStep: funcToString(() => {
            eval(window.$ref(0));
        }),
        userName: funcToString(() => {
            eval(window.$ref('fty'));
        }),
        interestedPeopleCount: funcToString(() => {
            eval(window.$ref(0));
        })
    },

    methods: {
        // 空函数事件
        empty: funcToString(() => {}),

        // 回调函数里的语句需要写分号
        nextPage: funcToString(() => {
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
