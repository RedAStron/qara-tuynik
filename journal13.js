(() => {
 'use strict';
 const langs=['en','nl','kaa-Latn','kaa-Cyrl'],selector=document.getElementById('language'),copy=window.qaraJournal13;
 function apply(){const col=Math.max(0,langs.indexOf(selector.value));document.documentElement.lang=langs[col];document.title=copy.title[col]+' — QARA TUYNIK';document.querySelectorAll('[data-c]').forEach(el=>{const row=copy[el.dataset.c];if(row)el.textContent=row[col];});try{localStorage.setItem('qara-language',langs[col]);}catch{}}
 try{const saved=localStorage.getItem('qara-language');if(langs.includes(saved))selector.value=saved;}catch{}
 selector.addEventListener('change',apply);apply();
 const film=document.getElementById('story-film'),load=document.getElementById('load-music'),host=document.getElementById('music-player');
 function stopMusic(){host.replaceChildren();load.hidden=false;}
 load.addEventListener('click',()=>{film.pause();const frame=document.createElement('iframe');frame.title='Fred V & Grafix — Constellations · SoundCloud';frame.allow='autoplay';frame.src='https://w.soundcloud.com/player/?url='+encodeURIComponent('https://soundcloud.com/fredvgrafix/constellations-clip')+'&color=%233e999c&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false';host.replaceChildren(frame);load.hidden=true;});
 film.addEventListener('play',stopMusic);
 document.addEventListener('visibilitychange',()=>{if(document.hidden){film.pause();stopMusic();}});
 window.addEventListener('pagehide',()=>{film.pause();stopMusic();});
})();
