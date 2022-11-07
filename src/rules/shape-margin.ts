import Rule from '../rule'

export default class extends Rule {
    static override id = 'ShapeMargin'
    static override matches = /^shape:([0-9]|(max|min|calc|clamp)\(.*\))((?!\|).)*$/
}