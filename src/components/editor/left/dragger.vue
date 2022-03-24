<template>
    <Draggable
        class="draggable-container"
        :list="list"
        :group="{ name: 'draggableContainer', pull: 'clone', put: false }"
        :draggable="'.' + canDraggableClassName"
        :sort="false"
        :clone="onCloneDraggable"
        @end="onEndDraggable"
    >
        <div
            v-for="(item, i) in list"
            :key="i"
            :class="canDraggableClassName"
            @click="onAddComponent(item)"
        >
            {{ item.name }}
        </div>
    </Draggable>
    <!-- <Draggable
        class="draggable-container"
        :list="list"
        :group="{ name: 'draggableContainer', pull: 'clone', put: false }"
        :clone="onCloneDraggable"
        :draggable="'.' + canDraggableClassName"
        :sort="false"
        @end="onEndDraggable"
    >
        <div
            v-for="(item, i) in list"
            :key="i"
            :class="canDraggableClassName"
            @click="onAddComponent(item)"
        >
            {{ item.name }}
        </div>
    </Draggable> -->
</template>
<script>
import Draggable from 'vuedraggable';
import { v4 as UuidV4 } from 'uuid';

export default {
    components: {
        Draggable
    },

    props: {
        /**
         * 当前类型组件的数据列表
         */
        list: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            canDraggableClassName: 'draggable-item'
        };
    },

    methods: {
        onAddComponent() {
            console.log('add');
        },

        onCloneDraggable(opts) {
            const temp = { ...opts };
            temp.id = UuidV4();

            return temp;
        },

        /**
         * 拖拽结束
         */
        onEndDraggable() {
            console.log(...arguments);
        }
    }
};
</script>

<style lang="scss" scoped>
.draggable-container {
    text-align: center;
    display: flex;

    .draggable-item {
        border: 1px dashed #ccc;
        cursor: all-scroll;
        width: 78px;
        padding: 20px 0;
        margin-right: 15px;
        margin-bottom: 10px;

        &:nth-of-type(3n + 3) {
            margin-right: 0;
        }
    }
}
</style>
