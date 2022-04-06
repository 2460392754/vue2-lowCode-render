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
            type: [Object, String],
            default: () => ({
                name: '',
                mobile: ''
            })
        },
        onSubmit: {
            /**
             * 静态编译传递的 字符串路径
             */
            type: [Function, String],
            default: () => {}
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
                }, 1000 * 3);
            }).then((toast) => {
                toast.clear();
                window.$toast.success('提交成功');
                this.onSubmit();
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
