const CACHE_NAME = 'nahwu-taqrib-v1';
const urlsToCache = [
  './',
  './index.html',
  './logo.png',
  './bab-1.js',
  './bab-2.js',
  './bab-3.js',
  './bab-4.js',
  './bab-5.js',
  './bab-6.js',
  './bab-7.js',
  './bab-8.js',
  './bab-9.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});