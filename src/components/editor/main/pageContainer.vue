<template>
    <Draggable
        class="page-group"
        group="draggableContainer"
        animation="300"
        v-bind="dragOpts"
        :list="store.node"
    >
        <transition-group type="transition" :name="'flip-list'">
            <div
                v-for="item in store.node"
                :key="item.__id__"
                :class="[
                    'draggable-item',
                    store.selectComponentId === item.__id__ ? 'active' : ''
                ]"
                @click="onChangeComponent(item)"
                @contextmenu.prevent="onContextmenu($event, item)"
            >
                <div class="pointerEvents">
                    <i
                        v-if="store.selectComponentId === item.__id__"
                        class="el-icon-rank"
                    />
                    <RegisterComponent
                        :isEditor="true"
                        :data="{
                            node: item,
                            data: store.data,
                            methods: store.methods
                        }"
                    />
                </div>
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
                group: 'dragGroup',
                ghostClass: 'ghost',
                animation: 300
            }
        };
    },

    methods: {
        /**
         * 选择 组件
         * @param {*} item
         */
        onChangeComponent(item) {
            this.store.selectComponentId = item.__id__;
        },

        /**
         * 删除
         * @param {*} item
         */
        onRemove(item) {
            const temp = [...this.store.node].filter(
                (findItem) => findItem.__id__ !== item.__id__
            );

            this.store.selectComponentId = null;
            this.store.node = temp;
        },

        onContextmenu(event, item) {
            this.$contextmenu({
                items: [
                    {
                        label: '删除',
                        icon: 'el-icon-delete',
                        onClick: () => this.onRemove(item)
                    }
                ],
                event,
                zIndex: 3,
                minWidth: 230
            });

            return false;
        }
    }
};
</script>

<style lang="scss" scoped>
.page-group {
    background: $bg-color;
    // flex: 1;
    width: 375px;
    height: 568px;
}

.placeholder {
    background-color: red;
    width: 100%;
    height: 2px;
}

.draggable-item {
    border: 1px dashed #ccc;
    cursor: all-scroll;
    position: relative;

    > .pointerEvents {
        pointer-events: none;
    }

    &.active {
        border-color: $primary-color;
        border-width: 2px;
        padding: 2px;
        cursor: all-scroll;
    }

    &[draggable='true'] {
        opacity: 0.3 !important;
    }

    .el-icon-rank {
        background: $primary-color;
        padding: 4px;
        position: absolute;
        top: -2px;
        left: -2px;
        color: $white-color;
        border-bottom: 2px solid $white-color;
        border-right: 2px solid $white-color;
        font-weight: bold;
        z-index: 999;
    }
}
</style>
