import App from './App.mjs'
import Router from './Router.mjs'

const app = new App({
    entryPt: document.getElementById('app'),
})

const router = new Router(app)

window.addEventListener('popstate', () => router.useRouter())

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        if ('link' in e.target.dataset) {
            e.preventDefault()

            router.navigateTo(e.target.href)
        }
    })

    router.useRouter()
})

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js')
        .then((registration) => {
            console.log('SW Registered!')
            console.log(registration)
        })
        .catch((error) => {
            console.log('SW Registtration failed!')
            console.log(error)
        })
}
