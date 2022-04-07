<template>
    <div id="app" class="editor">
        <!-- <Demo /> -->
        <Page />
    </div>
</template>

<script>
import Page from './pages/editor.vue';
import Demo from '@/components/demo.vue';

console.log(Demo);

export default {
    name: 'App',

    components: {
        Page
        // Demo
    }
};
</script>
