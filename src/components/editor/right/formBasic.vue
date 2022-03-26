<template>
    <el-form :model="getForm" label-width="80px">
        <el-form-item label="组件ID">
            <el-input v-model="getForm.__id__" disabled />
        </el-form-item>
        <el-form-item label="组件名">
            <el-input v-model="getForm.__name__" disabled />
        </el-form-item>
        <el-form-item label="组件名称">
            <el-input v-model="getForm.type" disabled />
        </el-form-item>
        <el-form-item v-if="hasEditValue" label="值">
            <el-input v-model="getForm.children" />
        </el-form-item>
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
                (item) => item.__id__ === this.store.selectComponentId
            );
        },

        /**
         * 是否有 可编辑的 值
         */
        hasEditValue() {
            return this.getForm.__children__ === true;
        }
    }
};
</script>
