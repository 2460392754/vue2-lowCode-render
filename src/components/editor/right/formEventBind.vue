<template>
    <el-form :model="getForm" label-width="80px">
        <template v-if="hasEditEvent">
            <el-form-item
                v-for="(pItem, k) of getForm.__attribute__.on"
                :key="k"
                :label="pItem.name"
            >
                <BindDataSourceSelect
                    type="methods"
                    :obj="getForm.attribute.on"
                    :objK="k"
                />
            </el-form-item>
        </template>

        <el-empty v-else description="未配置事件" />
    </el-form>
</template>

<script>
import BindDataSourceSelect from './bindDataSourceSelect';
import { getNode } from '@/utils/nodeTools';

export default {
    inject: ['store'],

    components: {
        BindDataSourceSelect
    },

    data() {
        return {
            getForm: false
        };
    },

    computed: {
        /**
         * 是否有 可编辑 event 属性
         */
        hasEditEvent() {
            if (
                typeof this.getForm.__attribute__ === 'undefined' ||
                typeof this.getForm.__attribute__.on === 'undefined' ||
                Object.keys(this.getForm.__attribute__.on).length === 0
            ) {
                return false;
            }

            return true;
        }
    },

    watch: {
        'store.selectComponentId': {
            handler() {
                this.getForm = getNode(
                    this.store.node,
                    this.store.selectComponentId
                );
            },
            immediate: true
        }
    }
};
</script>
