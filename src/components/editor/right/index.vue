<template>
    <el-aside width="400px">
        <Collapse v-if="isSelectComponent" :active="active" />
        <Empty v-else />
    </el-aside>
</template>

<script>
import Collapse from './collapse';
import Empty from './empty';

export default {
    inject: ['store'],

    components: {
        Collapse,
        Empty
    },

    data() {
        return {
            active: 0
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
