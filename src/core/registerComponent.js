import Vue from 'vue';
import { handleRenderEl } from './renderEl';
import { handleDataParse, getJSONStrFunc } from './renderElSupportFunc';
import { onMounted, onBeforeMount, onUnmounted } from '@vue/composition-api';

export default Vue.component('RegisterComponent', {
    props: {
        data: {
            type: Object,
            required: true
        },

        /**
         * 是否是 编辑器状态
         */
        isEditor: {
            type: Boolean,
            required: true
        },

        /**
         * 选中 node 节点
         */
        onChange: {
            type: Function,
            default: () => {}
        }
    },

    setup(props, { root }) {
        const jsonData = {};

        /**
         * 初始化
         * @param newJsonData
         * @param oldJsonData
         */
        function init(newJsonData, oldJsonData) {
            Object.assign(newJsonData, { ...oldJsonData });

            // 解析 "data"
            if (typeof oldJsonData.data === 'object') {
                const newData = handleDataParse(oldJsonData.data);

                newJsonData.data = {
                    ...newJsonData.data,
                    ...newData
                };
            }
        }

        init(jsonData, props.data);

        // 非编辑环境
        if (Vue.prototype.$isH5) {
            Vue.prototype.store = jsonData;

            for (const [key, val] of Object.entries(props.data.methods)) {
                props.data.methods[key] = getJSONStrFunc(val);
            }

            onBeforeMount(() => {
                eval(getJSONStrFunc(props.data.created || ''));
            });

            onMounted(() => {
                eval(getJSONStrFunc(jsonData.mounted));
            });

            onUnmounted(() => {
                eval(getJSONStrFunc(props.data.beforeDestroy || ''));
            });
        }

        return () =>
            handleRenderEl(
                jsonData.node,
                jsonData,
                root.$createElement,
                props.isEditor,
                props.onChange
            );
    }
});
