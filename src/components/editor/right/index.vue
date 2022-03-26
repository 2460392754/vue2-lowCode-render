<template>
    <el-aside width="400px">
        <Collapse v-if="isSelectComponent" :active="active" />
        <el-empty v-else description="未选择组件" />
    </el-aside>
</template>

<script>
import Collapse from './collapse';

export default {
    inject: ['store'],

    components: {
        Collapse
    },

    data() {
        return {
            active: -1
        };
    },

    computed: {
        /**
         * 是否 已选择了组件
         */
        isSelectComponent() {
            return this.store.selectComponentId !== null;
        }
    }
};
</script>

<style lang="scss" scoped>
.el-aside {
    border-left: 1px solid $border-color;
    padding: 20px;
}
</style>
