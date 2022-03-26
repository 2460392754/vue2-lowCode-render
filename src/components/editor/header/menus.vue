<template>
    <div class="menus">
        <FileSaveDialog v-model="fileSaveDialogVisible" />
        <FileUploadDialog v-model="fileUploadDialogVisible" />
        <DataSourceDialog v-model="dataSourceDialogVisible" />
        <!-- <responsiveDataDialog v-model="responsiveDataDialogVisible" /> -->

        <div
            v-for="(item, i) of list"
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
// import responsiveDataDialog from './responsiveDataDialog';
import { v4 as UuidV4 } from 'uuid';
import { formatJson } from '@/utils/formatJson';

export default {
    inject: ['store'],

    components: {
        FileSaveDialog,
        FileUploadDialog,
        DataSourceDialog
        // responsiveDataDialog
    },

    data() {
        return {
            fileSaveDialogVisible: false,
            fileUploadDialogVisible: false,
            dataSourceDialogVisible: false,
            // responsiveDataDialogVisible: false,
            list: [
                {
                    label: '数据源',
                    icon: 'el-icon-s-data',
                    eventName: 'dataSource'
                },
                {
                    label: '上传json',
                    icon: 'el-icon-upload',
                    eventName: 'upload'
                },
                {
                    label: '导出json',
                    icon: 'el-icon-download',
                    eventName: 'save'
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
                    // this.responsiveDataDialogVisible = true;
                    break;

                case 'preview':
                    const id = UuidV4();
                    const { node, data, methods } = this.store;
                    const content = {
                        node,
                        data,
                        methods
                    };

                    localStorage.setItem(
                        `jsonData_${id}`,
                        formatJson(content, true, true)
                    );
                    window.open(`./h5.html?id=${id}`);
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
