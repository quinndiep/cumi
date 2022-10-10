import TypographyComponent from '@/components/atoms/Typography';
import '@/assets/app.scss';
import { Template } from '@/stories/Typography/Typography.stories';

export default {
    title: 'Atoms/Typography/Heading 1',
    component: TypographyComponent,
};

export const Heading_1_Regular = Template.bind({});
Heading_1_Regular.args = {
    variant: 'base-h1-regular',
    text: 'fontSize: 72px - fontWeight: 400',
};

export const Heading_1_Medium = Template.bind({});
Heading_1_Medium.args = {
    variant: 'base-h1-medium',
    text: 'fontSize: 72px - fontWeight: 500',
};

export const Heading_1_Semibold = Template.bind({});
Heading_1_Semibold.args = {
    variant: 'base-h1-semibold',
    text: 'fontSize: 72px - fontWeight: 600',
};

export const Heading_1_Bold = Template.bind({});
Heading_1_Bold.args = {
    variant: 'base-h1-bold',
    text: 'fontSize: 72px - fontWeight: 700',
};
