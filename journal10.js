(() => {
 'use strict';
 const copy=window.DIGIRMAN_COPY;
 if(!copy)return;
 const langs=['en','nl','kaa-Latn','kaa-Cyrl'];
 const select=document.getElementById('language'),range=document.getElementById('mill-range');
 let lang='en';
 const tr=key=>copy[key][langs.indexOf(lang)];
 function draw(){
  const value=Math.max(0,Math.min(100,Number(range.value)||0)),t=value/100;
  document.getElementById('millstone').setAttribute('transform',`rotate(${value*3.6} 300 260)`);
  document.getElementById('stone-layer').style.opacity=String(1-t);
  document.getElementById('cosmic-layer').style.opacity=String(t);
  document.getElementById('cosmic-turn').setAttribute('transform',`rotate(${value*1.2} 300 260)`);
  const key=value<35?'stage0':value<75?'stage1':'stage2';
  document.getElementById('mill-state').textContent=tr(key);
  range.setAttribute('aria-valuetext',`${tr(value<35?'stone':value<75?'orbit':'light')} · ${value}%`);
  document.getElementById('turn-mill').disabled=value===100;
 }
 function apply(){
  lang=langs.includes(select.value)?select.value:'en';
  document.documentElement.lang=lang;
  document.title=`${tr('title')} — ${tr('subtitle')} — QARA TUYNIK`;
  document.querySelectorAll('[data-d]').forEach(el=>{const row=copy[el.dataset.d];if(row&&el.textContent!==row[langs.indexOf(lang)])el.textContent=row[langs.indexOf(lang)];});
  document.querySelectorAll('[data-d-label]').forEach(el=>el.setAttribute('aria-label',tr(el.dataset.dLabel)));
  try{localStorage.setItem('qara-language',lang);}catch(_){ }
  draw();
 }
 try{const saved=localStorage.getItem('qara-language');if(langs.includes(saved))select.value=saved;}catch(_){ }
 select.addEventListener('change',apply);
 range.addEventListener('input',draw);
 document.getElementById('turn-mill').addEventListener('click',()=>{range.value=String(Math.min(100,Number(range.value)+20));draw();});
 document.getElementById('reset-mill').addEventListener('click',()=>{range.value='0';draw();});
 apply();
})();
