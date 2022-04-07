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
import PagesEslintEditorJS from '@/pages/business/eslint';
import { setDeepNodeRandomId } from '@/utils/nodeTools';

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
                pageName: null,
                node: [],
                data: {
                    // pageStep: 'eval(window.$ref(0))',
                    // stepList:
                    //     "eval([{'title':'登录','desc':'这是登录页'}, {'title':'首页','desc':'这是首页'}])",
                    // loginData:
                    //     "eval(window.$ref({username:'11',password:'22'}))"
                },
                methods: {
                    // onSubmitCallback: "window.$toast.success('操作成功');"
                },
                created: '',
                mounted: '',
                beforeDestroy: ''
            }
        };
    },

    created() {
        this.store.pageName = new URLSearchParams(window.location.search).get('page');
        // const { node, data, methods, created, mounted, beforeDestroy } =
        //     PagesEslintEditorJS;
        // setDeepNodeRandomId(node);
        // Object.assign(this.store, {
        //     node,
        //     data,
        //     methods,
        //     created,
        //     mounted,
        //     beforeDestroy
        // });
        // ===
        // const { node, data, methods } = PagesEslintEditorJson;
        // Object.assign(this.store, { node, data, methods });
        // this.store.node = PagesEslintEditorJson.node;
    }
};
</script>

<style scoped lang="scss">
.c-1 {
    flex-direction: column;
    height: 100vh;
}
</style>
