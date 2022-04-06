import DataAndMethods from './dataAndMethods';
import PageHome from './block/home';
import PageRegister from './block/register';
import DialogRegisterDialog from './dialog/registerSuccess'

export function merge(node) {
    return {
        vue: 2,
        editorVersion: 1,
        editorEdit: true,
        node,
        ...DataAndMethods
    };
}

export default [
    {
        title: '首页页',
        type: 'PageHome',
        icon: 'el-icon-files',
        data: merge(PageHome)
    },
    {
        title: '注册页',
        type: 'PageRegister',
        icon: 'el-icon-files',
        data: merge(PageRegister)
    },
    {
        title: '注册成功',
        type: 'DialogRegisterDialog',
        icon: 'el-icon-copy-document',
        data: merge(DialogRegisterDialog)
    },
];
