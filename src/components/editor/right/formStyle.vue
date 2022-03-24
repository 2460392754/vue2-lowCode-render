<template>
    <el-form :model="getForm" label-width="80px">
        <el-form-item label="外边距">
            <el-input v-model="getForm.attribute.style.margin" />
        </el-form-item>
        <el-form-item label="内边距">
            <el-input v-model="getForm.attribute.style.padding" />
        </el-form-item>
        <el-form-item label="颜色" class="color">
            <el-color-picker
                v-model="getForm.attribute.style.color"
                size="mini"
                @change="onChangeColorPicker($event, 'color')"
            />
        </el-form-item>
        <el-form-item label="背景色" class="color">
            <el-color-picker
                v-model="getForm.attribute.style.backgroundColor"
                size="mini"
            />
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    inject: ['store'],

    computed: {
        /**
         * 获取 当前选择的组件属性表单
         */
        getForm() {
            return this.store.node.find(
                (item) => item.id === this.store.selectComponentId
            );
        }
    },

    methods: {
        /**
         * 选择 颜色
         * @param {*} val
         * @param {*} name
         */
        onChangeColorPicker(val, name) {
            // 颜色被清空, 则删除对象的键名
            if (val === null) {
                Reflect.deleteProperty(this.getForm.attribute.style, name);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.color {
    display: flex;

    ::v-deep .el-form-item__content {
        display: flex;
        align-items: center;
        margin-left: 0 !important;
    }
}
</style>
