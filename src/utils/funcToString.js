export const funcToString = (func) => {
    let funcStr = func.toString();

    // 移除函数
    funcStr = funcStr.replace(/^\(\) => {/, '');
    funcStr = funcStr.replace(/^function \(\) {/, '');
    funcStr = funcStr.replace(/}$/, '');
    
    // 移除 字符串限制
    // '{{data.pageStep}}'.value++; => {{data.pageStep}}.value++;
    funcStr = funcStr.replace(/'{{/g, '{{');
    funcStr = funcStr.replace(/}}'/g, '}}');

    // 移除注释
    funcStr = funcStr.replace(/\n\s+/g, '');
    // 代码格式化，需要填写分号
    funcStr = funcStr.replace(/\/\/[\S( ?)]+/g, '');
    funcStr = funcStr.replace(/;/g, '; ');

    return funcStr;
};
