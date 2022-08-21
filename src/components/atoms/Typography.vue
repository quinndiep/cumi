<template>
    <p style="{mappedVariant(variant)}">{{ text }}</p>
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
    computed: {
        mappedVariant(variant) {
            return Object.values(TypographyTypes).find(item => {
                if (item === variant) {
                    return `@extend %${variant}`;
                }
                return `@extend %${TypographyTypes.HEADING_1_REGULAR}`;
            });
        },
    },
};
</script>

<style scoped lang="scss"></style>
