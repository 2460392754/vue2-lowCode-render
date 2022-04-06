<template>
    <div
        class="basicText"
        @click="$emit('click')"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
        {{ value }}
    </div>
</template>

<script>
export default {
    name: 'basicText',

    props: {
        value: {
            type: String,
            required: true
        },
        backgroundImage: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="scss" scoped>
.basicText {
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>
