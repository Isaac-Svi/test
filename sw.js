self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('static').then((cache) => {
            return cache.addAll([
                './',
                './manifest.json',
                './images/logo192.png',
                './images/logo512.png',
                './src/css/style.css',
                './src/js/index.mjs',
            ])
        })
    )
})

self.addEventListener('fetch', (e) => {
    // console.log(`Intercepting fetch request for: ${e.request.url}`)

    e.respondWith(
        caches.match(e.request).then((response) => {
            // if response is defined, it means we don't have to
            // ask network for it.  otherwise, make request
            return response || fetch(e.request)
        })
    )
})
