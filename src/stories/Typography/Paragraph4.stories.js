import TypographyComponent from '@/components/atoms/Typography';
import '@/assets/app.scss';
import { Template } from '@/stories/Typography/Typography.stories';

export default {
    title: 'Atoms/Typography/Paragraph 4',
    component: TypographyComponent,
};

export const Paragraph_4_Regular = Template.bind({});
Paragraph_4_Regular.args = {
    variant: 'base-p4-regular',
    text: 'Paragraph 4',
};

export const Paragraph_4_Medium = Template.bind({});
Paragraph_4_Medium.args = {
    variant: 'base-p4-medium',
    text: 'Paragraph 4',
};

export const Paragraph_4_Semibold = Template.bind({});
Paragraph_4_Semibold.args = {
    variant: 'base-p4-semibold',
    text: 'Paragraph 4',
};

export const Paragraph_4_Bold = Template.bind({});
Paragraph_4_Bold.args = {
    variant: 'base-p4-bold',
    text: 'Paragraph 4',
};
