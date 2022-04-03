const basicComp = require.context('./global', true, /\.vue$/);

function getCompAll(requireComp) {
    return requireComp.keys().map((comp) => requireComp(comp).default);
}

export const getCompNameAll = getCompAll(basicComp).map((comp) => comp.name);

export default {
    /**
     * 注册 ./global 文件下的所有组件
     * @param {*} vue
     */
    install(vue) {
        const compList = [...getCompAll(basicComp)];

        compList.forEach((comp) => {
            vue.component(comp.name, comp);
        });
    }
};
