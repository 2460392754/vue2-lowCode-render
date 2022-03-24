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
                node: [{ name: 'Juan 111', id: 1 }]
            }
        };
    }
};
</script>

<style scoped lang="scss">
.c-1 {
    flex-direction: column;
    height: 100vh;
}
</style>
