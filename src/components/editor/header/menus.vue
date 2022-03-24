<template>
    <div class="menus">
        <div
            v-for="(item, i) of list"
            :key="i"
            class="menu"
            @click="onClickMenu"
        >
            <i :class="item.icon" />
            <span class="label">{{ item.label }}</span>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['store'],

    data() {
        return {
            list: [
                {
                    label: '导出json',
                    icon: 'el-icon-download'
                }
            ]
        };
    },

    methods: {
        onClickMenu(event) {
            console.log(this.store);
            console.log(window.$jsonData);
        }
    }
};
</script>

<style lang="scss" scoped>
.menus {
    .menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;

        &:hover {
            color: $primary-color;
        }
    }
}
</style>
