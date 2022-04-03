const elementNode = {};

export const privateId = 'rEl__';

/**
 * 处理 data
 * @param data
 * @returns
 */
export function handleDataParse(data) {
    const tempData = {};

    Object.keys(data || {}).forEach(async (k) => {
        const v = data[k];

        // "eval('xxx')", 例如: "eval('console.log(`is eval`)')"
        if (/^eval(.*?)$/.test(v)) {
            tempData[k] = eval(v.replace(/^eval\(/, '').replace(/\)$/, ''));
        }
    });

    return tempData;
}

/**
 * 是否有 json文件 路径匹配, 例如 "{{data.formRef}})", "{{methods.onSubmit}}"
 * @param matchPath
 * @returns
 */
export function hasJsonPathMatch(matchPath) {
    return /{{[\S\d]+}}/.test(matchPath);
}

/**
 * 处理 json文件 路径解析
 * @param jsonData
 * @param matchPath
 * @returns
 */
export function handleParseJsonPathMatch(jsonData, matchPath) {
    if (!hasJsonPathMatch(matchPath)) {
        throw new TypeError('json解析属性错误');
    }

    return matchPath.match(/{{[\S\d]+}}/g).map((name) => {
        const pathList = name.replace(/[{}]/g, '').split('.');
        const afterPath = pathList.map((path) => `["${path}"]`).join('');

        return {
            pathList,
            afterPath: 'jsonData' + afterPath,
            beforePath: name
        };
    });
}

/**
 * 对象 深度遍历
 * @param {*} tempAttr
 * @param {Function} callback
 */
export function objDeepEach(tempAttr, callback) {
    Object.keys(tempAttr).forEach((k) => {
        const val = tempAttr[k];

        if (Array.isArray(val)) {
            val.forEach((item) => objDeepEach(item, callback));
        } else if (typeof val === 'object') {
            objDeepEach(val, callback);
        } else {
            callback(k, val, tempAttr);
        }
    });
}

/**
 * 添加某个 className
 * @param {*} tempAttr
 * @param {*} className
 */
export function addClassName(tempAttr, className) {
    if (tempAttr.class.length === 0) {
        tempAttr.class = className;
    } else {
        tempAttr.class += ' ' + className;
    }
}

// /**
//  * 删除某个 className
//  * @param {*} tempAttr
//  * @param {*} className
//  * @returns
//  */
// export function removeClassName(tempAttr, className) {
//     const reg = new RegExp(className, 'g');

//     return tempAttr.class.replace(reg, '');
// }

/**
 * 切换 组件激活状态
 * @param {*} tempAttr
 */
export function handleSelectActiveClassToggle(id) {
    toggleElementClassName(id, 'select-active');
}

/**
 * 切换 className
 * @param {*} tempAttr
 * @param {*} className
 */
export function toggleElementClassName(id, className) {
    let el = elementNode[id];

    // 初始化
    if (typeof el === 'undefined') {
        el = document.querySelector('.' + privateId + id);
        elementNode[id] = el;
    }

    // 删错所有当前 className
    Object.values(elementNode).forEach((iEl) => {
        iEl.className = iEl.className.replace(new RegExp(className, 'g'), '');
    });

    el.className += ' ' + className;
}
