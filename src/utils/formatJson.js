const removeFields = ['__id__', '__name__', '__attribute__', '__children__'];

/**
 * 格式化 json 文件
 * @param {*} jsonData
 * @param {boolean} isCompressed 压缩
 * @param {boolean} isRemoveEditorArgs 删除编辑器参数
 */
export function formatJson(jsonData, isCompressed, isRemoveEditorArgs) {
    const tempJsonData = JSON.parse(
        JSON.stringify({
            vue: 2,
            editorVersion: 1,
            editorEdit: !isRemoveEditorArgs,
            ...jsonData
        })
    );
    const compressedArgs = isCompressed ? null : 4;

    if (isRemoveEditorArgs) {
        removeEditorArgs(tempJsonData.node);
    }

    return JSON.stringify(tempJsonData, null, compressedArgs);
}

/**
 * 过滤 编辑器参数
 * @param {*} node
 */
function removeEditorArgs(node) {
    for (const [key, val] of Object.entries(node)) {
        // 删除 字段
        if (removeFields.includes(key)) {
            Reflect.deleteProperty(node, key);
        } else if (Array.isArray(val)) {
            val.forEach(removeEditorArgs);
        } else if (typeof val === 'object') {
            removeEditorArgs(val);
        }
    }
}
