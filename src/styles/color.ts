import { COLOR, CURRENT_COLOR } from '../constants/css-property-keyword';
import { Style } from '../style';

export class Color extends Style {
    static override matches = /^(?:fg|foreground):current/;
    static override colorStarts = '(?:color|fg|foreground):';
    static override colorful = true;
    static override key = COLOR;
    static override unit = '';
    static override values = {
        current: CURRENT_COLOR
    }
}