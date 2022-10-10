import IconComponent from '@/components/atoms/Icon';

export const IconTemplate = args => ({
    components: { IconComponent },
    setup() {
        return { args };
    },
    template: '<IconComponent v-bind="args"/>',
});
