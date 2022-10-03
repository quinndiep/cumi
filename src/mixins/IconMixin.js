import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/helper/constant.icon';
import { COLORS } from '@/helper/constant.color';

export default {
    props: {
        iconSize: {
            type: Number,
            default: ICON_SIZE.NORMAL,
        },
        iconColor: {
            type: String,
            default: COLORS.base_black,
        },
        iconStrokeWidth: {
            type: Number,
            default: ICON_STROKE_WIDTH.NORMAL,
        },
    },
};
