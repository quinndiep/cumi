import TypographyComponent from '@/components/atoms/Typography';
import '@/assets/app.scss';

export const Template = args => ({
    components: { TypographyComponent },
    setup() {
        return { args };
    },
    template: '<TypographyComponent v-bind="args"/>',
});
