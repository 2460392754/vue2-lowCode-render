<template>
    <div class="basicText" @click="$emit('click')">{{ value }}</div>
</template>

<script>
export default {
    name: 'basicText',

    props: {
        value: {
            type: String,
            required: true
        }
    }
};
</script>
