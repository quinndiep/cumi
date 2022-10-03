import IconComponent from '@/components/atoms/Icon';
import { ICON_NAME } from '@/helper/constant.icon';

export default {
    title: 'Atoms/Icons/General',
    component: IconComponent,
};

const GeneralIconTemplate = args => ({
    components: { IconComponent },
    setup() {
        return { args };
    },
    template: '<IconComponent v-bind="args"/>',
});
export const BellPlusIcon = GeneralIconTemplate.bind({});

BellPlusIcon.args = {
    iconName: ICON_NAME.BELL_PLUS,
};
