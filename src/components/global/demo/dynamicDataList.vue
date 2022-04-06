<template>
    <div class="demoDynamicDataList" @click="$emit('click')">
        <div>动态数据加载</div>
        <div>
            <div>main</div>
            <slot name="main" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'DemoDynamicDataList'
};
</script>

<style lang="scss" scoped>
.demoDynamicDataList {
    padding: 25px;

    .basicText + .basicText {
        margin-top: 20px;
    }
}
</style>
