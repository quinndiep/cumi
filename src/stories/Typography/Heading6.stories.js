import TypographyComponent from '@/components/atoms/Typography';
import '@/assets/app.scss';
import { Template } from '@/stories/Typography/Typography.stories';

export default {
    title: 'Atoms/Typography/Heading 6',
    component: TypographyComponent,
};

export const Heading_6_Regular = Template.bind({});
Heading_6_Regular.args = {
    variant: 'base-h6-regular',
    text: 'Heading 6',
};

export const Heading_6_Medium = Template.bind({});
Heading_6_Medium.args = {
    variant: 'base-h6-medium',
    text: 'Heading 6',
};

export const Heading_6_Semibold = Template.bind({});
Heading_6_Semibold.args = {
    variant: 'base-h6-semibold',
    text: 'Heading 6',
};

export const Heading_6_Bold = Template.bind({});
Heading_6_Bold.args = {
    variant: 'base-h6-bold',
    text: 'Heading 6',
};
