import Rule from '../rule'

export default class extends Rule {
    static override id = 'TransitionProperty'
    static override matches = /^~property:./
}