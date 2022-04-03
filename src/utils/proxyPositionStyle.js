import Vue from 'vue';

const fields = ['top', 'bottom', 'left', 'right'];

/**
 * 代理 定位样式
 * @param {*} nodeList
 */
export function proxyPositionStyle(nodeList) {
    nodeList.forEach((node) => {
        const { __id__, attribute } = node;
        const { style } = node.__attribute__;

        // 处理 编辑器环境下的 组件绝对定位
        if (typeof style === 'undefined' || style.position !== true) {
            return;
        }

        // 初始化同步数据
        Vue.nextTick(() => {
            initRElPositionStyle(__id__, attribute.style);
        });
    });
}

/**
 * 获取 `.draggable-item` element
 * @param {string} __id__
 * @returns
 */
function getDraggableItemEl(__id__) {
    return document.querySelector(`.draggableItemEl__${__id__}`);
}

/**
 * 获取 `<RegisterComponent />` element
 * @param {string} __id__
 * @returns
 */
function getREl(__id__) {
    return document.querySelector(`.rEl__${__id__}`);
}

/**
 * 设置 `.draggable-item` 为绝对定位，在通过微任务队列更新使 `<RegisterComponent />` 定位无效化
 * @param {string} __id__
 * @param {string} key
 * @param {string} value
 */
function setRElPositionAttr(__id__, key, value) {
    const draggableItemEl = getDraggableItemEl(__id__);

    // draggableItemEl.style.setProperty('opacity', '0');
    draggableItemEl.style.setProperty('z-index', '999');
    draggableItemEl.style.setProperty('position', 'absolute');
    typeof key !== 'undefined' && draggableItemEl.style.setProperty(key, value);
    setRElPositionInvalid(__id__);

    // setTimeout(() => {
    //     // setRElPositionInvalid(__id__);
    //     // draggableItemEl.style.setProperty('opacity', 1);
    // }, 100);
}

/**
 * 使 `RegisterComponent`组件 在编辑器环境下 `position` 无效化
 * @param {string} __id__
 */
function setRElPositionInvalid(__id__) {
    const rEl = getREl(__id__);

    rEl.style.setProperty('position', 'inherit', 'important');
}

/**
 * 初始化 定位 样式
 * @param {*} __id__
 * @param {*} style
 */
function initRElPositionStyle(__id__, style) {
    const draggableItemEl = getDraggableItemEl(__id__);

    Object.keys(style).forEach((key) => {
        // 数据命中
        if (fields.includes(key)) {
            draggableItemEl.style.setProperty(key, style[key]);
        }
    });

    setRElPositionAttr(__id__);
}
