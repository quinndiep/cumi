<template>
    <TypographyComponent
        variant="base-h2-regular"
        text="Helloo"
    />
</template>

<script>
import TypographyComponent from '@/components/atoms/Typography';

export default {
    name: 'App',
    components: {
        TypographyComponent,
    },
};
</script>

<style lang="scss">
@import './assets/app.scss';
</style>
