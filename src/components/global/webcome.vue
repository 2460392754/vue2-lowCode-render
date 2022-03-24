<template>
    <div v-if="visible">
        <div>你好, {{ username }}</div>
    </div>
</template>

<script>
export default {
    name: 'myWebcome',

    props: {
        /**
         * 默认显示
         */
        visible: {
            type: Boolean,
            default: true
        },

        username: {
            type: String,
            required: true
        }
    }
};
</script>
