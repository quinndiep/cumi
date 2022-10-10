<template>
    <Component
        :is="name"
        :size="iconSize"
        :color="iconColor"
        :stroke-width="iconStrokeWidth"
    />
</template>
<script>
import { defineAsyncComponent } from 'vue';
import IconMixin from '@/mixins/IconMixin';

const requireContext = require.context(
    `@/components/atoms/icons`, //path to components folder which are resolved automatically
    true,
    /\.vue$/i,
    'sync'
);

let componentNames = requireContext
    .keys()
    .map(file => file.replace(/(^[^_]*.\/)|(\.vue$)/g, ''));
let componentPaths = requireContext.keys().map(file => file.replace('.', ''));

let components = {};

componentNames.forEach((component, index) => {
    components[component] = defineAsyncComponent(() =>
        import('@/components/atoms/icons' + componentPaths[index])
    );
});

export default {
    name: 'IconComponent',
    components,
    props: {
        iconName: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            name: this.iconName,
        };
    },
    mixins: [IconMixin],
};
</script>
