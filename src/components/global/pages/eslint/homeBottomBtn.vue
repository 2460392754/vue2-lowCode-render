<template>
    <div class="PageEslintHomeBottomBtn">
        <div class="editor-pointer-events-none" @click="onClickBtn">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageEslintHomeBottomBtn',

    props: {
        onNextPage: {
            type: [String, Function],
            required: true
        }
    },

    methods: {
        onClickBtn() {
            window.$toast('请注册');

            // this.store.data.pageStep.value++;
            // or

            console.log(this.onNextPage);
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
