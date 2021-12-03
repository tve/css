import { MasterStyle } from '@master/style';
import { RESIZE } from './constants/css-property-keyword';

export class MasterResizeStyle extends MasterStyle {
    static override prefixes = /^resize:/;
    static override properties = [RESIZE];
}