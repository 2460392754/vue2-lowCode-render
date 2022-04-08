<template>
    <el-select
        :value="getValue"
        placeholder="请选择数据源"
        clearable
        @change="onChange"
        @clear="onClear"
    >
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
    },

    computed: {
        getValue() {
            const val = this.obj[this.objK];

            if (this.type === 'data') {
                return val;
            } else {
                if (val === '__functionNull__') {
                    return null;
                }

                return val;
            }
        }
    },

    methods: {
        /**
         * 切换
         * @param {string} val
         */
        onChange(val) {
            this.obj[this.objK] = val;
        },

        /**
         * 数据被清空后，则删除对象的键名
         */
        onClear() {
            if (this.type === 'data') {
                Reflect.deleteProperty(this.obj, this.objK);
            } else {
                this.onChange('__functionNull__');
            }
        }
    }
};
</script>
