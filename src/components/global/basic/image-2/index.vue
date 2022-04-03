<template>
    <div class="baiscImage">
        <template v-if="$isH5">
            <van-image v-bind="{ ...$props }" />
        </template>

        <template v-else>
            <VueDragResize
                :isActive="isSelect"
                :isDraggable="false"
                :aspectRatio="true"
                :w="width"
                :h="height"
                @resizing="onResize"
            >
                <van-image v-bind="{ ...$props }" />
            </VueDragResize>
        </template>
    </div>
</template>

<script>
import Mixin from './mixin';

export default {
    name: 'basicImage',

    mixins: [Mixin],

    props: {
        round: {
            type: Boolean,
            required: true
        },
        src: {
            type: String,
            required: true
        },
        fit: {
            type: String,
            required: true
        },
        width: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.van-image {
    // display: block;
}

.vdr {
    display: inline-block;
    position: inherit !important;
    top: inherit !important;
    left: inherit !important;
    right: inherit !important;
    bottom: inherit !important;
}
.vdr-stick {
    z-index: 999;
}
</style>
