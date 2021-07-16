import Element from '../../Element.mjs'

export default class ImageContainer extends Element {
    constructor(src, args) {
        super(args)

        this.image = new Element({
            tag: 'img',
            attributes: { src: src },
        })

        this.append(this.image)
    }
}
