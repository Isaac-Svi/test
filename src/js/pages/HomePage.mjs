import View from '../View.mjs'
import Header from '../components/HomeComponents/Header.mjs'
import Main from '../components/HomeComponents/Main.mjs'
import Footer from '../components/HomeComponents/Footer.mjs'

export default class HomePage extends View {
    constructor(args) {
        super(args)
        this.importStyles(['./src/css/style.css'])

        this.setup()
    }

    setup() {
        this.appendMany([Header, Main, Footer])
    }
}
