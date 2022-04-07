<template>
    <div class="PageEslintHomeBottomBtn editor-pointer-events-none" @click="onClickBtn">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'PageEslintHomeBottomBtn',

    props: {
        onNextPage: {
            type: window.$projectEnv === 'editor' ? String : Function,
            required: true
        }
    },

    methods: {
        onClickBtn() {
            window.$toast('请注册');

            // this.store.data.pageStep.value++;
            // or
            this.onNextPage();
        }
    }
};
</script>

<style lang="scss" scoped>
.PageEslintHomeBottomBtn {
    width: 375px;
    padding: 10px 0;
    z-index: 99;
}
</style>
