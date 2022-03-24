<template>
    <el-form :model="getForm" label-width="80px">
        <template v-if="hasEditAttribute">
            <el-form-item
                v-for="(item, k) of getForm.__attribute__.props"
                :key="k"
                :label="item.name"
            >
                <template v-if="item.type === 'select'">
                    <el-select
                        v-model="getForm.attribute.props[k]"
                        placeholder="请选择"
                    >
                        <el-option
                            v-for="itemD in item.data"
                            :key="itemD.value"
                            :label="itemD.label"
                            :value="itemD.value"
                        />
                    </el-select>
                </template>

                <template v-if="item.type === 'switch'">
                    <el-switch v-model="getForm.attribute.props[k]" />
                </template>
            </el-form-item>
        </template>

        <el-empty v-else description="未配置属性" />
    </el-form>
</template>

<script>
export default {
    inject: ['store'],

    computed: {
        /**
         * 获取 当前选择的组件属性表单
         */
        getForm() {
            return this.store.node.find(
                (item) => item.id === this.store.selectComponentId
            );
        },

        /**
         * 是否有 可编辑 props 属性
         */
        hasEditAttribute() {
            if (
                typeof this.getForm.__attribute__ === 'undefined' ||
                typeof this.getForm.__attribute__.props === 'undefined' ||
                Object.keys(this.getForm.__attribute__.props).length === 0
            ) {
                return false;
            }

            return true;
        }
    }
};
</script>
