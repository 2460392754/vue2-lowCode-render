<template>
    <Draggable
        class="page-group"
        group="draggableContainer"
        animation="300"
        v-bind="dragOpts"
        :list="store.node"
        @change="log"
    >
        <transition-group type="transition" :name="'flip-list'">
            <div
                class="draggable-item"
                v-for="item in store.node"
                :key="item.id"
                :class="store.selectComponentId === item.id ? 'active' : ''"
                @click="onChangeComponent(item)"
            >
                <RegisterComponent :data="{ node: item }" />
            </div>
        </transition-group>
    </Draggable>
</template>

<script>
import Draggable from 'vuedraggable';
import RegisterComponent from '@/core/registerComponent';

export default {
    inject: ['store'],

    components: {
        Draggable,
        RegisterComponent
    },

    data() {
        return {
            dragOpts: {
                animation: 200,
                group: 'description',
                disabled: false,
                ghostClass: 'ghost'
            }
        };
    },

    methods: {
        /**
         * 选择 组件
         * @param {*} item
         */
        onChangeComponent(item) {
            this.store.selectComponentId = item.id;
        },

        log(evt) {
            // window.$message.success('添加成功');
        }
    }
};
</script>

<style lang="scss" scoped>
.page-group {
    background: $bg-color;
    flex: 1;
}

.draggable-item {
    border: 1px dashed #ccc;
    cursor: all-scroll;

    &.active {
        border-color: $primary-color;
        border-width: 2px;
        padding: 2px;
    }

    &.sortable-ghost {
        border-color: red;
    }
}
</style>
