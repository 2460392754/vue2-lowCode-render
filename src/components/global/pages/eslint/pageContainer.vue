<script>
export default {
    name: 'PageEslintPageContainer',

    props: {
        pageStep: {
            type: [Number, String],
            required: true
        }
    },

    watch: {
        pageStep(val) {
            console.log('pageStep', val);
        }
    },

    render(h) {
        return h(
            'div',
            {
                class: 'pageEslintPageContainer'
            },
            [this.$slots.default[this.pageStep]]
        );
    }
};
</script>

<style lang="scss">
.pageEslintPageContainer {
}
</style>
