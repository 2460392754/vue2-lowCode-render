<template>
    <el-main>
        <PageContainer />
    </el-main>
</template>

<script>
import PageContainer from './pageContainer';

export default {
    components: {
        PageContainer
    },

    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.el-main {
    display: flex;
    flex: 1;
}
</style>
