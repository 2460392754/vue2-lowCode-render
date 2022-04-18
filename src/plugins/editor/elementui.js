import Vue from 'vue';
import {
    Button,
    Select,
    Tree,
    Tooltip,
    Empty,
    Aside,
    Drawer,
    Container,
    Main,
    Header,
    Table,
    TableColumn,
    Icon,
    Input,
    InputNumber,
    Form,
    FormItem,
    Dialog,
    Tabs,
    TabPane,
    ColorPicker,
    Upload,
    Option,
    Switch,
    Popconfirm,
    Message,
    MessageBox
} from 'element-ui';

const compList = [
    Button,
    Select,
    Tree,
    Tooltip,
    Empty,
    Aside,
    Drawer,
    Container,
    Main,
    Header,
    Table,
    TableColumn,
    Icon,
    Input,
    InputNumber,
    Form,
    FormItem,
    Dialog,
    Tabs,
    TabPane,
    ColorPicker,
    Upload,
    Option,
    Switch,
    Popconfirm
];

compList.forEach((comp) => {
    Vue.use(comp);
});

Vue.prototype.$confirm = MessageBox.confirm;
window.$message = Message;
