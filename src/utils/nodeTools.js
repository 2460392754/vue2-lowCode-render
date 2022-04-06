import { privateId } from '@/core/renderElSupportFunc';
import { v4 as UuidV4 } from 'uuid';

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

/**
 * 递归便利 设置随机id
 * @param {*} node
 */
export function setDeepNodeRandomId(node) {
    if (Array.isArray(node)) {
        node.forEach((item) => {
            item.__id__ = UuidV4();

            if (Array.isArray(item.children)) {
                setDeepNodeRandomId(item.children);
            }
        });
    } else {
        node.__id__ = UuidV4();
    }
}

/**
 * 深度合并
 * @param {Object|Array} target
 * @param {Object} source
 * @returns
 */
export function mergeDeep(target, source, isFirst = true) {
    // 使对象脱离原来的指针
    if (isFirst) {
        target = JSON.parse(JSON.stringify(target));
    }

    function isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    }

    if (typeof source === 'undefined') return target;

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    target[key] = {};
                }

                mergeDeep(target[key], source[key], false);
            } else if (source[key] === null) {
                // Object.assign(target, { [key]: {} });
                Reflect.deleteProperty(target, key);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return target;
}

// /**
//  * 深度合并
//  * @param {Object|Array} target
//  * @param  {Object|Array} sources
//  * @param  {Number} count
//  * @returns
//  */
//  export function mergeDeep(target, sources, count = 0) {
//     // 使对象脱离原来的指针
//     // if (count === 0) {
//     //     target = JSON.parse(JSON.stringify(target));
//     // }

//     function isObject(item) {
//         return item && typeof item === 'object' && !Array.isArray(item);
//     }

//     if (!sources.length) return target;

//     const source = sources.shift();

//     if (isObject(target) && isObject(source)) {
//         for (const key in source) {
//             if (isObject(source[key])) {
//                 if (!target[key]) {
//                     target[key] = {};
//                 }

//                 mergeDeep(target[key], source[key], count + 1);
//             } else {
//                 Object.assign(target, { [key]: source[key] });
//             }
//         }
//     }

//     return mergeDeep(target, sources, count + 1);
// }
