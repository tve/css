import { AUTO, BREAK, dash, HIDDEN, SPACE, WORD } from '../constants/css-property-keyword';
import { Style } from '../style';

export class Utility extends Style {
    static override semantics = {
        'center-content': {
            'justify-content': 'center',
            'align-items': 'center',
        },
        'sr-only': {
            'position': 'absolute',
            'width': '1px',
            'height': '1px',
            'padding': '0',
            'margin': '-1px',
            'overflow': 'hidden',
            'clip': 'rect(0,0,0,0)',
            'white-space': 'nowrap',
            'border-width': '0'
        },
        full: {
            width: '100%',
            height: '100%'
        },
        center: {
            left: 0,
            right: 0,
            'margin-left': AUTO,
            'margin-right': AUTO
        },
        middle: {
            top: 0,
            bottom: 0,
            'margin-top': AUTO,
            'margin-bottom': AUTO
        },
        'break-spaces': {
            'white-space': dash(BREAK, SPACE) + 's'
        },
        'break-word': {
            'overflow-wrap': dash(BREAK, WORD),
            overflow: HIDDEN
        }
    }
}