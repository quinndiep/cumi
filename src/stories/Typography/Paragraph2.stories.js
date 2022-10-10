import TypographyComponent from '@/components/atoms/Typography';
import '@/assets/app.scss';
import { Template } from '@/stories/Typography/Typography.stories';

export default {
    title: 'Atoms/Typography/Paragraph 2',
    component: TypographyComponent,
};

export const Paragraph_2_Regular = Template.bind({});
Paragraph_2_Regular.args = {
    variant: 'base-p2-regular',
    text: 'Paragraph 2',
};

export const Paragraph_2_Medium = Template.bind({});
Paragraph_2_Medium.args = {
    variant: 'base-p2-medium',
    text: 'Paragraph 2',
};

export const Paragraph_2_Semibold = Template.bind({});
Paragraph_2_Semibold.args = {
    variant: 'base-p2-semibold',
    text: 'Paragraph 2',
};

export const Paragraph_2_Bold = Template.bind({});
Paragraph_2_Bold.args = {
    variant: 'base-p2-bold',
    text: 'Paragraph 2',
};
