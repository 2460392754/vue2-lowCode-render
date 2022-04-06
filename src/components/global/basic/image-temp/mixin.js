import { getNodeElId } from '@/utils/nodeTools';

const h5Mixin = {};

const editorMixin = {
    inject: ['store'],

    data() {
        return {
            elId: null
        };
    },

    computed: {
        getNodeInfo() {
            return this.store.node.find((node) => node.__id__ === this.elId);
        },

        isSelect() {
            return this.elId === this.store.selectComponentId;
        }
    },

    mounted() {
        this.elId = getNodeElId(this.$el.parentElement.id);
    },

    methods: {
        /**
         * 缩放变化
         */
        onResize(x, y, width, height) {
            const item = this.store.node.find(
                (node) => node.__id__ === this.elId
            );

            console.log(item.attribute.props.width, width, height, arguments);

            item.attribute.props.width = width;
            item.attribute.props.height = height;
        }
    }
};

export default window.$projectEnv === 'editor' ? editorMixin : h5Mixin;
