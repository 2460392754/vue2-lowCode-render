import { merge } from './index';
import PageRegister from './block/register';
import DataAndMethods from './dataAndMethods';

// export default merge([PageRegister]);
export default {
    node: [PageRegister],
    ...DataAndMethods
};
