import IconComponent from '@/components/atoms/Icon';
import { IconTemplate } from '@/stories/icons/Icon.stories';
import { ICON_NAME } from '@/helper/constant.icon';

export default {
    title: 'Atoms/Icons/General/Bell',
    component: IconComponent,
};

export const BellPlusIcon = IconTemplate.bind({});

BellPlusIcon.args = {
    iconName: ICON_NAME.BELL_PLUS,
    size: '',
    color: '',
    strokeWidth: '',
};
