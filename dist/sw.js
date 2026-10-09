'use strict';
// Alterar a versão sempre que mudar qualquer arquivo do app para renovar o cache-first.
const CACHE_PREFIX='elo-static-';
const CACHE_NAME=CACHE_PREFIX+'2026-10-09-b1';
const ASSETS=['./index.html','./style.css','./app.js','./srs.js','./data.js','./phonetics.js','./manifest.webmanifest'].map(path=>new URL(path,self.location.href).href);
const INDEX_URL=ASSETS[0];
const ROOT_PATH=new URL('./',self.location.href).pathname;
self.addEventListener('install',event=>{
  // PNGs pendentes não entram no precache: uma imagem ausente não deve impedir o offline.
  // Não ativamos à força sobre abas antigas, evitando misturar versões durante uma prática.
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS.map(url=>new Request(url,{cache:'reload'})))));
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE_NAME).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  const request=event.request,url=new URL(request.url);
  if(request.method!=='GET'||url.origin!==self.location.origin)return;
  // A página inicial e index.html compartilham uma entrada, inclusive na abertura offline.
  const key=request.mode==='navigate'&&(url.pathname===ROOT_PATH||url.pathname===new URL(INDEX_URL).pathname)?INDEX_URL:url.origin+url.pathname;
  if(!ASSETS.includes(key))return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME),cached=await cache.match(key);
    if(cached)return cached;
    const response=await fetch(request);
    // Não guardar falhas HTTP como se fossem recursos válidos do app.
    if(response.ok)await cache.put(key,response.clone());
    return response;
  })());
});
