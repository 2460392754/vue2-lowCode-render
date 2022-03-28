<template>
    <van-icon name="like" @click="$emit('click')" />
</template>

<script>
export default {
    name: 'mySuspendedBtn'
};
</script>

<style lang="scss" scoped>
.van-icon-like {
    position: absolute;
    border-radius: 100%;
    box-shadow: 0px 0px 6px 0px #c3c3c3;
}
</style>
