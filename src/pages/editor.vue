<template>
    <el-container class="c-1">
        <Header />
        <el-container>
            <Left />
            <Main />
            <Right />
        </el-container>
    </el-container>
</template>

<script>
import Left from '@/components/editor/left';
import Right from '@/components/editor/right';
import Header from '@/components/editor/header';
import Main from '@/components/editor/main';

export default {
    components: {
        Left,
        Right,
        Header,
        Main
    },

    provide() {
        return {
            store: this.store
        };
    },

    data() {
        return {
            store: {
                selectComponentId: null,
                node: [],
                data: {
                    // stepActive: 'eval(window.$ref(0))',
                    // stepList:
                    //     "eval([{'title':'登录','desc':'这是登录页'}, {'title':'首页','desc':'这是首页'}])",
                    loginData:
                        "eval(window.$ref({username:'11',password:'22'}))"
                },
                methods: {
                    onSubmitCallback: "window.$toast.success('操作成功');"
                }
            }
        };
    },

    // created() {
    //     this.store.node = [
    //         {
    //             __name__: '悬浮按钮',
    //             __draggable__: false,
    //             type: 'mySuspendedBtn',
    //             attribute: {
    //                 style: {
    //                     position: 'absolute',
    //                     color: '#fff',
    //                     backgroundColor: '#409eff',
    //                     padding: '10px',
    //                     fontSize: '18px',
    //                     right: '10px',
    //                     bottom: '10px'
    //                 }
    //             },
    //             children: [],
    //             __attribute__: {
    //                 style: {
    //                     position: true,
    //                     top: true,
    //                     left: true,
    //                     right: true,
    //                     bottom: true,
    //                     padding: true,
    //                     fontSize: true,
    //                     color: true,
    //                     backgroundColor: true
    //                 }
    //             },
    //             __id__: 'a21687bd-e9f6-4411-9fb2-19a5b095075d'
    //         }
    //     ];
    // }
};
</script>

<style scoped lang="scss">
.c-1 {
    flex-direction: column;
    height: 100vh;
}
</style>
