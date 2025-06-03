// Pusty service worker – wymagany do działania PWA
self.addEventListener("install", event => {
    self.skipWaiting();
  });
  
  self.addEventListener("activate", event => {
    clients.claim();
  });
  