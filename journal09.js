(() => {
 'use strict';
 const selector=document.getElementById('language');
 function apply(lang){
  const copy=window.journal09Words[lang]||window.journal09Words.en;
  if(!window.journal09Words[lang])lang='en';
  document.documentElement.lang=lang;selector.value=lang;
  document.querySelectorAll('[data-story]').forEach(el=>{el.innerHTML=copy[el.dataset.story];});
  document.querySelectorAll('[data-alt]').forEach(el=>{el.alt=copy[el.dataset.alt].replace(/<br>/g,' ').replace(/<[^>]+>/g,'');});
  document.title=copy.title.replace(/<br>/g,' ')+' — QARA TUYNIK';
  try{localStorage.setItem('qara-language',lang);}catch(_){}
 }
 let lang='en';try{lang=localStorage.getItem('qara-language')||'en';}catch(_){}
 apply(lang);selector.addEventListener('change',()=>apply(selector.value));
 const film=document.getElementById('film'),play=document.getElementById('play-film');
 play.addEventListener('click',()=>{
  film.muted=false;film.volume=1;
  film.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});
  film.play().catch(()=>{film.focus();});
 });
 film.addEventListener('play',()=>{play.hidden=true;});
 film.addEventListener('pause',()=>{play.hidden=false;});
 film.addEventListener('ended',()=>{play.hidden=false;});
})();
