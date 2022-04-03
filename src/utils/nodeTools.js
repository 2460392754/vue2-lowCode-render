import { privateId } from '@/core/renderElSupportFunc';

/**
 * 获取 element id
 * @param {string} __id__
 * @returns
 */
export function getNodeElId(__id__) {
    return __id__.replace(new RegExp(privateId), '');
}

/**
 * 获取 node 信息
 * @param {*} nodeList
 * @param {*} selectId
 * @returns
 */
export function getNode(nodeList, selectId) {
    for (const node of nodeList) {
        if (node.__id__ === selectId) {
            return node;
        }

        if (Array.isArray(node.children)) {
            const res = getNode(node.children, selectId);

            if (res !== false) {
                return res;
            }
        }
    }

    return false;
}

/**
 * 设置 node 自定义插槽名称
 * @param {*} node
 * @param {*} slotName
 */
export function setNodeSlotName(node, slotName) {
    const tempNode = { ...node };

    tempNode.attribute.slot = slotName;

    return tempNode;
}
