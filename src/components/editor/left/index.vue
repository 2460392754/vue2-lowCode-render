<template>
    <el-aside width="400px" class="left">
        <Tabs v-model="tabActive" :list="tabList" />
        <ComponentList :currentType="tabList[tabActive].type" />
    </el-aside>
</template>

<script>

import Tabs from './tabs.vue';
import ComponentList from './componentList.vue';

export default {
    components: {
        Tabs,
        ComponentList
      
    },

    data() {
        return {
            tabActive: 0,
            tabList: [
                {
                    type: 'basic',
                    title: '基础组件',
                    icon: 'el-icon-edit'
                },
                {
                    type: 'custom',
                    title: '自定义组件',
                    icon: 'el-icon-edit'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.left {
    display: flex;
    .componentList {
        flex: 1;
    }
}
</style>
