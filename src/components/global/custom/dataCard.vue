<template>
    <div class="myDataCard">
        <slot />
    </div>
</template>

<script>
import BasicText from '@/data/components/basic/text';

export default {
    name: 'myDataCard',

    // props: {
    //     children: {
    //         type: Object,
    //         required: true
    //     }
    // },

    render() {
        console.log('is render');
        console.log(BasicText);
    }
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
