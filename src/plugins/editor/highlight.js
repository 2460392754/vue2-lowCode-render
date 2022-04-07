import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/atom-one-dark.css';

Vue.use(VueHighlightJS, {
    languages: {
        json
    }
});
