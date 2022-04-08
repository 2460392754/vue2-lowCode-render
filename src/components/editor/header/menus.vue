<template>
    <div class="menus">
        <FileSaveDialog v-model="fileSaveDialogVisible" />
        <FileUploadDialog v-model="fileUploadDialogVisible" />
        <DataSourceDialog v-model="dataSourceDialogVisible" />
        <JsonCodePreviewDrawer v-model="jsonCodePreviewDrawerVisible" />

        <div
            v-for="(item, i) of list"
            v-if="!(item.check && store.pageName !== null)"
            :key="i"
            class="menu"
            @click="onClickMenu(item.eventName)"
        >
            <i :class="item.icon" />
            <span class="label">{{ item.label }}</span>
        </div>
    </div>
</template>

<script>
import FileSaveDialog from './fileSaveDialog';
import FileUploadDialog from './fileUploadDialog';
import DataSourceDialog from './dataSourceDialog';
import JsonCodePreviewDrawer from './jsonCodePreviewDrawer';
import { v4 as UuidV4 } from 'uuid';
import { formatJson } from '@/utils/formatJson';

export default {
    inject: ['store'],

    components: {
        FileSaveDialog,
        FileUploadDialog,
        DataSourceDialog,
        JsonCodePreviewDrawer
    },

    data() {
        return {
            fileSaveDialogVisible: false,
            fileUploadDialogVisible: false,
            dataSourceDialogVisible: false,
            jsonCodePreviewDrawerVisible: false,
            list: [
                {
                    label: '数据源',
                    icon: 'el-icon-s-data',
                    eventName: 'dataSource',
                    check: true
                },
                {
                    label: '查看json',
                    icon: 'el-icon-view',
                    eventName: 'codePreview'
                },
                {
                    label: '上传json',
                    icon: 'el-icon-upload',
                    eventName: 'upload',
                    check: true
                },
                {
                    label: '导出json',
                    icon: 'el-icon-download',
                    eventName: 'save',
                    check: true
                },
                {
                    label: '清空',
                    icon: 'el-icon-delete-solid',
                    eventName: 'delete',
                    check: true
                },
                {
                    label: '预览',
                    icon: 'el-icon-s-promotion',
                    eventName: 'preview'
                }
            ]
        };
    },

    methods: {
        /**
         * 点击按钮
         * @param {string} eventName
         */
        onClickMenu(eventName) {
            switch (eventName) {
                case 'save':
                    this.fileSaveDialogVisible = true;
                    break;

                case 'upload':
                    this.fileUploadDialogVisible = true;
                    break;

                case 'dataSource':
                    this.dataSourceDialogVisible = true;
                    break;

                case 'codePreview':
                    // console.log(JSON.stringify(this.store, null, 4));
                    this.jsonCodePreviewDrawerVisible = true;
                    break;

                case 'preview':
                    if (this.store.pageName === null) {
                        const id = UuidV4();
                        const {
                            node,
                            data,
                            methods,
                            created,
                            mounted,
                            beforeDestroy
                        } = this.store;

                        const content = {
                            node,
                            data,
                            methods,
                            created,
                            mounted,
                            beforeDestroy
                        };

                        localStorage.setItem(
                            `jsonData_${id}`,
                            formatJson(content, true, true)
                        );
                        window.open(`./h5.html?id=${id}`);
                    } else {
                        import(
                            `@/pages/business/${this.store.pageName}/json.js`
                        ).then((res) => {
                            localStorage.setItem(
                                `jsonData_${this.store.pageName}`,
                                formatJson(res.default, true, true)
                            );

                            window.open(`./h5.html?id=${this.store.pageName}`);
                        });
                    }

                    break;

                case 'delete':
                    this.$confirm('确定要清空吗?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    })
                        .then(() => {
                            this.store.selectComponentId = null;
                            this.store.node = [];
                            this.$message({
                                type: 'success',
                                message: '清空成功!'
                            });
                        })
                        .catch(() => {});
                    break;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.menus {
    display: flex;

    .menu + .menu {
        margin-left: 20px;
    }
    .menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 60px;
        cursor: pointer;

        &:hover {
            color: $primary-color;
        }

        .label {
            margin-top: 5px;
        }
    }
}
</style>
