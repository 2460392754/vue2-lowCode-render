<template>
    <div class="pageEslintRegisterForm">
        <van-form @submit="onSubmitCustom">
            <van-field
                class="editor-pointer-events-none"
                v-model="form.name"
                name="name"
                label="姓名"
                placeholder="姓名"
                :rules="[{ required: true, message: '请填写姓名' }]"
            />
            <van-field
                class="editor-pointer-events-none"
                v-model="form.mobile"
                name="mobile"
                label="手机号"
                placeholder="手机号"
                :rules="[{ required: true, message: '请填写手机号' }]"
            />
            <slot name="submitBtn" />
        </van-form>
    </div>
</template>

<script>
export default {
    name: 'PageEslintRegisterForm',

    props: {
        form: {
            type: window.$projectEnv === 'editor' ? String : Object,
            default: () => ({
                name: '',
                mobile: ''
            })
        },

        onNextPage: {
            type: window.$projectEnv === 'editor' ? String : Function,
            required: true
        }
    },

    methods: {
        onSubmitCustom() {
            return new Promise((resolve, reject) => {
                const toast = window.$toast.loading({
                    message: '提交中...',
                    forbidClick: true
                });

                setTimeout(() => {
                    resolve(toast);
                }, 1000 * 1);
            }).then((toast) => {
                toast.clear();
                window.$toast.success('提交成功');

                // this.store.data.registerSuccessDialogVisible.value = true;
                // or
                ((jsonData) => {
                    eval(this.store.methods.toggleRegisterSuccessDialog);
                })(this.store);
            });
        }
    }
};
</script>

<style lang="scss">
.pageEslintRegisterForm {
    overflow: hidden;

    .basicButton {
        padding: 10px;
        margin: 10px;
    }
}
</style>
