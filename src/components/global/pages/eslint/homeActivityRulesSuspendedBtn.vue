<template>
    <div class="PageEslintHomeActivityRulesSuspendedBtn">
        <div @click="$emit('click', '活动规则')">
            <span>活动规则</span>
            <van-icon name="like" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageEslintHomeActivityRulesSuspendedBtn'
};
</script>

<style lang="scss" scoped>
.PageEslintHomeActivityRulesSuspendedBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    box-shadow: 0px 0px 6px 0px #c3c3c3;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 0 100px 100px 0;
}
</style>
