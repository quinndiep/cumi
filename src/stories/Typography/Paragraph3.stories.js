import TypographyComponent from '@/components/atoms/Typography';
import '@/assets/app.scss';
import { Template } from '@/stories/Typography/Typography.stories';

export default {
    title: 'Atoms/Typography/Paragraph 3',
    component: TypographyComponent,
};

export const Paragraph_3_Regular = Template.bind({});
Paragraph_3_Regular.args = {
    variant: 'base-p3-regular',
    text: 'Paragraph 3',
};

export const Paragraph_3_Medium = Template.bind({});
Paragraph_3_Medium.args = {
    variant: 'base-p3-medium',
    text: 'Paragraph 3',
};

export const Paragraph_3_Semibold = Template.bind({});
Paragraph_3_Semibold.args = {
    variant: 'base-p3-semibold',
    text: 'Paragraph 3',
};

export const Paragraph_3_Bold = Template.bind({});
Paragraph_3_Bold.args = {
    variant: 'base-p3-bold',
    text: 'Paragraph 3',
};
