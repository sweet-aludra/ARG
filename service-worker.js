const CACHE_NAME = 'ARG-delirium-v2';
const urlsToCache = [
  'index.html',
  'style.css',
  'imgs/logo_libelula.png',
  'imgs/lirio_do_vale-c.png',
  'imgs/daisy-a.png',
  'imgs/beladona-m.png',
  'imgs/camelia.png',
  'imgs/dalia-l.png',
  'imgs/marigold-e.png',
  'imgs/violet-ia.png',
  'imgs/pixel_p.png',
  'imgs/pixel_m.png',
  'imgs/icon_libelula.png'
];

// Instala e guarda no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Ativa e limpa caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
});

// Busca do cache primeiro
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
