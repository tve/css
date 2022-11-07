import Rule from '../rule'

export default class extends Rule {
    static override id = 'ZIndex'
    static override matches = /^z:./
    static override unit = ''
}