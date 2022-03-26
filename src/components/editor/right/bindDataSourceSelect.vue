<template>
    <el-select v-model="obj[objK]" placeholder="请选择数据源">
        <el-option
            v-for="(d, key) in store[type]"
            :key="key"
            :label="key"
            :value="`{{${type}.${key}}}`"
        />
    </el-select>
</template>

<script>
export default {
    inject: ['store'],

    props: {
        /**
         * 对象源
         */
        obj: {
            type: Object,
            required: true
        },

        /**
         * 对象源 键名
         */
        objK: {
            type: String,
            required: true
        },

        /**
         * data or methods
         */
        type: {
            type: String,
            required: true
        }
    }
};
</script>
