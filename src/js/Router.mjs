import AppPage from './pages/AppPage.mjs'
import HomePage from './pages/HomePage.mjs'
import TestPage from './pages/TestPage.mjs'

const pathToRegex = (path) =>
    new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$')

const getParams = (match) => {
    const values = match.result.slice(1)
    const keys = [...match.route.path.matchAll(/:(\w+)/g)].map((result) => result[1])

    return Object.fromEntries(
        keys.map((key, i) => {
            return [key, values[i]]
        })
    )
}

class Router {
    static getPath(href) {
        let path = href.split('/')
        return `/${path[path.length - 1]}`
    }

    routes = [
        { path: '/', component: HomePage },
        { path: '/test', component: TestPage },
        { path: '/app', component: AppPage },
    ]

    constructor(app) {
        this.app = app

        this.navigateTo()
    }

    navigateTo(url) {
        history.pushState(null, null, url)

        this.useRouter()
    }

    async useRouter() {
        // Test each route for potential match
        const potentialMatches = this.routes.map((route) => {
            return {
                route,
                result: location.pathname.match(pathToRegex(route.path)),
            }
        })

        let match = potentialMatches.find(
            (potentialMatch) => potentialMatch.result !== null
        )

        if (!match) {
            match = {
                route: this.routes[0],
                result: [location.pathname],
            }
        }

        const page = new match.route.component({ params: getParams(match) })

        await page.view(this.app)
    }
}

export default Router
