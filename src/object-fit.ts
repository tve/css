import { DASH, FIT, OBJECT } from './constants/css-property-keyword';
import { MasterStyle } from '@master/style';

export class MasterObjectFitStyle extends MasterStyle {
    static override prefixes =  /^(object-fit:|object:(contain|cover|fill|scale-down))/;
    static override properties = [OBJECT + DASH + FIT];
}