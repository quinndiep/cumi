import TypographyComponent from '@/components/atoms/Typography';
import '@/assets/app.scss';
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Typography',
    component: TypographyComponent,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        variant: ['base-h1-regular'],
    },
};

const Template = args => ({
    components: { TypographyComponent },
    setup() {
        return { args };
    },
    template: '<TypographyComponent v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {
    variant: 'base-h1-regular',
    text: 'Hello',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
