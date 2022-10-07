import { MasterCSSRule } from '../rule';
import { BORDER, dash, IMAGE, SLICE } from '../constants/css-property-keyword';

export class BorderImageSlice extends MasterCSSRule {
    static override key = dash(BORDER, IMAGE, SLICE);
    static override unit = '';
}