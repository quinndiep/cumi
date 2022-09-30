import TypographyComponent from '@/components/atoms/Typography';
import '@/assets/app.scss';

export default {
    title: 'Atoms/Typography',
    component: TypographyComponent,
    argTypes: {
        variant: [
            'base-h1-regular',
            'base-h1-medium',
            'base-h1-semibold',
            'base-h1-bold',
            'base-h2-regular',
            'base-h2-medium',
            'base-h2-semibold',
            'base-h2-bold',
            'base-h3-regular',
            'base-h3-medium',
            'base-h3-semibold',
            'base-h3-bold',
            'base-h4-regular',
            'base-h4-medium',
            'base-h4-semibold',
            'base-h4-bold',
            'base-h5-regular',
            'base-h5-medium',
            'base-h5-semibold',
            'base-h5-bold',
            'base-h6-regular',
            'base-h6-medium',
            'base-h6-semibold',
            'base-h6-bold',
            'base-p1-regular',
            'base-p1-medium',
            'base-p1-semibold',
            'base-p1-bold',
            'base-p2-regular',
            'base-p2-medium',
            'base-p2-semibold',
            'base-p2-bold',
            'base-p3-regular',
            'base-p3-medium',
            'base-p3-semibold',
            'base-p3-bold',
            'base-p4-regular',
            'base-p4-medium',
            'base-p4-semibold',
            'base-p4-bold',
            'base-p5-regular',
            'base-p5-medium',
            'base-p5-semibold',
            'base-p5-bold',
        ],
        color: [
            'base_white',
            'base_black',
            'gray_25',
            'gray_50',
            'gray_100',
            'gray_200',
            'gray_300',
            'gray_400',
            'gray_500',
            'gray_600',
            'gray_700',
            'gray_800',
            'gray_900',
            'primary_25',
            'primary_50',
            'primary_100',
            'primary_200',
            'primary_300',
            'primary_400',
            'primary_500',
            'primary_600',
            'primary_700',
            'primary_800',
            'primary_900',
            'error_25',
            'error_50',
            'error_100',
            'error_200',
            'error_300',
            'error_400',
            'error_500',
            'error_600',
            'error_700',
            'error_800',
            'error_900',
            'warning_25',
            'warning_50',
            'warning_100',
            'warning_200',
            'warning_300',
            'warning_400',
            'warning_500',
            'warning_600',
            'warning_700',
            'warning_800',
            'warning_900',
            'success_25',
            'success_50',
            'success_100',
            'success_200',
            'success_300',
            'success_400',
            'success_500',
            'success_600',
            'success_700',
            'success_800',
            'success_900',
            'gray_blue_25',
            'gray_blue_50',
            'gray_blue_100',
            'gray_blue_200',
            'gray_blue_300',
            'gray_blue_400',
            'gray_blue_500',
            'gray_blue_600',
            'gray_blue_700',
            'gray_blue_800',
            'gray_blue_900',
            'gray_cool_25',
            'gray_cool_50',
            'gray_cool_100',
            'gray_cool_200',
            'gray_cool_300',
            'gray_cool_400',
            'gray_cool_500',
            'gray_cool_600',
            'gray_cool_700',
            'gray_cool_800',
            'gray_cool_900',
            'gray_modern_25',
            'gray_modern_50',
            'gray_modern_100',
            'gray_modern_200',
            'gray_modern_300',
            'gray_modern_400',
            'gray_modern_500',
            'gray_modern_600',
            'gray_modern_700',
            'gray_modern_800',
            'gray_modern_900',
            'gray_neutral_25',
            'gray_neutral_50',
            'gray_neutral_100',
            'gray_neutral_200',
            'gray_neutral_300',
            'gray_neutral_400',
            'gray_neutral_500',
            'gray_neutral_600',
            'gray_neutral_700',
            'gray_neutral_800',
            'gray_neutral_900',
            'gray_iron_25',
            'gray_iron_50',
            'gray_iron_100',
            'gray_iron_200',
            'gray_iron_300',
            'gray_iron_400',
            'gray_iron_500',
            'gray_iron_600',
            'gray_iron_700',
            'gray_iron_800',
            'gray_iron_900',
            'gray_true_25',
            'gray_true_50',
            'gray_true_100',
            'gray_true_200',
            'gray_true_300',
            'gray_true_400',
            'gray_true_500',
            'gray_true_600',
            'gray_true_700',
            'gray_true_800',
            'gray_true_900',
            'gray_warm_25',
            'gray_warm_50',
            'gray_warm_100',
            'gray_warm_200',
            'gray_warm_300',
            'gray_warm_400',
            'gray_warm_500',
            'gray_warm_600',
            'gray_warm_700',
            'gray_warm_800',
            'gray_warm_900',
            'moss_25',
            'moss_50',
            'moss_100',
            'moss_200',
            'moss_300',
            'moss_400',
            'moss_500',
            'moss_600',
            'moss_700',
            'moss_800',
            'moss_900',
            'green_light_25',
            'green_light_50',
            'green_light_100',
            'green_light_200',
            'green_light_300',
            'green_light_400',
            'green_light_500',
            'green_light_600',
            'green_light_700',
            'green_light_800',
            'green_light_900',
            'green_25',
            'green_50',
            'green_100',
            'green_200',
            'green_300',
            'green_400',
            'green_500',
            'green_600',
            'green_700',
            'green_800',
            'green_900',
            'teal_25',
            'teal_50',
            'teal_100',
            'teal_200',
            'teal_300',
            'teal_400',
            'teal_500',
            'teal_600',
            'teal_700',
            'teal_800',
            'teal_900',
            'cyan_25',
            'cyan_50',
            'cyan_100',
            'cyan_200',
            'cyan_300',
            'cyan_400',
            'cyan_500',
            'cyan_600',
            'cyan_700',
            'cyan_800',
            'cyan_900',
            'blue_light_25',
            'blue_light_50',
            'blue_light_100',
            'blue_light_200',
            'blue_light_300',
            'blue_light_400',
            'blue_light_500',
            'blue_light_600',
            'blue_light_700',
            'blue_light_800',
            'blue_light_900',
            'blue_25',
            'blue_50',
            'blue_100',
            'blue_200',
            'blue_300',
            'blue_400',
            'blue_500',
            'blue_600',
            'blue_700',
            'blue_800',
            'blue_900',
            'blue_dark_25',
            'blue_dark_50',
            'blue_dark_100',
            'blue_dark_200',
            'blue_dark_300',
            'blue_dark_400',
            'blue_dark_500',
            'blue_dark_600',
            'blue_dark_700',
            'blue_dark_800',
            'blue_dark_900',
            'indigo_25',
            'indigo_50',
            'indigo_100',
            'indigo_200',
            'indigo_300',
            'indigo_400',
            'indigo_500',
            'indigo_600',
            'indigo_700',
            'indigo_800',
            'indigo_900',
            'violet_25',
            'violet_50',
            'violet_100',
            'violet_200',
            'violet_300',
            'violet_400',
            'violet_500',
            'violet_600',
            'violet_700',
            'violet_800',
            'violet_900',
            'purple_25',
            'purple_50',
            'purple_100',
            'purple_200',
            'purple_300',
            'purple_400',
            'purple_500',
            'purple_600',
            'purple_700',
            'purple_800',
            'purple_900',
            'fuchsia_25',
            'fuchsia_50',
            'fuchsia_100',
            'fuchsia_200',
            'fuchsia_300',
            'fuchsia_400',
            'fuchsia_500',
            'fuchsia_600',
            'fuchsia_700',
            'fuchsia_800',
            'fuchsia_900',
            'pink_25',
            'pink_50',
            'pink_100',
            'pink_200',
            'pink_300',
            'pink_400',
            'pink_500',
            'pink_600',
            'pink_700',
            'pink_800',
            'pink_900',
            'rose_25',
            'rose_50',
            'rose_100',
            'rose_200',
            'rose_300',
            'rose_400',
            'rose_500',
            'rose_600',
            'rose_700',
            'rose_800',
            'rose_900',
            'orange_dark_25',
            'orange_dark_50',
            'orange_dark_100',
            'orange_dark_200',
            'orange_dark_300',
            'orange_dark_400',
            'orange_dark_500',
            'orange_dark_600',
            'orange_dark_700',
            'orange_dark_800',
            'orange_dark_900',
            'orange_25',
            'orange_50',
            'orange_100',
            'orange_200',
            'orange_300',
            'orange_400',
            'orange_500',
            'orange_600',
            'orange_700',
            'orange_800',
            'orange_900',
            'yellow_25',
            'yellow_50',
            'yellow_100',
            'yellow_200',
            'yellow_300',
            'yellow_400',
            'yellow_500',
            'yellow_600',
            'yellow_700',
            'yellow_800',
            'yellow_900',
        ],
    },
};

const Template = args => ({
    components: { TypographyComponent },
    setup() {
        return { args };
    },
    template: '<TypographyComponent v-bind="args"/>',
});

const H1Template = args => ({
    components: { TypographyComponent },
    setup() {
        return { args };
    },
    template: '<TypographyComponent v-bind="args"/>',
});

export const Heading_1_Regular = Template.bind({});
Heading_1_Regular.args = {
    variant: 'base-h1-regular',
    text: 'fontSize: 72px - fontWeight: 400',
};

export const Heading_1_Medium = Template.bind({});
Heading_1_Medium.args = {
    variant: 'base-h1-medium',
    text: 'fontSize: 72px - fontWeight: 500',
};

export const Heading_1_Semibold = Template.bind({});
Heading_1_Semibold.args = {
    variant: 'base-h1-semibold',
    text: 'fontSize: 72px - fontWeight: 600',
};

export const Heading_1_Bold = Template.bind({});
Heading_1_Bold.args = {
    variant: 'base-h1-bold',
    text: 'fontSize: 72px - fontWeight: 700',
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
