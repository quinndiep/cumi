import TypographyComponent from '@/components/atoms/Typography';
import '@/assets/app.scss';
import { Template } from '@/stories/Typography/Typography.stories';

export default {
    title: 'Atoms/Typography/Heading 2',
    component: TypographyComponent,
};

export const Heading_2_Regular = Template.bind({});
Heading_2_Regular.args = {
    variant: 'base-h2-regular',
    text: 'Heading 2',
};

export const Heading_2_Medium = Template.bind({});
Heading_2_Medium.args = {
    variant: 'base-h2-medium',
    text: 'Heading 2',
};

export const Heading_2_Semibold = Template.bind({});
Heading_2_Semibold.args = {
    variant: 'base-h2-semibold',
    text: 'Heading 2',
};

export const Heading_2_Bold = Template.bind({});
Heading_2_Bold.args = {
    variant: 'base-h2-bold',
    text: 'Heading 2',
};
