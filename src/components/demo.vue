<template>
    <div class="title" @click.prevent="$emit('click')">
        <slot name="a" />
        <slot name="b" />
        <slot name="c" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'isDiv'
        };
    }
};
</script>

<style lang="scss" scoped>
.title {
    color: red;
}
</style>
