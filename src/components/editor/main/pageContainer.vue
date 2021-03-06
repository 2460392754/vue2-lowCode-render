<template>
    <div class="pageContainer">
        <Draggable
            class="page-group"
            group="draggableContainer"
            handle=".move"
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
                        'draggableItemEl__' + item.__id__,
                        item.__draggable__ !== false ? 'move' : '',
                        store.selectComponentId === item.__id__ ? 'active' : ''
                    ]"
                    @contextmenu.prevent="onContextmenu($event, item)"
                >
                    <div class="pointerEvents">
                        <i
                            v-if="
                                store.selectComponentId === item.__id__ &&
                                item.__draggable__ !== false
                            "
                            class="el-icon-rank"
                        />
                        <RegisterComponent
                            :isEditor="true"
                            :data="{
                                node: item,
                                data: store.data,
                                methods: store.methods
                            }"
                            :onChange="onChangeNode"
                        />
                    </div>
                </div>
            </transition-group>
        </Draggable>

        <el-empty v-if="store.node.length === 0" description="未上传组件" />
    </div>
</template>

<script>
import Draggable from 'vuedraggable';
import RegisterComponent from '@/core/registerComponent';
import { proxyPositionStyle } from '@/utils/proxyPositionStyle';

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

    watch: {
        // 监听节点数量变化，进行处理 需要绝对定位的样式 组件
        'store.node': {
            handler() {
                proxyPositionStyle(this.store.node);
            },
            deep: true
        }
    },

    methods: {
        /**
         * 选择组件
         * @param {*} node
         */
        onChangeNode(node) {
            this.store.selectComponentId = node.__id__;
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

        /**
         * 鼠标右键
         * @param {*} event
         * @param {*} item
         */
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
.pageContainer {
    background-color: $white-color;
    position: relative;
    width: 375px;
    height: 568px;

    > .page-group {
        overflow: auto;
        width: 100%;
        height: 100%;
    }

    > .el-empty {
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
    }
}

.placeholder {
    background-color: red;
    width: 100%;
    height: 2px;
}

.draggable-item {
    position: relative;

    > .pointerEvents {
        &:after {
            content: '';
            height: 0;
            clear: both;
            overflow: hidden;
            display: block;
            visibility: hidden;
        }
    }

    &.move {
        cursor: all-scroll;
    }

    &[draggable='true'] {
        opacity: 0.3 !important;
    }

    .el-icon-rank {
        background: $primary-color;
        padding: 4px;
        position: absolute;
        border: 2px solid $white-color;
        top: 0px;
        left: 0px;
        color: $white-color;
        font-weight: bold;
        z-index: 999;
    }
}
</style>
