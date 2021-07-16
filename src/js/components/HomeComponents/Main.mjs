import Element from '../../Element.mjs'
import ImageContainer from '../HomeComponents/ImageContainer.mjs'

const Main = new Element({ tag: 'main' })

const MainWrap = new Element({
    attributes: { class: 'main-wrap' },
})

const Checkbox = new Element({
    tag: 'input',
    attributes: {
        id: 'slide-sidebar',
        type: 'checkbox',
        role: 'button',
    },
})

const Label = new Element({
    tag: 'label',
    attributes: { for: 'slide-sidebar' },
    innerHTML: ' <span>close</span>',
})

MainWrap.appendMany([Checkbox, Label])

const Sidebar = `
<div class="sidebar">
    <a href="/about" data-link>Lorem</a><br />
    <hr />
    <a href="/test" data-link>Lorem</a><br />
    <hr />
    <a href="/app" data-link>Lorem</a><br />
    <hr />
    <a href="/dfgh" data-link>Editor</a>
</div>
`

MainWrap.addInnerHTML('beforeend', Sidebar)

const Container = new Element({
    attributes: { class: 'container' },
    innerHTML: '<div class="h"><h3>Your work</h3></div>',
})

// This is going to be dynamic
for (let i = 0; i < 6; i++) {
    Container.append(
        new ImageContainer('./images/test.webp', {
            attributes: { class: 'f' },
        })
    )
}

MainWrap.append(Container)

Main.append(MainWrap)

export default Main
