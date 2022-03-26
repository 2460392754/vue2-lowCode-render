<template>
    <div class="tabs">
        <div
            v-for="(item, i) of list"
            :key="i"
            :class="['tab', active === i ? 'active' : '']"
            @click="onChangeTab(i)"
        >
            <i :class="item.icon" />
            <div>{{ item.title }}</div>
        </div>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'active',
        event: 'change'
    },

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

    methods: {
        /**
         * 切换 tab
         * @param {number} i
         */
        onChangeTab(i) {
            this.$emit('change', i);
        }
    }
};
</script>

<style lang="scss" scoped>
.tabs {
    width: 79px;
    background-color: $bg-color;
    text-align: center;
    cursor: pointer;
    border-right: 1px solid $border-color;

    .tab {
        padding: 20px 0;
        position: relative;

        &::after {
            content: '';
            width: 1px;
            height: 100%;
            position: absolute;
            right: -1px;
            top: 0;
        }

        &.active {
            background-color: $primary-color;
            color: $white-color;
            transition: all 0.5s;

            &::after {
                background-color: $primary-color;
            }
        }
    }
}
</style>
