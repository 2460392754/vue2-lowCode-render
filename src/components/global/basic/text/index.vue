<template>
    <div
        class="basicText"
        @click="$emit('click')"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
        <!-- {{ value }} -->
        {{ getValue }}
    </div>
</template>

<script>
import { handleParseJsonPathMatch } from '@/core/renderElSupportFunc';
import { isRef, watch } from '@vue/composition-api';

export default {
    name: 'basicText',

    props: {
        value: {
            type: String,
            required: true
        },
        backgroundImage: {
            type: String,
            default: ''
        }
    },

    computed: {
        getValue() {
            // 预览环境已自动开始数据解析
            if (this.$isH5) {
                return this.value;
            } else {
                try {
                    return ((jsonData) => {
                        let val = this.value;

                        handleParseJsonPathMatch(this.value, false).forEach(
                            (item) => {
                                const reg = new RegExp(item.beforePath, 'g');
                                let resVal = eval(eval(item.afterPath));

                                // 处理 ref 对象
                                if (isRef(resVal)) {
                                    resVal = resVal.value;
                                }

                                val = val.replace(reg, resVal);
                            }
                        );

                        return val;
                    })(this.store);
                } catch (e) {
                    // 不需要解析的内容
                    return this.value;
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.basicText {
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>
