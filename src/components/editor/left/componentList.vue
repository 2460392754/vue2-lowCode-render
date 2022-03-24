<template>
    <div class="componentList">
        <Draggable :list="getComponentData" />
    </div>
</template>

<script>
import Draggable from './dragger.vue';
import ComponentData from '@/data/components';

export default {
    props: {
        /**
         * 当前类型组件（基础组件）
         */
        currentType: {
            type: String,
            required: true
        }
    },

    components: {
        Draggable
    },

    computed: {
        getComponentData() {
            return ComponentData[this.currentType];
        }
    }
};
</script>

<style lang="scss" scoped>
.componentList {
    padding: 20px;
    border-right: 1px solid $border-color;
}
</style>
