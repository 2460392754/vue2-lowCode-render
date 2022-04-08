<template>
    <div class="menus">
        <LayerDrawer v-model="visible.layerDrawer" />

        <el-tooltip
            v-for="(item, i) of list"
            :key="i"
            :content="item.title"
            effect="dark"
            placement="left"
        >
            <i :class="item.icon" @click="onClickMenu(item)" />
        </el-tooltip>
    </div>
</template>

<script>
import LayerDrawer from './layerDrawer.vue';

export default {
    components: {
        LayerDrawer
    },

    data() {
        return {
            visible: {
                layerDrawer: false
            },
            list: [
                {
                    title: '图层',
                    type: 'layer',
                    icon: 'el-icon-coin'
                },
                // {
                //     title: '设置',
                //     type: 'setting',
                //     icon: 'el-icon-setting'
                // }
            ]
        };
    },

    methods: {
        onClickMenu(item) {
            switch (item.type) {
                case 'layer':
                    this.visible.layerDrawer = true;
                    break;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.menus {
    position: absolute;
    right: 20px;
    background: $white-color;
    cursor: pointer;
    display: flex;
    flex-direction: column;

    i + i {
        border-top: 1px solid $border-color;
    }

    i {
        padding: 10px;

        &:hover {
            color: $primary-color;
        }
    }
}
</style>
