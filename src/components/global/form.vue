<template>
    <el-form
        v-if="visible"
        :model="formModel"
        :rules="formRules"
        ref="formRef"
        label-width="100px"
        class="demo-ruleForm"
    >
        <el-form-item label="账号" prop="username">
            <el-input v-model="formModel.username" />
        </el-form-item>

        <el-form-item label="密码" prop="password">
            <el-input v-model="formModel.password" type="password" />
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: 'myForm',

    props: {
        /**
         * 默认显示
         */
        visible: {
            type: Boolean,
            default: true
        },

        /**
         * 表单提交成功 回调事件
         */
        onSubmitCallback: {
            type: Function,
            required: true
        }
    },

    data() {
        return {
            formModel: {},
            formRules: {
                username: [
                    {
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }
                ]
            }
        };
    },

    methods: {
        /**
         * 表单提交
         */
        onSubmit() {
            this.$refs.formRef.validate((valid) => {
                if (!valid) {
                    window.$message.error('表单验证错误');
                    return;
                }

                this.onSubmitCallback(this.formModel);
            });
        }
    }
};
</script>
