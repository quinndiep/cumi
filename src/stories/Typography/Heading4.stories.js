import TypographyComponent from '@/components/atoms/Typography';
import '@/assets/app.scss';
import { Template } from '@/stories/Typography/Typography.stories';

export default {
    title: 'Atoms/Typography/Heading 4',
    component: TypographyComponent,
};

export const Heading_4_Regular = Template.bind({});
Heading_4_Regular.args = {
    variant: 'base-h4-regular',
    text: 'Heading 4',
};

export const Heading_4_Medium = Template.bind({});
Heading_4_Medium.args = {
    variant: 'base-h4-medium',
    text: 'Heading 4',
};

export const Heading_4_Semibold = Template.bind({});
Heading_4_Semibold.args = {
    variant: 'base-h4-semibold',
    text: 'Heading 4',
};

export const Heading_4_Bold = Template.bind({});
Heading_4_Bold.args = {
    variant: 'base-h4-bold',
    text: 'Heading 4',
};
