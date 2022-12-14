import type { Config } from '../config'
import MasterCSS from '../css'
import '../polyfills/css-escape'

export default function renderFromHTML(html: string, config?: Config): string {
    if (!html) return
    const css = new MasterCSS({ observe: false, config })
    const regexp = /\sclass="([^"]*)"/gm
    let results: string[]
    while ((results = regexp.exec(html))) {
        const classNames = results[1].replace(/\n/g, '').split(' ').filter(css => css)
        for (const eachClassName of classNames) {
            if (!(eachClassName in css.countOfClass)) {
                css.insert(eachClassName)
                css.countOfClass[eachClassName] = 1
            }
        }
    }
    return css.text
}