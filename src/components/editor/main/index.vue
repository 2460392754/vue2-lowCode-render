<template>
    <el-main>
        <PageContainer />
        <Menus />
        <ModalsMenus />
    </el-main>
</template>

<script>
import PageContainer from './pageContainer';
import Menus from './menus.vue';
import ModalsMenus from './modalsMenus.vue';

export default {
    components: {
        PageContainer,
        Menus,
        ModalsMenus
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
