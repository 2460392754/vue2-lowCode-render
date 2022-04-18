import { setDeepNodeRandomId } from '@/utils/nodeTools';

/**
 * 设置 jsonData
 * 需要 使用 call或apply
 * @param {*} jsonData
 */
export function selectJsonData(jsonData) {
    const { node, data, methods, created, mounted, beforeDestroy } =
        jsonData.data;

    this.store.selectComponentId = null;
    setDeepNodeRandomId(node);

    const waitMergeData = {
        node,
        data,
        methods,
        created,
        mounted,
        beforeDestroy
    };

    // 显示当前页面弹窗配置
    if (/^Page/.test(jsonData.type)) {
        jsonData.modalList &&
            (waitMergeData.modalList = [jsonData, ...jsonData.modalList]);
    }

    Object.assign(this.store, waitMergeData);
}
