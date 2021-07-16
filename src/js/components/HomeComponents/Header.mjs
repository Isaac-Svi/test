import Element from '../../Element.mjs'

const Header = new Element({
    tag: 'header',
})

const Icon = new Element({
    tag: 'i',
    attributes: { class: 'fas fa-pencil-alt' },
})

const H1 = new Element({
    tag: 'h1',
    innerHTML: 'CODE ',
})

H1.append(Icon)

Header.append(H1)

export default Header
