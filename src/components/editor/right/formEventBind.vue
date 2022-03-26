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

export default {
    inject: ['store'],

    components: {
        BindDataSourceSelect
    },

    computed: {
        /**
         * 获取 当前选择的组件属性表单
         */
        getForm() {
            return this.store.node.find(
                (item) => item.__id__ === this.store.selectComponentId
            );
        },

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
    }
};
</script>
