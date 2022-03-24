<template>
    <div>
        <div>name: {{ name }}</div>
    </div>
</template>

<script>
export default {
    name: 'myUser',

    props: {
        name: {
            type: String,
            required: true
        }
    }
};
</script>
