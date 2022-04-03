<template>
    <div class="myDataCard" @click="$emit('click')">
        <div>
            <basicText :value="children.basicText1.value" />
            <basicText value="a2" />
        </div>
        <div>
            <basicText value="b1" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'myDataCardCopy',

    props: {
        children: {
            type: Object,
            required: true
        }
    },

    // render() {
    //     console.log('is render');
    // }
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
