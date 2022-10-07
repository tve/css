import { MasterCSSRule } from '../rule';

export class TextStrokeWidth extends MasterCSSRule {
    static id = 'textStrokeWidth';
    static override matches = /^text-stroke(:((thin|medium|thick)(?!\|)|\.?\d((?!\|).)*$)|-width:.)/;
    override get props(): { [key: string]: any } {
        return {
            '-webkit-text-stroke-width': this
        };
    }
}