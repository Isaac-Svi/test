import Element from './Element.mjs'

export default class App extends Element {
    constructor({ entryPt, ...args }) {
        super(args)

        this.$el = entryPt
    }

    clear() {
        this.$el.innerHTML = ''
        this.children = []
    }
}
