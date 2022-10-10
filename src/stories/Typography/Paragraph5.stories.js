import TypographyComponent from '@/components/atoms/Typography';
import '@/assets/app.scss';
import { Template } from '@/stories/Typography/Typography.stories';

export default {
    title: 'Atoms/Typography/Paragraph 5',
    component: TypographyComponent,
};

export const Paragraph_5_Regular = Template.bind({});
Paragraph_5_Regular.args = {
    variant: 'base-p5-regular',
    text: 'Paragraph 5',
};

export const Paragraph_5_Medium = Template.bind({});
Paragraph_5_Medium.args = {
    variant: 'base-p5-medium',
    text: 'Paragraph 5',
};

export const Paragraph_5_Semibold = Template.bind({});
Paragraph_5_Semibold.args = {
    variant: 'base-p5-semibold',
    text: 'Paragraph 5',
};

export const Paragraph_5_Bold = Template.bind({});
Paragraph_5_Bold.args = {
    variant: 'base-p5-bold',
    text: 'Paragraph 5',
};
