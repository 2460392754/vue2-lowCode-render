<template>
    <el-main>
        <PageContainer />
        <Menus />
    </el-main>
</template>

<script>
import PageContainer from './pageContainer';
import Menus from './menus.vue';

export default {
    components: {
        PageContainer,
        Menus
    }
};
</script>

<style lang="scss" scoped>
.el-main {
    display: flex;
    flex: 1;
    justify-content: center;
    background: $bg-color;
    position: relative;
}
</style>
