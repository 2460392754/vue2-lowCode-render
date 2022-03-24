<template>
    <el-header>
        <Menus />
    </el-header>
</template>

<script>
import Menus from './menus';

export default {
    components: {
        Menus
    }
};
</script>

<style lang="scss" scoped>
.el-header {
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
