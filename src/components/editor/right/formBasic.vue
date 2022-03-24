<template>
    <el-form :model="getForm" label-width="80px">
        <el-form-item label="组件ID">
            <el-input v-model="getForm.id" disabled />
        </el-form-item>
        <el-form-item v-if="getForm.__children__" label="值">
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
                (item) => item.id === this.store.selectComponentId
            );
        }
    }
};
</script>
