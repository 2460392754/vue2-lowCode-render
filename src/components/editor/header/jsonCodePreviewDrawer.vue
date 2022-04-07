<template>
    <el-drawer
        direction="rtl"
        size="50%"
        :with-header="false"
        :visible="visible"
        :destroy-on-close="true"
        @close="onClose"
    >
        <div class="container">
            <!-- <el-switch
                v-model="isRemoveEditorArgs"
                active-text="不显示编辑器参数"
                @change="onChange"
            /> -->
            <CopyToClipboard :text="codeStr" @copy="onCopySuccess">
                <el-button
                    class="copy-btn"
                    type="primary"
                    size="mini"
                    icon="el-icon-document-copy"
                    circle
                />
            </CopyToClipboard>

            <highlight-code lang="json">
                {{ codeStr }}
            </highlight-code>
        </div>
    </el-drawer>
</template>

<script>
import { formatJson } from '@/utils/formatJson';
import CopyToClipboard from 'vue-copy-to-clipboard';

export default {
    inject: ['store'],

    model: {
        prop: 'visible',
        event: 'change'
    },

    components: {
        CopyToClipboard
    },

    props: {
        visible: {
            type: Boolean,
            required: true
        }
    },

    data() {
        return {
            codeStr: ''
            // isRemoveEditorArgs: true
        };
    },

    watch: {
        visible(flag) {
            flag && this._setCode();
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
         * 切换 switch
         */
        onChange() {
            this._setCode();
        },

        /**
         * 复制成功
         */
        onCopySuccess() {
            window.$message.success('复制成功');
        },

        /**
         *
         */
        _setCode() {
            const { node, data, methods } = this.store;
            const content = {
                node,
                data,
                methods
            };

            // this.codeStr = formatJson(content, false, this.isRemoveEditorArgs);
            this.codeStr = formatJson(content, false, true);
            this.$forceUpdate();
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    padding: 20px;
    height: 100%;
    position: relative;

    .copy-btn {
        position: absolute;
        right: 30px;
        top: 30px;
    }

    ::v-deep pre {
        display: flex;
        height: 100%;

        > code {
            flex: 1;
            border-radius: 10px;
        }
    }
}
</style>
