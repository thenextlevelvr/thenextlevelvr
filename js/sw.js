var github-path = '/thenextlevelvr';
var app-prefix = 'tnlvr';

var version = 'version_39';

var urls = [ 
	`${github-path}/`, 
	`${github-path}/index.html`, 
	`${github-path}/app.css`, 
	`${github-path}/js/app.js` ]
	
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

const urlsToCache = ["/", "./js/app.js", "app.css", "index.html"];
self.addEventListener("install", (event) => {
   let cacheUrls = async () => {
      const cache = await caches.open("pwa-assets");
      return cache.addAll(urlsToCache);
   };
   event.waitUntil(cacheUrls());
});


if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

/* self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(urlsToCache);
        return cachedResp;
      }
    })());
  } */
});