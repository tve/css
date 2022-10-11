import { REM } from '../constants/css-property-keyword';
import { MasterCSSRule } from '../rule';

export class TextSize extends MasterCSSRule {
    static override matches = /^t(ext)?:([0-9]|(max|min|calc|clamp)\(.*\))((?!\|).)*$/;
    override get(declaration): { [key: string]: any } {
        return {
            'font-size': declaration,
            'line-height': {
                ...declaration,
                value: declaration.unit === REM
                    ? declaration.value + .375 + declaration.unit
                    : 'calc(' + declaration.value + declaration.unit + ' + .375rem)',
                unit: ''
            }
        };
    }
}