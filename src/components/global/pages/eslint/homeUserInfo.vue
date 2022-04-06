<script>
export default {
    name: 'PageEslintHomeUserInfo',

    render() {
        return (
            <div class="PageEslintHomeUserInfo">
                {this.$slots.bg}
                <div class="container">
                    <div class="header">
                        <div class="shareBtns">
                            {this.$slots.shareLink}
                            {this.$slots.sharePoster}
                        </div>
                    </div>
                    <div class="interestedPeopleCount">
                        {this.$slots.interestedPeopleCount}
                    </div>
                </div>
            </div>
        );
    },

    mounted() {
        if (this.$isEditor) return;

        const toastTask = window.$toast.loading({
            duration: 0,
            forbidClick: true,
            message: '倒计时 2 秒'
        });

        setTimeout(() => {
            this.store.data.interestedPeopleCount.value = 100000;
            toastTask.clear();
            window.$toast.success('加载成功');
        }, 1000 * 2);
    }
};
</script>

<style lang="scss">
.PageEslintHomeUserInfo {
    position: relative;

    .container {
        background: rgba(255, 255, 255, 0.2);
        position: absolute;
        z-index: 2;
        top: 20px;
        left: 20px;
        padding: 10px;
        width: calc(100% - 60px);
        height: calc(100% - 60px);
    }

    .shareBtns {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .shareLinkBtn + .sharePosterBtn {
            margin-top: 4px;
        }

        .shareLinkBtn,
        .sharePosterBtn {
            border-radius: 20px;
            padding: 3px 8px;
        }
    }
}
</style>
