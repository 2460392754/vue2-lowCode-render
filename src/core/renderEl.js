import ComponentName from './componentName';
import {
    hasJsonPathMatch,
    handleParseJsonPathMatch,
    objDeepEach
} from './renderElSupportFunc';
import { isRef, watch } from '@vue/composition-api';

/**
 * 处理渲染
 * @param data
 * @returns
 */
export function handleRenderEl(node, jsonData, h) {
    // 处理 空数据
    if (typeof jsonData.node === 'undefined') return;

    let renderList;

    handleBindValue(node, jsonData);

    // 内容
    if (typeof node.children !== 'undefined') {
        if (Array.isArray(node.children)) {
            renderList = node.children.map((item) => {
                if (typeof item === 'object') {
                    console.log(item);
                    return handleRenderEl(item, jsonData, h);
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
        const tempAttr = {
            ...node.attribute
        };

        // handleElRefBind(tempAttr, jsonData);
        handleBindEvent(tempAttr, jsonData);
        handleScopedSlots(tempAttr, node.attribute, jsonData, h);
        handleStyle(tempAttr);

        return h(ComponentName[node.type] || node.type, tempAttr, renderList);
    }

    throw new TypeError('格式错误');
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
 * 处理 事件绑定
 * @param tempAttr
 * @param jsonData
 * @returns
 */
function handleBindEvent(tempAttr, jsonData) {
    const eventKeys = ['on', 'nativeOn', 'props'];

    Object.keys(tempAttr).forEach((k) => {
        if (eventKeys.includes(k)) {
            objDeepEach(tempAttr[k], (eventName, val, obj) => {
                const toEventName = obj[eventName];

                // 过滤 vue2 createFnInvoker
                if (typeof toEventName !== 'string') {
                    return true;
                }

                // 过滤非 "{{methods.xxxx}}" 动态变量
                if (!/^{{methods./.test(toEventName)) {
                    return true;
                }

                let { func } = eval(
                    handleParseJsonPathMatch(jsonData, toEventName)[0].afterPath
                );

                // 匹配命中，解析规则
                if (hasJsonPathMatch(func)) {
                    const mathcRes = handleParseJsonPathMatch(jsonData, func);

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

/**
 * 处理 组件 ref 绑定
 * @param tempAttr
 * @param jsonData
 */
function handleElRefBind(tempAttr, jsonData) {
    // 跳过 解析
    if (typeof tempAttr.ref === 'undefined') {
        return tempAttr;
    }

    // 数据命中，"{{data.xxxxx}}", 例如："{{data.formRef}}" => "data.formRef"
    if (!hasJsonPathMatch(tempAttr.ref)) {
        return tempAttr;
    }

    tempAttr.ref = eval(
        handleParseJsonPathMatch(jsonData, tempAttr.ref)[0].afterPath
    );
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
