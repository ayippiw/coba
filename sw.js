const CACHE_NAME = 'kelas-si-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',  // Jika terpisah
  '/mobile.css',
  '/manifest.json',
  // Tambah gambar atau file lain jika perlu
  'https://via.placeholder.com/120x120/00d4ff/000?text=Ahmad',
  // ... tambah semua URL gambar placeholder atau asli
];

// Install service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch dari cache jika offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});