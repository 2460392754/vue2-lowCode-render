<template>
    <RegisterComponent :isEditor="false" :data="jsonData" />
</template>

<script>
import RegisterComponent from '@/core/registerComponent';

export default {
    components: {
        RegisterComponent
    },

    data() {
        return {
            jsonData: {}
        };
    },

    created() {
        const id = new URLSearchParams(location.search).get('id');

        if (id === null) {
            window.$toast.fail('本地缓存未寻找到该资源');
            return;
        }

        const key = 'jsonData_' + id;
        const jsonData = JSON.parse(localStorage.getItem(key));

        if (jsonData === null) {
            window.$toast.fail('本地缓存未寻找到该资源');
            return;
        }

        this.jsonData = jsonData;
    }
};
</script>
