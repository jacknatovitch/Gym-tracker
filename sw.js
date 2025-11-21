const CACHE_NAME = 'gym-tracker-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://img.icons8.com/ios-filled/192/ffffff/dumbbell.png',
  'https://img.icons8.com/ios-filled/512/ffffff/dumbbell.png'
];

// Install event: Cache files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch event: Serve from cache if available, otherwise network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
