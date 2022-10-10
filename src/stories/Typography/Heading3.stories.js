import TypographyComponent from '@/components/atoms/Typography';
import '@/assets/app.scss';
import { Template } from '@/stories/Typography/Typography.stories';

export default {
    title: 'Atoms/Typography/Heading 3',
    component: TypographyComponent,
};

export const Heading_3_Regular = Template.bind({});
Heading_3_Regular.args = {
    variant: 'base-h3-regular',
    text: 'Heading 3',
};

export const Heading_3_Medium = Template.bind({});
Heading_3_Medium.args = {
    variant: 'base-h3-medium',
    text: 'Heading 3',
};

export const Heading_3_Semibold = Template.bind({});
Heading_3_Semibold.args = {
    variant: 'base-h3-semibold',
    text: 'Heading 3',
};

export const Heading_3_Bold = Template.bind({});
Heading_3_Bold.args = {
    variant: 'base-h3-bold',
    text: 'Heading 3',
};
