<template>
    <div class="pageList">
        <Tabs v-model="tabActive" :list="tabList" @change="onChangeTab" />
    </div>
</template>

<script>
import Tabs from './tabs.vue';
import { setDeepNodeRandomId } from '@/utils/nodeTools';

export default {
    inject: ['store'],

    components: {
        Tabs
    },

    props: {
        pageName: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            tabActive: 2,
            tabList: []
        };
    },

    created() {
        import(`@/pages/business/${this.pageName}`).then((res) => {
            this.tabList = res.default;
            this._setJsonData();
        });
    },

    methods: {
        /**
         * 切换
         */
        onChangeTab() {
            this._setJsonData();
        },

        _setJsonData() {
            const { node, data, methods, created, mounted, beforeDestroy } =
                this.tabList[this.tabActive].data;

            this.store.selectComponentId = null;
            setDeepNodeRandomId(node);

            Object.assign(this.store, {
                node,
                data,
                methods,
                created,
                mounted,
                beforeDestroy
            });
        }
    }
};
</script>
