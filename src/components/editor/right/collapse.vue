<template>
    <el-collapse :value="active" @change="onChange">
        <el-collapse-item title="基本" :name="0">
            <FormBasic />
        </el-collapse-item>
        <el-collapse-item title="样式" :name="1">
            <FormStyle />
        </el-collapse-item>
        <el-collapse-item title="组件属性" :name="2">
            <FormAttribute />
        </el-collapse-item>
        <el-collapse-item title="事件绑定" :name="3">
            <FormEventBind />
        </el-collapse-item>
    </el-collapse>
</template>

<script>
import FormBasic from './formBasic';
import FormStyle from './formStyle';
import FormAttribute from './formAttribute';
import FormEventBind from './formEventBind';

export default {
    props: {
        active: {
            type: Number,
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
