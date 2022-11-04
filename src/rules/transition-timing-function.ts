import MasterCSSRule from '../rule'

export default class extends MasterCSSRule {
    static override id = 'TransitionTimingFunction'
    static override matches = /^~easing:./
}