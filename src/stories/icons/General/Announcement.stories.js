import IconComponent from '@/components/atoms/Icon';
import { ICON_NAME } from '@/helper/constant.icon';
import { IconTemplate } from '@/stories/icons/Icon.stories';

export default {
    title: 'Atoms/Icons/General/Announcement',
    component: IconComponent,
};

export const Announcement01 = IconTemplate.bind({});

Announcement01.args = {
    iconName: ICON_NAME.ANNOUNCEMENT_ICON_01,
    size: '',
    color: '',
    strokeWidth: '',
};

export const Announcement02 = IconTemplate.bind({});

Announcement02.args = {
    iconName: ICON_NAME.ANNOUNCEMENT_ICON_02,
    size: '',
    color: '',
    strokeWidth: '',
};

export const Announcement03 = IconTemplate.bind({});

Announcement03.args = {
    iconName: ICON_NAME.ANNOUNCEMENT_ICON_03,
    size: '',
    color: '',
    strokeWidth: '',
};
