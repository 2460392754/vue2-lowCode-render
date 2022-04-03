<template>
    <el-form v-if="getForm" :model="getForm" label-width="80px">
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
import { getNode } from '@/utils/nodeTools';

export default {
    inject: ['store'],

    data() {
        return {
            getForm: false
        };
    },

    computed: {
        /**
         * 是否有 可编辑的 值
         */
        hasEditValue() {
            return this.getForm.__children__ === true;
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
