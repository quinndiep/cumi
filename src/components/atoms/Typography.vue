<template>
    <p
        :class="mappedVariant"
        :style="styleObject"
    >
        {{ text }}
    </p>
</template>

<script>
import { TypographyTypes } from '@/helper/constant.typography';
import { COLORS } from '@/helper/constant.color';

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
        color: {
            type: String,
            default: 'gray_900',
        },
    },
    computed: {
        mappedVariant() {
            return Object.values(TypographyTypes).find(item => {
                if (item === this.variant) {
                    return this.variant;
                }
            });
        },
        styleObject() {
            return { color: COLORS[this.color] };
        },
    },
};
</script>

<style scoped lang="scss"></style>
