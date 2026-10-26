/* ============================================================
 *  Service Worker —— 让刷题应用可离线使用
 *  策略：预缓存全部静态资源（含题库），安装后即可断网使用
 * ============================================================ */
const VERSION = 'datacom-quiz-v1';

// 需要预缓存的资源（题库较多，全部缓存以保证离线可用）
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/style.css',
  './js/app.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  // 题库
  './data/hcia_a.js', './data/hcia_b.js', './data/hcia_c.js', './data/hcia_d.js',
  './data/hcia_e.js', './data/hcia_f.js', './data/hcia_g.js', './data/hcia_h.js',
  './data/hcia_i.js', './data/hcia_j.js',
  './data/hcip_821a.js', './data/hcip_821b.js', './data/hcip_831.js',
  './data/hcip_c.js', './data/hcip_d.js', './data/hcip_e.js', './data/hcip_f.js',
  './data/hcip_g.js', './data/hcip_h.js', './data/hcip_j.js', './data/hcip_k.js'
];

// 安装：预缓存全部资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(VERSION)
      .then(cache => {
        // 逐个添加，单个失败不影响整体（避免一个 404 导致整个安装失败）
        return Promise.all(ASSETS.map(url =>
          cache.add(url).catch(err => console.warn('[SW] 缓存失败:', url, err.message))
        ));
      })
      .then(() => self.skipWaiting())
  );
});

// 激活：清理旧版本缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== VERSION).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// 请求：缓存优先，网络回退；导航请求回退到 index.html
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // 只处理同源请求
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;

      return fetch(req).then(res => {
        // 成功获取的新资源也写入缓存
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => {
        // 离线且未缓存：导航请求回退到首页
        if (req.mode === 'navigate') return caches.match('./index.html');
        return new Response('离线且无缓存', {
          status: 503,
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      });
    })
  );
});

// 支持从页面触发更新
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});