<template>
    <van-cell-group>
        <van-cell title="账号" :value="info.username" />
        <van-cell title="密码" :value="info.password" />
    </van-cell-group>
</template>

<script>
export default {
    name: 'myUserInfo',

    props: {
        info: {
            type: [Object, String],
            default: () => ({
                username: '这是账号',
                password: '这是密码'
            })
        }
    }
};
</script>
