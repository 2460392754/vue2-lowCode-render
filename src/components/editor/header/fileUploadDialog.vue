<template>
    <el-dialog
        title="上传json"
        width="400px"
        :visible="visible"
        :show-close="false"
    >
        <el-upload
            action="https://xxxx"
            accept="json"
            :before-upload="onBeforeUpload"
        >
            <el-button type="primary">上传json</el-button>
        </el-upload>

        <span slot="footer" class="dialog-footer">
            <el-button @click="onClose">取 消</el-button>
        </span>
    </el-dialog>
</template>

<script>
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

    methods: {
        /**
         * 取消
         */
        onClose() {
            this.$emit('change', false);
        },

        /**
         * 上传成功
         * @param {*} file
         */
        onBeforeUpload(file) {
            const reader = new FileReader();

            reader.readAsText(file);
            reader.onload = (event) => {
                try {
                    const jsonCentne = JSON.parse(event.target.result);

                    if (jsonCentne.editorEdit === false) {
                        window.$message.error('当前json文件不可编辑');
                        return;
                    }

                    Object.assign(this.store, jsonCentne);
                    this.onClose();
                } catch (e) {
                    window.$message.error('json文件内容异常，解析失败');
                }
            };

            return false;
        }
    }
};
</script>
