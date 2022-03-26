<template>
    <el-dialog
        title="数据源"
        width="800px"
        :visible="visible"
        :show-close="false"
    >
        <el-tabs v-model="active" @tab-click="onChangeTab">
            <el-tab-pane label="响应式数据" name="data">
                <DataSourceTable type="data" />
            </el-tab-pane>
            <el-tab-pane label="函数" name="methods">
                <DataSourceTable type="methods" />
            </el-tab-pane>
        </el-tabs>

        <span slot="footer" class="dialog-footer">
            <el-button @click="onClose">取 消</el-button>
        </span>
    </el-dialog>
</template>

<script>
import DataSourceTable from './dataSourceTable';

export default {
    inject: ['store'],

    model: {
        prop: 'visible',
        event: 'change'
    },

    props: {
        visible: {
            type: Boolean,
            required: true
        }
    },

    components: {
        DataSourceTable
    },

    data() {
        return {
            active: 'data'
        };
    },

    methods: {
        /**
         * 取消
         */
        onClose() {
            this.$emit('change', false);
        },

        onChangeTab(tab) {
            console.log(tab);
        }
    }
};
</script>
