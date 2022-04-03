<template>
    <el-form :model="getForm" label-width="80px">
        <template v-if="hasEditStyle">
            <!-- input 属性 -->
            <template v-for="item of inputEditAttr">
                <el-form-item
                    v-if="getForm.__attribute__.style[item.key]"
                    :key="item.key"
                    :label="item.label"
                >
                    <el-input
                        v-model="getForm.attribute.style[item.key]"
                        placeholder="请输入内容"
                        clearable
                        @clear="onRemoveAttr($event, item.key)"
                    />
                </el-form-item>
            </template>

            <!-- input 属性 -->
            <template v-for="item of selectEditAttr">
                <el-form-item
                    v-if="getForm.__attribute__.style[item.key]"
                    :key="item.key"
                    :label="item.label"
                >
                    <el-select
                        v-model="getForm.attribute.style[item.key]"
                        placeholder="请选择内容"
                        clearable
                        @clear="onRemoveAttr($event, item.key)"
                    >
                        <el-option
                            v-for="itemOpts in item.opts"
                            :key="itemOpts.value"
                            :label="itemOpts.label"
                            :value="itemOpts.value"
                        />
                    </el-select>
                </el-form-item>
            </template>

            <!-- colorPicker 属性 -->
            <template v-for="item of colorPickerEditAttr">
                <el-form-item
                    v-if="getForm.__attribute__.style[item.key]"
                    :key="item.key"
                    :label="item.label"
                    class="colorPicker"
                >
                    <el-color-picker
                        v-model="getForm.attribute.style[item.key]"
                        size="mini"
                        @change="onRemoveAttr($event, item.key)"
                    />
                </el-form-item>
            </template>
        </template>

        <el-empty v-else description="未配置属性" />
    </el-form>
</template>

<script>
import { getNode } from '@/utils/nodeTools';

/**
 * 获取 input 类型的可编辑属性
 */
const getInputEditAttr = () => [
    {
        label: '宽度',
        key: 'width'
    },
    {
        label: '高度',
        key: 'height'
    },
    {
        label: '外边距',
        key: 'margin'
    },
    {
        label: '内边距',
        key: 'padding'
    },
    {
        label: '上',
        key: 'top'
    },
    {
        label: '下',
        key: 'bottom'
    },
    {
        label: '左',
        key: 'left'
    },
    {
        label: '右',
        key: 'right'
    },
    {
        label: '字体尺寸',
        key: 'fontSize'
    }
];

/**
 * 获取 select 类型的可编辑属性
 */
const getSelectEditAttr = () => [
    {
        label: '位置',
        key: 'textAlign',
        opts: [
            {
                label: '左',
                value: 'left'
            },
            {
                label: '中',
                value: 'center'
            },
            {
                label: '右',
                value: 'right'
            }
        ]
    }
];

/**
 * 获取 colorPicker 类型的可编辑属性
 */
const getColorPickerEditAttr = () => [
    {
        label: '颜色',
        key: 'color'
    },
    {
        label: '背景色',
        key: 'backgroundColor'
    }
];

export default {
    inject: ['store'],

    data() {
        return {
            getForm: false,
            inputEditAttr: getInputEditAttr(),
            selectEditAttr: getSelectEditAttr(),
            colorPickerEditAttr: getColorPickerEditAttr()
        };
    },

    computed: {
        /**
         * 是否有 可编辑 style 属性
         */
        hasEditStyle() {
            if (
                this.store.selectComponentId === null ||
                typeof this.getForm.__attribute__ === 'undefined' ||
                typeof this.getForm.__attribute__.style === 'undefined' ||
                Object.keys(this.getForm.__attribute__.style).length === 0
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
                Reflect.deleteProperty(this.getForm.attribute.style, name);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.colorPicker {
    display: flex;

    ::v-deep .el-form-item__content {
        display: flex;
        align-items: center;
        margin-left: 0 !important;
    }
}
</style>
