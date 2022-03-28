<template>
    <el-dialog
        title="表单"
        width="400px"
        z-index="3000"
        :visible="visible"
        :show-close="false"
        :append-to-body="true"
    >
        <el-form ref="formRef" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="键名" prop="key">
                <el-input v-model="form.key" />
            </el-form-item>
            <el-form-item label="键值" prop="value">
                <el-input v-model="form.value" />
            </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="onConfirm">确定</el-button>
            <el-button @click="onClose">取 消</el-button>
        </span>
    </el-dialog>
</template>

<script>
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
        },
        type: {
            type: String,
            required: true
        },
        formIsEdit: {
            type: Boolean,
            required: true
        }
    },

    data() {
        return {
            form: {
                key: '',
                value: ''
            },
            rules: {
                key: [
                    {
                        required: true,
                        message: '请输入键名',
                        trigger: 'blur'
                    }
                ],
                value: [
                    {
                        required: true,
                        message: '请输入键名',
                        trigger: 'blur'
                    }
                ]
            }
        };
    },

    methods: {
        onConfirm() {
            this.$refs.formRef.validate((valid) => {
                if (!valid) {
                    window.$message.error('表单校验移除');
                    return;
                }

                if (
                    !this.formIsEdit &&
                    Reflect.has(this.store[this.type], this.form.key)
                ) {
                    window.$message.error('当前键名已存在');
                    return;
                }

                this.$set(
                    this.store[this.type],
                    this.form.key,
                    this.form.value
                );
                this.onClose();
                this.$emit('confirm');
            });
        },

        /**
         * 取消
         */
        onClose() {
            Object.assign(this.form, this.$options.data().form);
            this.$emit('change', false);
        }
    }
};
</script>
