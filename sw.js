const C='job-tracker-v4';
const PRE=['./','./index.html','./manifest.json','./lib/tabler-icons.min.css','./lib/fonts/tabler-icons.woff2','./lib/jszip.min.js','./lib/docx-preview.min.js','./lib/mammoth.browser.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(PRE.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);
if(e.request.method!=='GET'||u.hostname.endsWith('supabase.co')||u.hostname==='api.github.com')return;
e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
