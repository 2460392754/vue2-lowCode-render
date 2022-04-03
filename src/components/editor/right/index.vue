<template>
    <el-aside width="400px">
        <Tabs v-if="isSelectComponent" v-model="active" />
        <el-empty v-else description="未选择组件" />
    </el-aside>
</template>

<script>
import Tabs from './tabs.vue';

export default {
    inject: ['store'],

    components: {
        Tabs
    },

    data() {
        return {
            active: '0'
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
