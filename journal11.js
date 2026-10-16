(() => {
 'use strict';
 const langs=['en','nl','kaa-Latn','kaa-Cyrl'];
 const selector=document.getElementById('language');
 const copy=window.qaraJournal11;
 function apply(){
  const lang=langs.includes(selector.value)?selector.value:'en',col=langs.indexOf(lang);
  document.documentElement.lang=lang;
  document.title=copy.title[col]+' — QARA TUYNIK';
  document.querySelectorAll('[data-watcher]').forEach(el=>{const row=copy[el.dataset.watcher];if(row&&el.textContent!==row[col])el.textContent=row[col];});
  const alts={en:['M92 in a wide star field','A closer view of the dense stars of M92'],nl:['M92 in een wijd sterrenveld','Een dichterbij beeld van de sterren in M92'],'kaa-Latn':['Keń juldızlar maydanındaǵı M92','M92 juldızlarınıń jaqınnan kórinisi'],'kaa-Cyrl':['Кең жулдызлар майданындағы M92','M92 жулдызларының жақыннан көриниси']};
  document.querySelectorAll('[data-view-image]').forEach((el,i)=>el.alt=alts[lang][i]);
  document.querySelector('.hero-image').alt=alts[lang][0];
  try{localStorage.setItem('qara-language',lang);}catch{}
 }
 try{const saved=localStorage.getItem('qara-language');if(langs.includes(saved))selector.value=saved;}catch{}
 selector.addEventListener('change',apply);apply();
 document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  document.querySelectorAll('[data-view-image]').forEach(img=>img.hidden=img.dataset.viewImage!==button.dataset.view);
 }));
})();
