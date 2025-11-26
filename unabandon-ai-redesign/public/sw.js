// Minimal service worker to prevent 404 errors
// This is a placeholder - not implementing PWA features yet
self.addEventListener('install', function(event) {
  // Skip waiting
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  // Immediately claim clients
  event.waitUntil(self.clients.claim());
});