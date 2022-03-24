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