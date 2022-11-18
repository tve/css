import Rule from '../rule'

export default class extends Rule {
    static override id = 'TextTransform' as const
    static override matches = '^t(?:ext)?:(?:uppercase|lowercase|capitalize|$values)(?!\\|)'
}