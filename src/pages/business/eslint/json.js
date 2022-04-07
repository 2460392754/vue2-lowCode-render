import DataAndMethods from './dataAndMethods';
import PageRegister from './block/register';
import PageHome from './block/home';
import DialogRegisterSuccess from './dialog/registerSuccess';
import { pageContainer } from '@/data/components/pages/eslint';
import { mergeDeep } from '@/utils/nodeTools';

export default {
    ...DataAndMethods,
    node: [
        DialogRegisterSuccess,
        mergeDeep(pageContainer, {
            children: [PageHome, PageRegister]
        })
    ]
};
