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
         * @param {Object} opts
         * @param {number} opts.x
         * @param {number} opts.y
         * @param {number} opts.width
         * @param {number} opts.height
         */
        onResize(opts) {
            const item = this.store.node.find(
                (node) => node.__id__ === this.elId
            );

            console.log(item.attribute.props.width, JSON.stringify(opts));

            item.attribute.props.width = opts.width;
            item.attribute.props.height = opts.height;
        }
    }
};

export default window.$projectEnv === 'editor' ? editorMixin : h5Mixin;
