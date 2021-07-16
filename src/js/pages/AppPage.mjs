import View from '../View.mjs'

export default class AppPage extends View {
    constructor(args) {
        super(args)

        this.importStyle('./src/css/app.css')

        this.setup()
    }

    setup() {
        // this.appendMany([Header, Main, Footer])
        this.addInnerHTML(
            'beforeend',
            `
        <div class="nav">

        <div class="ul-con">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Lorem</a></li>
                <li><a href="#">Lorem</a></li>
            </ul>
        </div>

        <div><h1>CODE <i class="fas fa-pencil-alt"></i></h1></div>

    </div>
    <div class="container">
       
        <div class="left">
            <iframe src="" frameborder="0"></iframe>
        </div>

        <div class="right">
            <div class="h-top"><h4><i class="fas fa-pencil-ruler"></i> HTML</h4></div>
            <div class="html" contenteditable="true"></div>

            <div class="c-top"><h4><i class="fas fa-pencil-ruler"></i> CSS</h4></div>
            <div class="css" contenteditable="true"></div>

            <div class="j-top"><h4><i class="fas fa-pencil-ruler"></i> JS</h4></div>
            <div class="js" contenteditable="true"></div>
        <div class="for-js"></div>

        </div>

    </div>
        `
        )
    }
}
