<template>
    <div class="right-tabs">
        <el-tabs :value="value" @tab-click="onChange">
            <el-tab-pane label="基本" name="0">
                <FormBasic />
            </el-tab-pane>
            <el-tab-pane label="样式" name="1">
                <FormStyle />
            </el-tab-pane>
            <el-tab-pane label="组件属性" name="2">
                <FormAttribute />
            </el-tab-pane>
            <el-tab-pane label="事件绑定" name="3">
                <FormEventBind />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import FormBasic from './formBasic';
import FormStyle from './formStyle';
import FormAttribute from './formAttribute';
import FormEventBind from './formEventBind';

export default {
    props: {
        value: {
            type: String,
            required: true
        }
    },

    components: {
        FormBasic,
        FormStyle,
        FormAttribute,
        FormEventBind
    },

    methods: {
        onChange(i) {
            this.$emit('update', i);
        }
    }
};
</script>

<style lang="scss">
.right-tabs {
    .el-tabs__nav {
        width: 100%;
        display: flex;
        text-align: center;

        > .el-tabs__item {
            flex: 1;
            padding: 0;
        }
    }
}
</style>
