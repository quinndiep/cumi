import TypographyComponent from '@/components/atoms/Typography';
import '@/assets/app.scss';
import { Template } from '@/stories/Typography/Typography.stories';

export default {
    title: 'Atoms/Typography/Paragraph 1',
    component: TypographyComponent,
};

export const Paragraph_1_Regular = Template.bind({});
Paragraph_1_Regular.args = {
    variant: 'base-p1-regular',
    text: 'Paragraph 1',
};

export const Paragraph_1_Medium = Template.bind({});
Paragraph_1_Medium.args = {
    variant: 'base-p1-medium',
    text: 'Paragraph 1',
};

export const Paragraph_1_Semibold = Template.bind({});
Paragraph_1_Semibold.args = {
    variant: 'base-p1-semibold',
    text: 'Paragraph 1',
};

export const Paragraph_1_Bold = Template.bind({});
Paragraph_1_Bold.args = {
    variant: 'base-p1-bold',
    text: 'Paragraph 1',
};
