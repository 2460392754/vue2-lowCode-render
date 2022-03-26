import Vue from 'vue';
import { handleRenderEl } from './renderEl';
import { handleDataParse } from './renderElSupportFunc';

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

        return () =>
            handleRenderEl(
                jsonData.node,
                jsonData,
                root.$createElement,
                props.isEditor
            );
    }
});
