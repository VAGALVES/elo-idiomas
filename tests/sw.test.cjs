const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '../dist');

// Simula somente as APIs do worker; não substitui a instalação em navegador/aparelho real.
function setup() {
  const handlers = {}, stores = new Map();
  let offline = false, failedPath = '', networkCalls = 0, claimed = false;
  const network = async request => {
    networkCalls++;
    if (offline) throw new Error('Sem conexão');
    const url = new URL(typeof request === 'string' ? request : request.url);
    if (url.pathname === failedPath) return new Response('Indisponível', { status: 503 });
    const file = path.join(root, url.pathname === '/' ? 'index.html' : url.pathname.slice(1));
    return fs.existsSync(file) ? new Response(fs.readFileSync(file, 'utf8')) : new Response('Não encontrado', { status: 404 });
  };
  const cacheAPI = {
    keys: async () => [...stores.keys()],
    delete: async key => stores.delete(key),
    open: async key => {
      if (!stores.has(key)) stores.set(key, new Map());
      const cache = stores.get(key);
      return {
        addAll: async requests => {
          const responses = await Promise.all(requests.map(async request => {
            assert.equal(request.cache, 'reload');
            const response = await network(request);
            if (!response.ok) throw new Error('Precache incompleto');
            return [request.url, response];
          }));
          for (const [url, response] of responses) cache.set(url, response.clone());
        },
        match: async url => cache.get(typeof url === 'string' ? url : url.url)?.clone(),
        put: async (url, response) => cache.set(typeof url === 'string' ? url : url.url, response.clone())
      };
    }
  };
  const context = vm.createContext({
    URL, Request, Response, caches: cacheAPI, fetch: network,
    self: { location: new URL('https://elo.test/sw.js'), clients: { claim: async () => { claimed = true; } }, addEventListener: (event, fn) => { handlers[event] = fn; } }
  });
  vm.runInContext(fs.readFileSync(path.join(root, 'sw.js'), 'utf8'), context);
  const lifecycle = name => { let promise; handlers[name]({ waitUntil: p => { promise = p; } }); return promise; };
  const request = (pathname, mode = 'cors', method = 'GET') => {
    let result;
    handlers.fetch({ request: { url: new URL(pathname, 'https://elo.test').href, method, mode }, respondWith: p => { result = p; } });
    return result;
  };
  return { stores, lifecycle, request, name: vm.runInContext('CACHE_NAME', context), setOffline: value => { offline = value; }, fail: value => { failedPath = value; }, calls: () => networkCalls, claimed: () => claimed };
}

test('precache inclui os recursos do app e não depende dos PNGs pendentes', async () => {
  const h = setup(); await h.lifecycle('install');
  const paths = [...h.stores.get(h.name).keys()].map(url => new URL(url).pathname).sort();
  assert.deepEqual(paths, ['/app.js', '/data.js', '/index.html', '/manifest.webmanifest', '/phonetics.js', '/srs.js', '/style.css']);
});
test('cache-first abre a raiz, index e scripts offline, sem buscar na rede', async () => {
  const h = setup(); await h.lifecycle('install'); h.setOffline(true); const before = h.calls();
  for (const pathname of ['/', '/?origem=pwa', '/index.html']) {
    assert((await (await h.request(pathname, 'navigate')).text()).includes('id="explorer-view"'));
  }
  assert((await (await h.request('/app.js')).text()).includes('function renderPractice('));
  assert((await (await h.request('/srs.js')).text()).includes('function gradeReview('));
  assert.equal(h.calls(), before);
});
test('ativação remove somente caches antigos do Elo', async () => {
  const h = setup(); await h.lifecycle('install');
  h.stores.set('elo-static-antigo', new Map()); h.stores.set('outro-app', new Map());
  await h.lifecycle('activate');
  assert(!h.stores.has('elo-static-antigo')); assert(h.stores.has('outro-app')); assert(h.stores.has(h.name)); assert(h.claimed());
});
test('cache miss busca e guarda resposta válida, mas não armazena erro HTTP', async () => {
  const h = setup(); await h.lifecycle('install'); const cache = h.stores.get(h.name), url = 'https://elo.test/app.js';
  cache.delete(url); h.fail('/app.js'); assert.equal((await h.request('/app.js')).status, 503); assert(!cache.has(url));
  h.fail(''); assert.equal((await h.request('/app.js')).status, 200); assert(cache.has(url));
});
test('não intercepta POST, origem externa ou caminho desconhecido', () => {
  const h = setup();
  assert.equal(h.request('/app.js', 'cors', 'POST'), undefined);
  assert.equal(h.request('https://outro.test/app.js'), undefined);
  assert.equal(h.request('/inexistente', 'navigate'), undefined);
});
test('falha em recurso obrigatório rejeita a instalação', async () => {
  const h = setup(); h.fail('/srs.js'); await assert.rejects(h.lifecycle('install'), /Precache incompleto/);
});
test('manifesto e metadados referenciam os caminhos binários combinados', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.webmanifest'), 'utf8'));
  assert.equal(manifest.name, 'Elo'); assert.equal(manifest.display, 'standalone'); assert.equal(manifest.theme_color, '#102a43');
  assert.deepEqual(manifest.icons.map(i => [i.src, i.sizes, i.type]), [['icons/elo-192.png', '192x192', 'image/png'], ['icons/elo-512.png', '512x512', 'image/png']]);
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  for (const tag of ['og:title', 'og:description', 'og:image', 'og:type', 'twitter:card']) assert(html.includes(tag));
  assert(html.includes('https://elo-idiomas.netlify.app/og-image.png'));
});
