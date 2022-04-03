<template>
    <div class="myDataCard" @click="$emit('click')">
        <div>
            header
            <slot name="header" />
        </div>
        <div>
            main
            <slot name="main" />
        </div>
        <div>
            footer
            <slot name="footer" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'myDataCardCopy2'
};
</script>

<style lang="scss" scoped>
.myDataCard {
    display: flex;
    justify-content: space-between;
    padding: 25px;

    .basicText + .basicText {
        margin-top: 20px;
    }
}
</style>
