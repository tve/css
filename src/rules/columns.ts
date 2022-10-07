import { MasterCSSRule } from '../rule';
import { COLUMNS } from '../constants/css-property-keyword';

export class Columns extends MasterCSSRule {
    static override matches = /^(columns|cols):./;
    static override key = COLUMNS;
    static override unit = '';
    override order = -1;
}