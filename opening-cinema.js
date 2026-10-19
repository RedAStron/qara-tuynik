(()=>{'use strict';
const section=document.getElementById('opening-cinema');
const film=document.getElementById('opening-film');
const sound=document.getElementById('opening-sound');
const toggle=document.getElementById('opening-play');
const status=document.getElementById('opening-status');
if(!section||!film||!sound||!toggle||!status)return;
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
let visible=true,userPaused=reduce.matches,pending=false,automaticPauses=0,messageIndex=null;
const words={
en:['Sound on','Mute','Tap Play to start the film.','Video unavailable. Watch the original on YouTube.','Explore the black hole','Play','Pause'],
nl:['Geluid aan','Dempen','Tik op Afspelen om de film te starten.','Video niet beschikbaar. Bekijk het origineel op YouTube.','Verken het zwarte gat','Afspelen','Pauzeren'],
'kaa-Latn':['Dawıstı qosıw','Dawıstı óshiriw','Filmdi baslaw ushın Play túymesin basıń.','Video ashılmadı. YouTube-ta originalın kóriń.','Qara túynikti izertleń','Oynatıw','Toqtatıw'],
'kaa-Cyrl':['Даўысты қосыў','Даўысты өшириў','Фильмди баслаў ушын Play түймесин басың.','Видео ашылмады. YouTube-та оригиналын көриң.','Қара түйникти изертлең','Ойнатыў','Тоқтатыў']};
function labels(){
 const t=words[document.documentElement.lang]||words.en;
 sound.textContent=t[film.muted?0:1];sound.setAttribute('aria-pressed',String(!film.muted));
 toggle.textContent=t[film.paused?5:6];
 section.querySelector('[data-opening-skip]').textContent=t[4];
 status.textContent=messageIndex===null?'':t[messageIndex];
}
function pauseAutomatically(){if(!film.paused){automaticPauses++;film.pause();}}
async function start(manual=false){
 if(pending||(!manual&&(!visible||document.hidden||userPaused)))return;
 if(manual)userPaused=false;
 pending=true;
 try{await film.play();messageIndex=null;if(!visible||document.hidden)pauseAutomatically();}
 catch(error){if(error.name!=='AbortError')messageIndex=2;}
 finally{pending=false;labels();}
}
film.muted=true;film.defaultMuted=true;
if(reduce.matches){film.autoplay=false;film.removeAttribute('autoplay');pauseAutomatically();}
film.addEventListener('play',()=>{userPaused=false;messageIndex=null;window.qaraMusic?.pause();labels();});
film.addEventListener('pause',()=>{if(automaticPauses)automaticPauses--;else userPaused=true;labels();});
film.addEventListener('volumechange',labels);
film.addEventListener('error',()=>{messageIndex=3;labels();});
toggle.addEventListener('click',()=>{if(film.paused)start(true);else{userPaused=true;film.pause();}});
sound.addEventListener('click',()=>{film.muted=!film.muted;if(!film.muted){window.qaraMusic?.pause();start(true);}labels();});
film.addEventListener('canplay',()=>start());
if('IntersectionObserver'in window)new IntersectionObserver(entries=>{
 visible=entries[0].isIntersecting;if(visible)start();else pauseAutomatically();
},{threshold:0}).observe(film);
document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseAutomatically();else start();});
window.addEventListener('pagehide',pauseAutomatically);
window.addEventListener('pageshow',()=>start());
document.getElementById('immersive-open')?.addEventListener('click',()=>{userPaused=true;pauseAutomatically();});
document.addEventListener('qara-language-change',labels);
document.addEventListener('change',e=>{if(['site-language','language'].includes(e.target.id))setTimeout(labels,0);});
labels();start();
})();
