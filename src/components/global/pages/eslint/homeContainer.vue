<template>
    <div class="PageEslintHomeContainer">
        <van-image v-bind="{ ...$props }" />
    </div>
</template>

<script>
export default {
    name: 'PageEslintHomeContainer',

    props: {
        src: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.PageEslintHomeContainer {
    padding-bottom: 40px;
    
    .bg {
        width: 100%;
    }
}
</style>
