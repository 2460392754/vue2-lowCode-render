/**
 * 保存
 * @param {string} filename 文件名称
 * @param {string} content 内容
 */
export const fileSave = function (filename, content) {
    // 创建隐藏的可下载链接
    const el = document.createElement('a');
    const blob = new Blob([content]);

    el.download = filename;
    el.style.display = 'none';
    // 字符内容转变成blob地址
    el.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(el);
    el.click();
    // 然后移除
    document.body.removeChild(el);
};
