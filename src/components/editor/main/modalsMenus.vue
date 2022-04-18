<template>
    <div class="modalsMenus">
        <div
            v-for="(item, i) of getModalList"
            :key="i"
            class="item"
            @click="onChange(item)"
        >
            <span>{{ item.title }}</span>
        </div>
    </div>
</template>

<script>
import { selectJsonData } from '@/utils/selectJsonData';

export default {
    inject: ['store'],

    computed: {
        getModalList() {
            return this.store.modalList || [];
        }
    },

    methods: {
        onChange(item) {
            selectJsonData.call(this, item);
        }
    }
};
</script>

<style lang="scss" scoped>
.item {
    background-color: $white-color;
    border: 1px solid #ebebeb;
    cursor: pointer;
    padding: 2px 5px;
}
</style>
