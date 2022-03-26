<template>
    <el-dialog
        title="导出json"
        width="500px"
        :visible="visible"
        :show-close="false"
    >
        <el-form ref="formRef" label-width="120px" :model="form" :rules="rules">
            <el-form-item label="文件名称" props="fileName">
                <el-input v-model="form.fileName" />
            </el-form-item>
            <el-form-item label="压缩内容">
                <el-switch v-model="form.compressed" />
            </el-form-item>
            <el-form-item label="移除编辑器参数">
                <el-switch v-model="form.removeArgs" />
                <el-tooltip
                    class="item"
                    effect="dark"
                    content="开启后json文件体积会缩小, 但只支持h5预览"
                    placement="top-start"
                >
                    <i class="el-icon-warning" />
                </el-tooltip>
            </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
            <el-button @click="onClose">取 消</el-button>
            <el-button type="primary" @click="onConfirm">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { fileSave } from '@/utils/file';
import { formatJson } from '@/utils/formatJson';

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

    data() {
        return {
            form: {
                fileName: '内容文件',
                compressed: true,
                removeArgs: false
            },
            rules: {
                fileName: [
                    {
                        required: true,
                        message: '请输入文件内容',
                        trigger: 'blur'
                    }
                ]
            }
        };
    },

    methods: {
        /**
         * 取消
         */
        onClose() {
            Object.assign(this.form, this.$options.data().form);
            this.$emit('change', false);
        },

        /**
         * 确认
         */
        onConfirm() {
            this.$refs.formRef.validate((valid) => {
                if (!valid) {
                    window.$message.error('表单验证错误');
                    return;
                }

                const { node, data, methods } = this.store;
                const content = {
                    node,
                    data,
                    methods
                };

                const contentStr = formatJson(
                    content,
                    this.form.compressed,
                    this.form.removeArgs
                );
                fileSave(this.form.fileName + '-editor' + '.json', contentStr);

                this.onClose();
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.el-icon-warning {
    font-size: 20px;
    vertical-align: middle;
    margin-left: 10px;
}
</style>
