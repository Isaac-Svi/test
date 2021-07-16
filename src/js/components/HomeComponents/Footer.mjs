import Element from '../../Element.mjs'

const Footer = new Element({
    tag: 'footer',
    innerHTML: `
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    <a href="/support">Support</a>
    `,
})

export default Footer
