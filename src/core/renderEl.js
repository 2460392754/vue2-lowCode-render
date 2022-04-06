import ComponentName from './componentName';
import {
    hasJsonPathMatch,
    handleParseJsonPathMatch,
    objDeepEach,
    addClassName,
    privateId,
    handleSelectActiveClassToggle
} from './renderElSupportFunc';
import { isRef, watch } from '@vue/composition-api';

/**
 * 处理渲染
 * @param data
 * @returns
 */
export function handleRenderEl(node, jsonData, h, isEditor, onChange) {
    // 处理 空数据
    if (typeof jsonData.node === 'undefined') return;

    let renderList;

    // 非编辑环境，不渲染数据（避免数据混乱造成json内容异常）
    !isEditor && handleBindValue(node, jsonData);

    // 处理 `jsonData.node` 为数组结构
    if (Array.isArray(node)) {
        const res = node.map((cNode) =>
            handleRenderEl(cNode, jsonData, h, isEditor, onChange)
        );

        return h('div', res);
    }

    // 内容
    if (typeof node.children !== 'undefined') {
        if (Array.isArray(node.children)) {
            renderList = node.children.map((item) => {
                if (typeof item === 'object') {
                    return handleRenderEl(
                        item,
                        jsonData,
                        h,
                        isEditor,
                        onChange
                    );
                }

                // 字符串 格式
                else {
                    return item;
                }
            });
        } else {
            renderList = node.children;
        }
    }

    // 渲染
    if (typeof node.type === 'string') {
        const tempAttr = JSON.parse(JSON.stringify(node.attribute));
        // const tempAttr = { ...node.attribute };

        // 初始化
        handleAttributeInit(tempAttr, node);

        // 添加组件边框提示框
        isEditor && handleRenderBorderClass(tempAttr);

        // 添加 私有id
        isEditor && handleElementIdClass(tempAttr, node.__id__);

        // 绑定事件
        handleBindEvent(tempAttr, node, jsonData, isEditor, onChange);

        // 处理插槽
        handleScopedSlots(tempAttr, node.attribute, jsonData, h);

        // 处理 样式
        handleStyle(tempAttr);

        return h(ComponentName[node.type] || node.type, tempAttr, renderList);
    }

    throw new TypeError('格式错误');
}

/**
 * 处理 attribute 的数据初始化
 * @param {*} tempAttr
 */
function handleAttributeInit(tempAttr, node) {
    const objK = ['attrs', 'on', 'nativeOn', 'style'];
    const strK = ['class'];

    objK.forEach((k) => {
        if (typeof tempAttr[k] === 'undefined') {
            tempAttr[k] = {};

            if (
                k === 'nativeOn' &&
                typeof ComponentName[node.type] === 'undefined'
            ) {
                Reflect.deleteProperty(tempAttr, k);
            }
        }
    });

    strK.forEach((k) => {
        if (typeof tempAttr[k] === 'undefined') {
            tempAttr[k] = '';
        }
    });
}

/**
 * 处理 数据绑定
 * @param tempAttr
 * @param jsonData
 * @returns
 */
function handleBindValue(tempAttr, jsonData) {
    /**
     * 获取 解析值
     * @param {*} item
     * @param {*} val
     * @returns
     */
    function getParseRes(item, val) {
        const evalRes = eval(item.afterPath);
        const handleRef = isRef(evalRes) ? evalRes.value : evalRes;
        let res;

        if (/^{{[\w\d.]+}}$/.test(val)) {
            res = handleRef;
        } else {
            res = val.replace(item.beforePath, handleRef);
        }

        return { res, evalRes };
    }

    /**
     * 处理数据解析和响应式类型数据绑定
     * @param {*} item
     * @param {*} k
     * @param {*} val
     * @param {*} obj
     * @param {*} oldVal
     * @returns
     */
    function computed(item, k, val, obj, oldVal) {
        const { res, evalRes } = getParseRes(item, val);

        // 响应式数据绑定，监听数据变化，触发当前字符串中所有的动态值重新计算
        if (isRef(evalRes)) {
            watch(
                () => evalRes,
                (newValRef) => {
                    let newRes = oldVal;
                    handleParseJsonPathMatch(jsonData, oldVal).forEach(
                        (item) => {
                            newRes = getParseRes(item, newRes).res;
                        }
                    );

                    obj[k] = newRes;
                },
                { deep: true }
            );
        }

        return res;
    }

    // 递归遍历对象
    objDeepEach(tempAttr, (k, val, obj) => {
        // 匹配命中
        if (hasJsonPathMatch(val) && /{{data./.test(val)) {
            let res = val;

            handleParseJsonPathMatch(jsonData, val).forEach((item) => {
                res = computed(item, k, res, obj, val);
            });

            obj[k] = res;
        }
    });
}

/**
 * 处理 样式转换
 * @param tempAttr
 * @returns
 */
function handleStyle(tempAttr) {
    if (typeof tempAttr.style !== 'object') {
        return;
    }

    tempAttr.style = Object.keys(tempAttr.style)
        .map((k) => {
            return `${k}:${tempAttr.style[k]};`;
        })
        .join('');
}

/**
 * 处理 渲染边框的class
 * @param {*} tempAttr
 */
function handleRenderBorderClass(tempAttr) {
    // 编辑环境 添加组件表示提示框
    if (tempAttr.__renderBorder__ !== false) {
        addClassName(tempAttr, 'render-component');
    }
}

/**
 * 处理 element id class
 * @param {*} tempAttr
 * @param {*} id
 */
function handleElementIdClass(tempAttr, id) {
    addClassName(tempAttr, privateId + id);
}

/**
 * 处理 事件绑定
 * @param tempAttr
 * @param node
 * @param jsonData
 * @param isEditor
 * @param onChange
 * @returns
 */
function handleBindEvent(tempAttr, node, jsonData, isEditor, onChange) {
    const eventKeys = ['on', 'nativeOn', 'props'];

    // 编辑环境
    if (isEditor) {
        Reflect.deleteProperty(tempAttr.on, 'click');
        tempAttr.nativeOn && Reflect.deleteProperty(tempAttr.nativeOn, 'click');

        // html标签使用
        const eventType =
            typeof ComponentName[node.type] !== 'undefined' ? 'nativeOn' : 'on';

        // 点击事件并阻止冒泡
        tempAttr[eventType].click = function (event) {
            if (tempAttr.__renderBorder__ !== false) {
                event.stopPropagation();
                onChange(node);
                handleSelectActiveClassToggle(node.__id__);
            }
        };
    }

    // 非编辑环境，不渲染数据（避免数据混乱造成json内容异常）
    else {
        Object.keys(tempAttr).forEach((k) => {
            if (eventKeys.includes(k)) {
                objDeepEach(tempAttr[k], (eventName, val, obj) => {
                    const toEventName = obj[eventName];

                    // 过滤 vue2 createFnInvoker 函数
                    if (typeof toEventName !== 'string') {
                        return true;
                    }

                    // 过滤非 "{{methods.xxxx}}" 动态变量
                    if (!/^{{methods./.test(toEventName)) {
                        return true;
                    }

                    let func = eval(
                        handleParseJsonPathMatch(jsonData, toEventName)[0]
                            .afterPath
                    );

                    // 匹配命中，解析规则
                    if (hasJsonPathMatch(func)) {
                        const mathcRes = handleParseJsonPathMatch(
                            jsonData,
                            func
                        );

                        mathcRes.forEach((item) => {
                            func = func.replace(
                                new RegExp(item.beforePath),
                                item.afterPath
                            );
                        });
                    }

                    // 重新保存引用
                    obj[eventName] = function () {
                        eval(func);
                    };
                });
            }
        });
    }
}

/**
 * 处理 插槽
 * @param {*} tempAttr
 * @param {*} jsonData
 * @param {*} h
 */
function handleScopedSlots(tempAttr, props, jsonData, h) {
    const childJsonData = props.scopedSlots;
    const temp = {};

    if (typeof childJsonData === 'object') {
        Object.keys(childJsonData).forEach((k) => {
            const node = { ...childJsonData[k] };

            function slotFunc() {
                return [handleRenderEl(node, jsonData, h)];
            }
            slotFunc.proxy = true;

            temp[k] = slotFunc;
        });

        tempAttr.scopedSlots = temp;
    }
}
