<template>
    <div
        v-if="
            $isEditor ||
            ($isH5 && store.data.registerSuccessDialogVisible.value)
        "
        class="PageEslintRegisterSuccessDialog"
    >
        <div class="card">
            <slot name="bannerImg" />
            <slot name="registerSuccessTips" />
        </div>
        <div>
            <slot name="closeBtn" />
        </div>
        <div>
            <slot name="tipsText" />
        </div>
        <div>
            <slot name="openBtn" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageEslintRegisterSuccessDialog'
};
</script>

<style lang="scss">
.PageEslintRegisterSuccessDialog {
    background-color: #000;
    width: 100%;
    // height: 100%;
    height: 667px;
    overflow: hidden;

    .card {
        background-color: #fff;
        border-radius: 18px;
        width: 300px;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 60px;

        .bannerImg {
            height: 120px;
        }

        .registerSuccessTips {
            font-weight: bold;
            margin: 10px 0 20px;
        }
    }

    .closeBtn {
        width: 30px;
        height: 30px;
        margin: 20px auto;
    }

    .openBtn {
        width: 250px;
        height: 39px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px auto;
        font-weight: bold;
    }
}
</style>
