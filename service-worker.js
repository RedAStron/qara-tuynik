/* QARA TUYNIK PWA: offline shell, same-origin resources only. */
const VERSION = 'qt-pwa-v1-20261017';
const SHELL = ['/', '/index.html', '/offline.html', '/manifest.webmanifest', '/icon-192.png', '/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('qt-pwa-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then(response => {
      if (response.ok) { const copy = response.clone(); caches.open(VERSION).then(cache => cache.put(req, copy)); }
      return response;
    }).catch(async () => (await caches.match(req)) || (await caches.match('/offline.html'))));
    return;
  }
  if (!/\.(?:css|js|svg|png|webp|jpg|jpeg|gif|woff2?|webmanifest)$/i.test(url.pathname)) return;
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(response => {
    if (response.ok && response.type === 'basic') {
      const copy = response.clone(); caches.open(VERSION).then(cache => cache.put(req, copy));
    }
    return response;
  })));
});
