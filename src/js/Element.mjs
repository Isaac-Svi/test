export default class Element {
    static e_id = 0

    // keeps track of all elements in app
    static elements = {}

    /**
     * @description removes element from elements array by id
     * @param {Number} id
     */
    static pop(id) {
        const el = Element.elements[id]
        el.$el.remove()

        for (const child of el.children) {
            Element.pop(child.e_id)
        }

        delete Element.elements[id]
    }

    /**
     * @description Creates and adds element to App and DOM
     * @param {Object} args
     */
    constructor(args = {}) {
        const {
            children = [],
            tag = 'div',
            innerHTML = '',
            attributes = {},
            props = {},
        } = args

        this.e_id = Element.e_id++
        this.tag = tag
        this.innerHTML = innerHTML
        this.attributes = attributes
        this.props = props
        this.children = children

        // setup actual dom element
        this._setupEl()
    }

    /**
     * @description Takes and sets parent id for element
     * @param {Element} parentId
     */
    _setParent(parentId) {
        this.parentId = parentId
    }

    /**
     * @description Creates dom element for Element
     */
    _setupEl() {
        Element.elements[this.e_id] = this

        this.$el = document.createElement(this.tag)

        for (const i in this.attributes) {
            this.$el.setAttribute(i, this.attributes[i])
        }

        this.appendMany(this.children)
        this.addInnerHTML('beforeend', this.innerHTML)
    }

    /**
     * @description Receives props from parent
     * @param {Object} props
     */
    _receiveProps(props) {
        this.props = props
    }

    /**
     * @description Function used to add innerHTML to $el
     * @param {String} innerHTML
     */
    addInnerHTML(location, innerHTML) {
        this.$el.insertAdjacentHTML(location, innerHTML)
    }

    /**
     * @description Adds element to beginning children and element.$el to dom.
     * Also adds props
     * @param {Element} element
     * @param {Array} props
     */
    prepend(element, props = {}) {
        element._receiveProps(props)
        element._setParent(this.e_id)
        this.children.unshift(element)

        this.$el.prepend(element.$el)
    }

    /**
     * @description Adds element to end of children and element.$el to dom.
     * Also adds props
     * @param {Element} element
     * @param {Array} props
     */
    append(element, props = {}) {
        element._receiveProps(props)
        element._setParent(this.e_id)
        this.children.push(element)

        this.$el.append(element.$el)
    }

    /**
     * @description Adds array of elements to end of this
     * @param {Array} elements
     */
    appendMany(elements) {
        for (const element of elements) {
            this.append(element)
        }
    }

    /**
     * @description Adds array of elements to beginning of this
     * @param {Array} elements
     */
    prependMany(elements) {
        for (const element of elements) {
            this.prepend(element)
        }
    }

    /**
     * @description Removes this element from the dom and from parent
     */
    remove() {
        Element.pop(this.e_id)
    }

    /**
     * @description Removes specified child from dom and children array
     * @param {Element} child
     */
    removeChild(child) {
        const { $el, e_id } = child

        Element.pop(e_id)
        const i = this.children.findIndex((x) => x.$el === $el)
        this.children[i].$el.remove()
        this.children.splice(i, 1)
    }

    /**
     * @description Wrapper around addEventListener for dom
     * @param {String} event
     * @param {Function} cb
     */
    addEventListener(event, cb) {
        this.$el.addEventListener(event, cb)
    }

    /**
     * @description Wrapper around removeEventListener for dom
     * @param {String} event
     * @param {Function} cb
     */
    removeEventListener(event, cb) {
        this.$el.removeEventListener(event, cb)
    }
}
