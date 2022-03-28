<template>
    <el-form :model="getForm" label-width="80px">
        <template v-if="hasEditAttribute">
            <el-form-item
                v-for="(pItem, k) of getForm.__attribute__.props"
                :key="k"
                :label="pItem.name"
            >
                <template v-if="pItem.type === 'select'">
                    <el-select
                        v-model="getForm.attribute.props[k]"
                        placeholder="请选择"
                        clearable
                    >
                        <el-option
                            v-for="itemD in pItem.data"
                            :key="itemD.value"
                            :label="itemD.label"
                            :value="itemD.value"
                        />
                    </el-select>
                </template>

                <template v-if="pItem.type === 'switch'">
                    <el-switch v-model="getForm.attribute.props[k]" />
                </template>

                <template v-if="pItem.type === 'number'">
                    <el-input-number
                        v-model="getForm.attribute.props[k]"
                        :min="pItem.opts.min"
                        :max="pItem.opts.max"
                        label="描述文字"
                        controls-position="right"
                    />
                </template>

                <template v-if="pItem.type === 'input'">
                    <el-input
                        v-model="getForm.attribute.props[k]"
                        clearable
                        placeholder="请输入内容"
                    />
                </template>

                <template v-if="pItem.type === 'event'">
                    <BindDataSourceSelect
                        type="methods"
                        :obj="getForm.attribute.props"
                        :objK="k"
                    />
                </template>

                <template v-if="pItem.type === 'data'">
                    <BindDataSourceSelect
                        type="data"
                        :obj="getForm.attribute.props"
                        :objK="k"
                    />
                </template>
            </el-form-item>
        </template>

        <el-empty v-else description="未配置属性" />
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
         * 是否有 可编辑 props 属性
         */
        hasEditAttribute() {
            if (
                this.store.selectComponentId === null ||
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
