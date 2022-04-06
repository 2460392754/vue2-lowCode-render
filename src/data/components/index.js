const requireDemo = require.context('./demo', false, /\.js$/);
const demo = requireDemo.keys().map((comp) => requireDemo(comp).default);
// ===
const basic = Object.values(require('./basic'));
const pageEslint = Object.values(require('./pages/eslint'));

export default {
    basic,
    demo,
    pageEslint
};
