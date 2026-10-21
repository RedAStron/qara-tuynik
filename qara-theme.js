/* QARA TUYNIK appearance. No media processing, network calls or observers. */
(()=>{'use strict';
const root=document.documentElement,key='qara-theme';
let theme='dark';try{if(localStorage.getItem(key)==='solarized-light')theme='solarized-light';}catch{}
root.dataset.qaraTheme=theme;
function init(){
 const originalMeta=document.querySelector('meta[name="theme-color"]');
 const oldColor=originalMeta?.content||'#050608';
 const meta=originalMeta||Object.assign(document.createElement('meta'),{name:'theme-color'});
 if(!originalMeta)document.head.append(meta);
 const page=location.pathname.split('/').pop()||'index.html';
 // Preserve light typography over intentionally dark photographic/canvas scenes.
 const zones={
 'index.html':'.hero,body > header,#fallback',
 'cinema.html':'main,.welcome,body > header,.controls',
 'journal06.html':'.hero,.topbar,.epilogue,.image-full,.film-caption',
 'journal07.html':'.hero,.closing',
 'journal08.html':'.awakening,.cosmic-stage,.topbar,.finale',
 'journal09.html':'.hero',
 'journal11.html':'.hero',
 'journal13.html':'.opening,.masthead',
 'journal14.html':'.hero',
 'journal15.html':'.hero',
 };
 const selectors=[zones[page],'.star-map,.photo-stage,.sky-viewport,.sky-tags,.compare .tag,.image-stage,.view-frame,.horizon-scene'].filter(Boolean).join(',');
 document.querySelectorAll(selectors).forEach(el=>el.classList.add('qt-dark-zone'));
 // Headers positioned over dark hero artwork keep their original contrast.
 const head=document.querySelector('body > header');
 if(head&&['absolute','fixed'].includes(getComputedStyle(head).position))head.classList.add('qt-dark-zone');
 const button=document.createElement('button');button.type='button';button.id='qara-theme-toggle';
 button.innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg><span></span>';
 function apply(next,persist){theme=next;root.dataset.qaraTheme=theme;const light=theme==='solarized-light';button.setAttribute('aria-pressed',String(light));button.setAttribute('aria-label','Solarized Light');const tr=window.qaraTranslate||((s)=>s);button.title=tr(light?'Switch to original dark theme':'Switch to Solarized Light');button.querySelector('span').textContent=tr(light?'Dark theme':'Solarized Light');meta.content=light?'#fdf6e3':oldColor;if(persist)try{localStorage.setItem(key,theme);}catch{}}
 button.addEventListener('click',()=>apply(theme==='dark'?'solarized-light':'dark',true));
 document.addEventListener('change',e=>{if(['site-language','language'].includes(e.target.id))apply(theme,false);});
 document.body.append(button);apply(theme,false);
 window.addEventListener('storage',e=>{if(e.key===key)apply(e.newValue==='solarized-light'?'solarized-light':'dark',false);});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
