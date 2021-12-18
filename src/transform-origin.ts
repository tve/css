import { DASH, ORIGIN, TRANSFORM } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class TransformOriginStyle extends Style {
    static override prefixes =  /^transform:(top|bottom|right|left|center)/;
    static override key = TRANSFORM + DASH + ORIGIN;
}