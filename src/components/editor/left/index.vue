<template>
    <el-aside width="400px" class="left">
        <template v-if="store.pageName">
            <PageList :pageName="store.pageName" />
        </template>

        <template v-else>
            <Tabs v-model="tabActive" :list="tabList" />
            <ComponentList :currentType="tabList[tabActive].type" />
        </template>
    </el-aside>
</template>

<script>
import Tabs from './tabs.vue';
import ComponentList from './componentList.vue';
import PageList from './pageList.vue';

export default {
    inject: ['store'],

    components: {
        Tabs,
        ComponentList,
        PageList
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
                    type: 'pageEslint',
                    title: 'pageEslint页面组件',
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
    .componentList,
    .pageList {
        flex: 1;
    }
}
</style>
