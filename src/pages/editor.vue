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
import Vue from 'vue';
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
                pageName: null,
                modalList: [],
                //
                // ====
                //
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
        this.store.pageName = new URLSearchParams(window.location.search).get(
            'page'
        );

        Vue.prototype.store = this.store;
    }
};
</script>

<style scoped lang="scss">
.c-1 {
    flex-direction: column;
    height: 100vh;
}
</style>
