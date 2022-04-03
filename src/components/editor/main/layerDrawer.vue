<template>
    <el-drawer
        direction="ltr"
        title="图层"
        :size="380"
        :visible="visible"
        :destroy-on-close="true"
        :close-on-press-escape="false"
        :modal-append-to-body="false"
        :wrapperClosable="false"
        :modal="false"
        @close="onClose"
    >
        <el-tree
            :data="getLayerTree"
            :props="layerTreeProps"
            @node-click="onClickTreeNode"
        >
            <div slot-scope="{ node, data }">
                <div
                    :class="[
                        'label',
                        store.selectComponentId === data.__id__ ? 'active' : ''
                    ]"
                >
                    <span class="type">{{ data.type }}</span>
                    <span v-if="data.__name__" class="name">
                        - [{{ data.__name__ }}]</span
                    >
                </div>
            </div>
        </el-tree>
    </el-drawer>
</template>

<script>
import { handleSelectActiveClassToggle } from '@/core/renderElSupportFunc';

export default {
    inject: ['store'],

    model: {
        prop: 'visible',
        event: 'change'
    },

    props: {
        visible: {
            type: Boolean,
            required: true
        }
    },

    data() {
        return {
            layerTreeProps: {
                label: 'type'
            }
        };
    },

    computed: {
        getLayerTree() {
            return this._deepFormatLayerTree(this.store.node);
        }
    },

    methods: {
        /**
         * 关闭弹窗
         */
        onClose() {
            this.$emit('change', false);
        },

        /**
         * 点击 某个图层
         * @param {*} node
         */
        onClickTreeNode(node) {
            this.store.selectComponentId = node.__id__;
            handleSelectActiveClassToggle(node.__id__);
        },

        /**
         * 深度遍历 图层节点
         */
        _deepFormatLayerTree(nodeList) {
            return nodeList.map((node) => {
                let children = [];

                if (Array.isArray(node.children) && node.children.length > 0) {
                    children = this._deepFormatLayerTree(node.children);
                }

                return {
                    __id__: node.__id__,
                    __name__: node.__name__,
                    type: node.type,
                    children
                };
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.label {
    &.active {
        // background-color: $primary-color;
        // color: $white-color;
        color: #409eff;
    }

    .name {
        color: #ccc;
    }
}
</style>
