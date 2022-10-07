import { AREA, dash, GRID } from '../constants/css-property-keyword';
import { MasterCSSRule } from '../rule';

export class GridArea extends MasterCSSRule {
    static override key = dash(GRID, AREA);
    static override unit = '';
    override order = -1;
}