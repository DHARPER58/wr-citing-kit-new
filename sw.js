// WR Citing Kit – offline service worker.
// After you upload new files to GitHub, change VERSION (e.g. 1.0.1) so devices pick up the update
// the next time they open the app with an internet connection.
const VERSION = "1.0.0";
const CACHE = "wr-citing-kit-" + VERSION;
const FILES = [
  "./",
  "index.html",
  "filler.html",
  "Citing_Commissioner_Match_Workbook.xlsx",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-48.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: "reload" }))))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("wr-citing-kit-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "skipWaiting") self.skipWaiting();
  if (event.data === "version" && event.source) event.source.postMessage({ version: VERSION });
});

// Cache first (works with no connection at all); the network is only used for anything not cached.
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(req).catch(() =>
        req.mode === "navigate" ? caches.match("index.html") : Response.error()
      );
    })
  );
});
