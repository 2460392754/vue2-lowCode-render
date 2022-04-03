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
// import DemoEditorJson from '@/assets/demo/demo-editor.json';

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
                },
                created: "console.log('is created')"
            }
        };
    },

    created() {
        // this.store.node = DemoEditorJson.node;
    }
};
</script>

<style scoped lang="scss">
.c-1 {
    flex-direction: column;
    height: 100vh;
}
</style>
