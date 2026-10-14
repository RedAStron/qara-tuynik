(() => {
 'use strict';
 const langs=['en','nl','kaa-Latn','kaa-Cyrl'], selector=document.getElementById('language'),copy=window.qaraJournal12;
 function apply(){const lang=langs.includes(selector.value)?selector.value:'en',col=langs.indexOf(lang);document.documentElement.lang=lang;document.title=copy.title[col]+' — QARA TUYNIK';document.querySelectorAll('[data-memory]').forEach(el=>{const row=copy[el.dataset.memory];if(row&&el.textContent!==row[col])el.textContent=row[col];});document.getElementById('memory-film').setAttribute('aria-label',copy.title[col]);try{localStorage.setItem('qara-language',lang);}catch{}}
 try{const saved=localStorage.getItem('qara-language');if(langs.includes(saved))selector.value=saved;}catch{}
 selector.addEventListener('change',apply);apply();
 const film=document.getElementById('memory-film');
 document.addEventListener('visibilitychange',()=>{if(document.hidden)film.pause();});
 window.addEventListener('pagehide',()=>film.pause());
})();
