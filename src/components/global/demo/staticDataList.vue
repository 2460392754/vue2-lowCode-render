<template>
    <div class="demoStaticDataList" @click="$emit('click')">
        <div>静态数据加载</div>
        <div>
            header
            <slot name="header" />
        </div>
        <div>
            main
            <slot name="main" />
        </div>
        <div>
            footer
            <slot name="footer" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'DemoStaticDataList'
};
</script>

<style lang="scss" scoped>
.demoStaticDataList {
    display: flex;
    justify-content: space-between;
    padding: 25px;

    .basicText + .basicText {
        margin-top: 20px;
    }
}
</style>
