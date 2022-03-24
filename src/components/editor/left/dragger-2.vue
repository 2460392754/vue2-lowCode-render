<template>
    <Draggable class="list-group" :list="list2" group="people" @change="log">
        <div
            class="list-group-item"
            v-for="(element, index) in list2"
            :key="element.name"
        >
            {{ element.name }} {{ index }}
        </div>
    </Draggable>
</template>
<script>
import Draggable from 'vuedraggable';

export default {
    components: {
        Draggable
    },

    props: {
        /**
         * 当前类型组件的数据列表
         */
        list: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            list2: [
                { name: 'Juan', id: 5 },
                { name: 'Edgard', id: 6 },
                { name: 'Johnson', id: 7 }
            ]
        };
    },

    methods: {
        add() {
            this.list.push({ name: 'Juan' });
        },
        replace() {
            this.list = [{ name: 'Edgard' }];
        },
        clone(el) {
            return {
                name: el.name + ' cloned'
            };
        },
        log(evt) {
            window.console.log(evt);
        }
    }
};
</script>

<style lang="scss" scoped>
.draggable-container {
    text-align: center;
    display: flex;

    .draggable-item {
        border: 1px dashed #ccc;
        cursor: all-scroll;
        width: 78px;
        padding: 20px 0;
        margin-right: 15px;
        margin-bottom: 10px;

        &:nth-of-type(3n + 3) {
            margin-right: 0;
        }
    }
}
</style>
