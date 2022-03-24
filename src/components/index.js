const requireComp = require.context('./global', false, /\.vue$/);
const getCompAll = requireComp.keys().map((comp) => requireComp(comp).default);

export const getCompNameAll = getCompAll.map((comp) => comp.name);

export default {
    /**
     * 注册 ./global 文件下的所有组件
     * @param {*} vue 
     */
    install(vue) {
        getCompAll.forEach((comp) => {
            vue.component(comp.name, comp);
        });
    }
};
