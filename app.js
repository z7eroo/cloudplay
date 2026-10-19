(function(){
const S=window.SITE, A=window.APPS, view=document.getElementById('view');
let lang=localStorage.getItem('lang')||'ar', mode=localStorage.getItem('mode')||'list', q='';
const T={ar:{search:'ابحث عن برنامج...',list:'قائمة',grid:'بطاقات',none:'لا توجد نتائج',back:'← رجوع',dl:'تحميل',copy:'نسخ رابط البرنامج',copied:'تم النسخ ✓',feat:'المميزات',discord:'انضم لسيرفر الديسكورد',lang:'EN'},
 en:{search:'Search apps...',list:'List',grid:'Cards',none:'No results',back:'← Back',dl:'Download',copy:'Copy app link',copied:'Copied ✓',feat:'Features',discord:'Join our Discord server',lang:'عربي'}};
const L=o=>o[lang]||o.ar, esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function chrome(){
  document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.getElementById('teamLogo').src=S.logo;document.getElementById('teamName').textContent=S.team;
  document.getElementById('credits').textContent=lang==='ar'?S.credits:S.creditsEn;
  const d=document.getElementById('discord');d.href=S.discord;d.textContent='💬 '+T[lang].discord;
  document.getElementById('langBtn').textContent=T[lang].lang;
}
function home(){
  const t=T[lang];
  view.innerHTML=`<div class="tools"><label class="search">🔍<input id="q" type="search" placeholder="${t.search}" value="${esc(q)}"></label>
  <div class="seg"><button data-m="list" class="${mode==='list'?'on':''}">☰ ${t.list}</button><button data-m="grid" class="${mode==='grid'?'on':''}">▦ ${t.grid}</button></div></div><div id="items"></div>`;
  const draw=()=>{
    const f=A.filter(a=>(a.name+' '+L(a.short)).toLowerCase().includes(q.toLowerCase()));
    const box=document.getElementById('items');
    if(!f.length){box.innerHTML=`<div class="empty">${t.none}</div>`;return}
    box.className=mode==='grid'?'grid':'list';
    box.innerHTML=f.map((a,i)=>mode==='grid'
      ?`<a class="card tile" style="animation-delay:${i*50}ms" href="#/app/${a.id}"><img src="${a.icon}" alt=""><h3>${esc(a.name)}</h3></a>`
      :`<a class="card row" style="animation-delay:${i*50}ms" href="#/app/${a.id}"><img src="${a.icon}" alt=""><div><h3>${esc(a.name)}</h3><p>${esc(L(a.short))}</p></div></a>`).join('');
  };
  draw();
  document.getElementById('q').oninput=e=>{q=e.target.value;draw()};
  view.querySelectorAll('.seg button').forEach(b=>b.onclick=()=>{mode=b.dataset.m;localStorage.setItem('mode',mode);home()});
}
function page(id){
  const a=A.find(x=>x.id===id),t=T[lang];
  if(!a){location.hash='#/';return}
  document.title=a.name+' • '+S.team;
  view.innerHTML=`<a class="back" href="#/">${t.back}</a>
  <div class="head"><img src="${a.icon}" alt=""><div><h1>${esc(a.name)}</h1><div class="type">${esc(L(a.type))}</div></div></div>
  <div class="cover"><img src="${a.cover}" alt="${esc(a.name)}"></div>
  <p class="desc">${esc(L(a.about))}</p>
  <div class="actions"><a class="btn" href="${a.download}" target="_blank" rel="noopener">⬇️ ${t.dl}</a><button class="btn soft" id="cp" type="button">🔗 ${t.copy}</button></div>
  <h2>${t.feat}</h2><div class="feat">${a.features.map(f=>`<div><b>${f.icon} ${esc(L(f.t))}</b><span>${esc(L(f.d))}</span></div>`).join('')}</div>`;
  document.getElementById('cp').onclick=e=>{
    const url=location.href.split('#')[0]+'#/app/'+a.id;
    (navigator.clipboard?navigator.clipboard.writeText(url):Promise.reject()).catch(()=>prompt('',url));
    e.target.textContent=t.copied;
  };
}
function route(){
  chrome();window.scrollTo(0,0);document.title=S.team;
  const m=location.hash.match(/^#\/app\/([\w-]+)/);
  m?page(m[1]):home();
}
document.getElementById('langBtn').onclick=()=>{lang=lang==='ar'?'en':'ar';localStorage.setItem('lang',lang);route()};
window.addEventListener('hashchange',route);route();
})();
