import Element from './Element.mjs'

export default class View extends Element {
    constructor({ args }) {
        super(args)
    }

    _createStyleLink(styleLink) {
        const newStyleLink = document.createElement('link')
        newStyleLink.rel = 'stylesheet'
        newStyleLink.href = styleLink
        newStyleLink.setAttribute('data-style', '')
        document.head.append(newStyleLink)
    }

    importStyle(styleLink) {
        if (!styleLink) return

        const stylesToRemove = document.querySelectorAll('[data-style]')
        stylesToRemove.forEach((style) => style.remove())

        this._createStyleLink(styleLink)
    }

    importStyles(styleLinks) {
        if (!styleLinks.length) return

        const stylesToRemove = document.querySelectorAll('[data-style]')
        stylesToRemove.forEach((style) => style.remove())

        for (const styleLink of styleLinks) {
            this._createStyleLink(styleLink)
        }
    }

    /**
     * @description Replaces parent content with this content
     */
    async view(app) {
        app.clear()
        app.append(this)
    }
}
