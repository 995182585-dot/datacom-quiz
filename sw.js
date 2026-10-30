/* ============================================================
 *  Service Worker 鈥斺€?璁╁埛棰樺簲鐢ㄥ彲绂荤嚎浣跨敤
 *  绛栫暐锛氶缂撳瓨鍏ㄩ儴闈欐€佽祫婧愶紙鍚搴擄級锛屽畨瑁呭悗鍗冲彲鏂綉浣跨敤
 * ============================================================ */
const VERSION = 'datacom-quiz-v4';

// 闇€瑕侀缂撳瓨鐨勮祫婧愶紙棰樺簱杈冨锛屽叏閮ㄧ紦瀛樹互淇濊瘉绂荤嚎鍙敤锛?const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/style.css',
  './js/app.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  // 棰樺簱
  './data/hcia_a.js', './data/hcia_b.js', './data/hcia_c.js', './data/hcia_d.js',
  './data/hcia_e.js', './data/hcia_f.js', './data/hcia_g.js', './data/hcia_h.js',
  './data/hcia_i.js', './data/hcia_j.js',
  './data/hcip_821a.js', './data/hcip_821b.js', './data/hcip_831.js',
  './data/hcip_c.js', './data/hcip_d.js', './data/hcip_e.js', './data/hcip_f.js',
  './data/hcip_g.js', './data/hcip_h.js', './data/hcip_j.js', './data/hcip_k.js',
  './data/ie_bank.js'
];

// 瀹夎锛氶缂撳瓨鍏ㄩ儴璧勬簮
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(VERSION)
      .then(cache => {
        // 閫愪釜娣诲姞锛屽崟涓け璐ヤ笉褰卞搷鏁翠綋锛堥伩鍏嶄竴涓?404 瀵艰嚧鏁翠釜瀹夎澶辫触锛?        return Promise.all(ASSETS.map(url =>
          cache.add(url).catch(err => console.warn('[SW] 缂撳瓨澶辫触:', url, err.message))
        ));
      })
      .then(() => self.skipWaiting())
  );
});

// 婵€娲伙細娓呯悊鏃х増鏈紦瀛?self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== VERSION).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// 璇锋眰锛氱紦瀛樹紭鍏堬紝缃戠粶鍥為€€锛涘鑸姹傚洖閫€鍒?index.html
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // 鍙鐞嗗悓婧愯姹?  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;

      return fetch(req).then(res => {
        // 鎴愬姛鑾峰彇鐨勬柊璧勬簮涔熷啓鍏ョ紦瀛?        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => {
        // 绂荤嚎涓旀湭缂撳瓨锛氬鑸姹傚洖閫€鍒伴椤?        if (req.mode === 'navigate') return caches.match('./index.html');
        return new Response('绂荤嚎涓旀棤缂撳瓨', {
          status: 503,
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      });
    })
  );
});

// 鏀寔浠庨〉闈㈣Е鍙戞洿鏂?self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});