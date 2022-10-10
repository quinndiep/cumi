import TypographyComponent from '@/components/atoms/Typography';
import '@/assets/app.scss';
import { Template } from '@/stories/Typography/Typography.stories';

export default {
    title: 'Atoms/Typography/Heading 5',
    component: TypographyComponent,
};

export const Heading_5_Regular = Template.bind({});
Heading_5_Regular.args = {
    variant: 'base-h5-regular',
    text: 'Heading 5',
};

export const Heading_5_Medium = Template.bind({});
Heading_5_Medium.args = {
    variant: 'base-h5-medium',
    text: 'Heading 5',
};

export const Heading_5_Semibold = Template.bind({});
Heading_5_Semibold.args = {
    variant: 'base-h5-semibold',
    text: 'Heading 5',
};

export const Heading_5_Bold = Template.bind({});
Heading_5_Bold.args = {
    variant: 'base-h5-bold',
    text: 'Heading 5',
};
