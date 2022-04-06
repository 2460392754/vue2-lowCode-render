<template>
    <div class="basicButton" @click="$emit('click')">
        <!-- <div class="basicButton editor-pointer-events-none" @click="$emit('click')"> -->
        <van-button
            class="editor-pointer-events-none"
            round
            block
            native-type="submit"
            :type="type"
            :color="backgroundColor"
            :style="{ color, fontSize }"
        >
            <slot />
        </van-button>
    </div>
</template>

<script>
export default {
    name: 'basicButton',

    props: {
        type: {
            type: String,
            default: 'primary'
        },
        fontSize: {
            type: String,
            default: '14px'
        },
        color: {
            type: String,
            default: '#fff'
        },
        backgroundColor: {
            type: String,
            default: '#409eff'
        }
    }
};
</script>

<style lang="scss">
.basicButton {
    // user-select: none;
    // .van-button {
    //     pointer-events: none;
    // }
}
</style>
