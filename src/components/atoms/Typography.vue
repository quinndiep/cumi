<template>
    <p :class="mappedVariant">{{ text }}</p>
</template>

<script>
import { TypographyTypes } from '@/helper/constant.typography';

export default {
    name: 'TypographyComponent',
    props: {
        text: {
            type: String,
            default: '',
        },
        variant: {
            type: String,
            default: 'base-h1-regular',
        },
    },
    data() {},
    mounted() {},
    computed: {
        mappedVariant() {
            return Object.values(TypographyTypes).find(item => {
                if (item === this.variant) {
                    return this.variant;
                }
            });
        },
    },
};
</script>

<style scoped lang="scss"></style>
