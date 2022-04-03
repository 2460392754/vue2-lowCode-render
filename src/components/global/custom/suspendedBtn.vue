<template>
    <div class="container" @click="$emit('click')">
        <van-icon name="like" />
    </div>
</template>

<script>
export default {
    name: 'mySuspendedBtn'
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 100%;
    box-shadow: 0px 0px 6px 0px #c3c3c3;
    cursor: pointer;
}
</style>
