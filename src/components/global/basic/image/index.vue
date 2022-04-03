<template>
    <div
        class="baiscImage"
        :style="{ width: width + 'px', height: height + 'px' }"
    >
        <template v-if="$isH5">
            <van-image v-bind="{ ...$props }" />
        </template>

        <template v-else>
            <vue-draggable-resizable
                :w="width"
                :h="height"
                :draggable="false"
                :lockAspectRatio="true"
                @resizing="onResize"
            >
                <van-image v-bind="{ ...$props }" />
            </vue-draggable-resizable>
            <!-- <VueDragResize
                :isActive="isSelect"
                :isDraggable="false"
                :aspectRatio="true"
                @resizing="onResize"
            >
            </VueDragResize> -->
        </template>
    </div>
</template>

<script>
import Mixin from './mixin';

export default {
    name: 'basicImageXXX',

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
    // position: inherit !important;
    transform: inherit !important;
    top: 0 !important;
    // top: inherit !important;
    left: 0 !important;
    // left: inherit !important;
    right: inherit !important;
    bottom: inherit !important;
    width: 100% !important;
    height: 100% !important;
}
.vdr-stick {
    z-index: 999;
}
</style>
