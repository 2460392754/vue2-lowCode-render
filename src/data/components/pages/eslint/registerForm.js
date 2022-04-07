import { BasicButton } from '@/data/components/basic';
import { mergeDeep } from '@/utils/nodeTools';

export default {
    __name__: '注册页-表单',
    type: 'PageEslintRegisterForm',
    attribute: {
        props: {
            form: '{{data.userInfo}}',
            onNextPage: '{{methods.onNextPage}}'
        }
    },
    children: [
        mergeDeep(BasicButton, {
            attribute: {
                slot: 'submitBtn'
            }
        })
    ]
};
