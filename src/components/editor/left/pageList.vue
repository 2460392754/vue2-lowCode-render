<template>
    <div class="pageList">
        <Tabs v-model="tabActive" :list="tabList" @change="onChangeTab" />
    </div>
</template>

<script>
import Tabs from './tabs.vue';
import { selectJsonData } from '@/utils/selectJsonData';

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
            tabActive: 0,
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
            selectJsonData.call(this, this.tabList[this.tabActive]);
        }
    }
};
</script>
