<template>
    <div id="app">
        <router-view />
        <!-- <registerComponent :data="json" /> -->
    </div>
</template>

<script>
import registerComponent from './core/registerComponent';
import json from './assets/signUp.json';
import Demo from './components/demo.vue';

// console.log(Demo)

export default {
    name: 'App',

    components: {
        registerComponent,
        Demo
    },

    data() {
        return {
            json
        };
    }
};
</script>

<style></style>
