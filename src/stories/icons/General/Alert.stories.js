import IconComponent from '@/components/atoms/Icon';
import { IconTemplate } from '@/stories/icons/Icon.stories';
import { ICON_NAME } from '@/helper/constant.icon';

export default {
    title: 'Atoms/Icons/General/Alert',
    component: IconComponent,
};

export const AlertCircleIcon = IconTemplate.bind({});

AlertCircleIcon.args = {
    iconName: ICON_NAME.ALERT_CIRCLE,
};

export const AlertHexagonIcon = IconTemplate.bind({});

AlertHexagonIcon.args = {
    iconName: ICON_NAME.ALERT_HEXAGON,
};

export const AlertSquareIcon = IconTemplate.bind({});

AlertSquareIcon.args = {
    iconName: ICON_NAME.ALERT_SQUARE,
};

export const AlertTriangleIcon = IconTemplate.bind({});

AlertTriangleIcon.args = {
    iconName: ICON_NAME.ALERT_TRIANGLE,
};
