<template>
    <div class="PageEslintRegisterSuccessDialog">
        PageEslintRegisterSuccessDialog
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
    height: 100%;
    overflow: hidden;

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
