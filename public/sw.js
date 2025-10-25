// Basic Service Worker for PWA functionality
const CACHE_NAME = "ikeys-v2"; // Increment version to invalidate old cache
const CACHE_TIMESTAMP = new Date().getTime(); // Add timestamp for cache busting
const urlsToCache = [
  "/",
  "/piano.svg",
  "/manifest.json",
  `/?v=${CACHE_TIMESTAMP}`, // Add timestamped version of root
];

// Install event - cache resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
  // Immediately claim clients to ensure new service worker takes over
  self.skipWaiting();
});

// Fetch event - serve from cache when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Always try network first, fall back to cache
      return fetch(event.request).catch(() => response);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
