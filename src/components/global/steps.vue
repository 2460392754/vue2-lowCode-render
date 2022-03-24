<template>
    <el-steps :active="active" align-center>
        <el-step
            v-for="(item, i) of list"
            :key="i"
            :title="item.title"
            :description="item.desc"
        />
    </el-steps>
</template>

<script>
export default {
    name: 'mySteps',

    props: {
        active: {
            type: Number,
            required: true
        },
        list: {
            type: Array,
            required: true
        }
    },

    created(){
        console.log(this.active)
    }
};
</script>
