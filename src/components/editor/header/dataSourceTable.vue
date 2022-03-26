<template>
    <div>
        <DataActionDialog
            ref="dataActionDialog"
            v-model="formVisible"
            :type="type"
            :formIsEdit="formIsEdit"
        />

        <el-button type="primary" @click="onAdd">添加</el-button>

        <el-table :data="getTableData" stripe>
            <el-table-column prop="key" label="键名" width="200" />
            <el-table-column prop="value" label="键值" />
            <el-table-column fixed="right" label="操作" width="180">
                <template slot-scope="scope">
                    <el-button @click="onEdit(scope.row)" size="small"
                        >编辑</el-button
                    >
                    <el-popconfirm
                        confirm-button-text="确定"
                        cancel-button-text="取消"
                        icon="el-icon-info"
                        icon-color="red"
                        title="确定要删除吗？"
                        @confirm="onRemove(scope.row)"
                    >
                        <el-button type="danger" size="small" slot="reference"
                            >删除</el-button
                        >
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import DataActionDialog from './dataActionDialog';

export default {
    inject: ['store'],

    props: {
        type: {
            type: String,
            required: true
        }
    },

    components: {
        DataActionDialog
    },

    data() {
        return {
            active: 0,
            formVisible: false,
            formIsEdit: false
        };
    },

    computed: {
        /**
         * data 数据转换
         */
        getTableData() {
            return Object.entries(this.store[this.type]).map(([key, value]) => {
                return { key, value };
            });
        }
    },

    methods: {
        /**
         * 取消
         */
        onClose() {
            this.$emit('change', false);
        },

        /**
         * 添加 数据源
         */
        onAdd() {
            this.formIsEdit = false;
            this.formVisible = true;
        },

        onEdit(row) {
            this.formIsEdit = true;
            this.formVisible = true;
            this.$refs.dataActionDialog.form = { ...row };
        },

        /**
         * 删除
         * @param {*} row
         */
        onRemove(row) {
            const temp = { ...this.store[this.type] };

            Reflect.deleteProperty(temp, row.key);
            this.store[this.type] = temp;
        }
    }
};
</script>

<style lang="scss" scoped>
.el-button + span {
    margin-left: 20px;
}
</style>
