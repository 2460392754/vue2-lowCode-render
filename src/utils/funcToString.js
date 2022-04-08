export const funcToString = (func) => {
    let funcStr = func.toString();

    // 移除 最外层函数
    funcStr = funcStr.replace(/^function\s?\(\)\s?{/, '');
    funcStr = funcStr.replace(/}$/, '');

    // 移除 字符串限制
    // '{{data.pageStep}}'.value++;   =>   {{data.pageStep}}.value++;
    funcStr = funcStr.replace(/['"]{{/g, '{{');
    funcStr = funcStr.replace(/}}['"]/g, '}}');

    // 移除换行
    funcStr = funcStr.replace(/\n\s+/g, '');

    // 双引号转单引号
    funcStr = funcStr.replace(/"/g, "'");

    // 移除注释
    funcStr = funcStr.replace(/\/\/[\S( ?)]+/g, '');

    // 代码格式化，需要填写分号或逗号(匹配逗号或分号)
    funcStr = funcStr.replace(/((?<!:\s?''),)|;/g, '; ');

    return funcStr;
};
