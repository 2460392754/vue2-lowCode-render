<template>
    <Draggable
        class="draggable-container"
        :list="list"
        v-bind="dragOpts"
        :group="{ name: 'draggableContainer', pull: 'clone', put: false }"
        :draggable="'.' + canDraggableClassName"
        :sort="false"
        :clone="onCloneDraggable"
        @end="onDragEnd"
    >
        <div v-for="(item, i) in list" :key="i" :class="canDraggableClassName">
            {{ item.__name__ }}
        </div>
    </Draggable>
</template>
<script>
import Draggable from 'vuedraggable';
import { setDeepNodeRandomId } from '@/utils/nodeTools';

export default {
    inject: ['store'],

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
            canDraggableClassName: 'draggable-item',
            dragOpts: {
                group: 'dragGroup',
                ghostClass: 'ghost',
                animation: 300
            }
        };
    },

    methods: {
        /**
         * 拖动组件到 main 里
         * @param {*} opts
         */
        onCloneDraggable(opts) {
            // 隔离引用
            const tempNode = JSON.parse(JSON.stringify(opts));

            setDeepNodeRandomId(tempNode);

            return tempNode;
        },

        /**
         * 拖拽结束。当 page 容器中没有组件时，则进行首次数据填充
         * @param {*} opts
         */
        onDragEnd(opts) {
            if (
                this.store.node.find((node) => node.__draggable__ !== false) !==
                undefined
            ) {
                return;
            }

            const curNode = this.onCloneDraggable(this.list[opts.newIndex]);

            this.store.node.push(curNode);
        }
    }
};
</script>

<style lang="scss" scoped>
.draggable-container {
    text-align: center;
    display: flex;
    flex-wrap: wrap;

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
