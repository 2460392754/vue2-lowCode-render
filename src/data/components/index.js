const requireBasic = require.context('./basic', false, /\.js$/);
const basic = requireBasic.keys().map((comp) => requireBasic(comp).default);
// ===
const requireCustom = require.context('./custom', false, /\.js$/);
const custom = requireCustom.keys().map((comp) => requireCustom(comp).default);

export default {
    basic,
    custom
};
