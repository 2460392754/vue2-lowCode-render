<template>
    <el-form :model="getForm" label-width="80px">
        <template v-if="hasEditAttribute">
            <el-form-item
                v-for="(pItem, k) of getForm.__attribute__.props"
                :key="k"
                :label="pItem.name"
            >
                <template v-if="pItem.type === 'select'">
                    <el-select
                        v-model="getForm.attribute.props[k]"
                        placeholder="请选择"
                        clearable
                    >
                        <el-option
                            v-for="itemD in pItem.data"
                            :key="itemD.value"
                            :label="itemD.label"
                            :value="itemD.value"
                        />
                    </el-select>
                </template>

                <template v-if="pItem.type === 'switch'">
                    <el-switch v-model="getForm.attribute.props[k]" />
                </template>

                <template v-if="pItem.type === 'number'">
                    <el-input-number
                        v-model="getForm.attribute.props[k]"
                        :min="pItem.opts.min || undefined"
                        :max="pItem.opts.max || undefined"
                        label="描述文字"
                        controls-position="right"
                    />
                </template>

                <template v-if="pItem.type === 'input'">
                    <el-input
                        v-model="getForm.attribute.props[k]"
                        clearable
                        placeholder="请输入内容"
                    />
                </template>

                <template v-if="pItem.type === 'upload'">
                    <!-- <el-upload
                        action="#"
                        list-type="picture-card"
                        :limit="1"
                        :file-list="getForm.__attribute__.props[k].data"
                        :before-upload="($event) => onBeforeUpload($event, k)"
                        :before-remove="($event) => onRemove($event, k)"
                    >
                        <i
                            v-if="
                                getForm.__attribute__.props[k].data.length === 0
                            "
                            slot="default"
                            class="el-icon-plus"
                        />
                    </el-upload> -->
                    <el-upload
                        action="#"
                        list-type="picture-card"
                        :limit="1"
                        :file-list="getForm.__attribute__.props[k].data"
                        :before-upload="($event) => onBeforeUpload($event, k)"
                        :before-remove="($event) => onRemove($event, k)"
                    >
                        <el-button
                            v-if="
                                getForm.__attribute__.props[k].data.length === 0
                            "
                            size="small"
                            type="primary"
                            >点击上传</el-button
                        >
                        <div slot="tip" class="el-upload__tip">
                            只能上传jpg/png文件，且不超过500kb
                        </div>
                    </el-upload>
                    <!-- <el-upload
                        action="#"
                        list-type="picture-card"
                        :limit="1"
                        :file-list="getForm.__attribute__.props[k].data"
                        :before-upload="($event) => onBeforeUpload($event, k)"
                        :before-remove="($event) => onRemove($event, k)"
                    /> -->
                </template>

                <template v-if="pItem.type === 'color'">
                    <el-color-picker
                        v-model="getForm.attribute.props[k]"
                        size="mini"
                        @change="onRemoveAttr($event, k)"
                    />
                </template>

                <template v-if="pItem.type === 'event'">
                    <BindDataSourceSelect
                        type="methods"
                        :obj="getForm.attribute.props"
                        :objK="k"
                    />
                </template>

                <template v-if="pItem.type === 'data'">
                    <BindDataSourceSelect
                        type="data"
                        :obj="getForm.attribute.props"
                        :objK="k"
                    />
                </template>
            </el-form-item>
        </template>

        <el-empty v-else description="未配置属性" />
    </el-form>
</template>

<script>
import BindDataSourceSelect from './child/bindDataSourceSelect';
import { getNode } from '@/utils/nodeTools';

export default {
    inject: ['store'],

    data() {
        return {
            getForm: false,
            upload: {
                fileList: []
            }
        };
    },

    components: {
        BindDataSourceSelect
    },

    computed: {
        /**
         * 是否有 可编辑 props 属性
         */
        hasEditAttribute() {
            if (
                this.store.selectComponentId === null ||
                typeof this.getForm.__attribute__ === 'undefined' ||
                typeof this.getForm.__attribute__.props === 'undefined' ||
                Object.keys(this.getForm.__attribute__.props).length === 0
            ) {
                return false;
            }

            return true;
        }
    },

    watch: {
        'store.selectComponentId': {
            handler() {
                this.getForm = getNode(
                    this.store.node,
                    this.store.selectComponentId
                );
            },
            immediate: true
        }
    },

    methods: {
        /**
         * 删除 属性
         * @param {*} val
         * @param {*} name
         */
        onRemoveAttr(val, name) {
            // 数据被清空, 则删除对象的键名（防止覆盖css原本的属性）
            if (val === null) {
                Reflect.deleteProperty(this.getForm.attribute.props, name);
            }
        },

        /**
         * 图片上传
         * @param {File} file
         * @param {*} k
         */
        onBeforeUpload(file, k) {
            if (file.size / 1025 > 500) {
                window.$message.error('上传失败, 图片过大');
                return false;
            }

            const reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = () => {
                this.getForm.attribute.props[k] = reader.result;
                this.getForm.__attribute__.props[k].data = [
                    {
                        name: 'img',
                        url: reader.result
                    }
                ];
            };
            reader.onerror = (error) => {
                window.$message.error('图片上传错误');
            };

            return false;
        },

        /**
         * 删除图片
         * @param {*} k
         */
        onRemove(file, k) {
            if (file.status === 'success') {
                this.getForm.attribute.props[k] = '';
                this.getForm.__attribute__.props[k].data = [];
            }
        },

        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },

        handleDownload(file) {
            console.log(file);
        }
    }
};
</script>

<style lang="scss" scoped></style>
