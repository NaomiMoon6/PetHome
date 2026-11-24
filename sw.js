const CACHE = "pethome-v1";
const ASSETS = [
  "./", "index.html", "adotar.html", "abrigos.html", "cadastro.html",
  "login.html", "dashboard.html", "pets.html", "contatos.html",
  "styles/main.css"
  // adicione aqui as fontes, ícones e imagens (assets/...)
];

self.addEventListener("install", e =>
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)))
);
self.addEventListener("activate", e =>
  e.waitUntil(caches.keys().then(ks =>
    Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))))
);
self.addEventListener("fetch", e =>
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
);