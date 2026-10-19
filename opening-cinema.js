(()=>{'use strict';
const section=document.getElementById('opening-cinema'),film=document.getElementById('opening-film'),sound=document.getElementById('opening-sound'),status=document.getElementById('opening-status');if(!film)return;
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
let visible=true,userPaused=reduce.matches,automaticPause=false,trying=false;
const words={en:['Sound on','Mute','Tap Play to start the film.','Video unavailable. Watch the original on YouTube.','Explore the black hole'],nl:['Geluid aan','Dempen','Tik op Afspelen om de film te starten.','Video niet beschikbaar. Bekijk het origineel op YouTube.','Verken het zwarte gat'],'kaa-Latn':['Dawıstı qosıw','Dawıstı óshiriw','Filmdi baslaw ushın Play túymesin basıń.','Video ashılmadı. YouTube-ta originalın kóriń.','Qara túynikti izertleń'],'kaa-Cyrl':['Даўысты қосыў','Даўысты өшириў','Фильмди баслаў ушын Play түймесин басың.','Видео ашылмады. YouTube-та оригиналын көриң.','Қара түйникти изертлең']};
function labels(){const t=words[document.documentElement.lang]||words.en;sound.textContent=t[film.muted?0:1];sound.setAttribute('aria-pressed',String(!film.muted));section.querySelector('[data-opening-skip]').textContent=t[4];if(status.dataset.message)status.textContent=t[Number(status.dataset.message)];}
function message(n){status.dataset.message=String(n);labels();}
function silence(){if(!film.paused){automaticPause=true;film.pause();}}
async function play(){if(trying||!visible||document.hidden||userPaused)return;trying=true;try{await film.play();status.textContent='';delete status.dataset.message;}catch{message(2);}finally{trying=false;}}
film.muted=true;film.defaultMuted=true;
// Respect reduced motion and let the native Play control start playback instead.
if(reduce.matches){film.autoplay=false;film.removeAttribute('autoplay');film.pause();}
film.addEventListener('pause',()=>{if(automaticPause){automaticPause=false;return;}userPaused=true;});
film.addEventListener('play',()=>{userPaused=false;window.qaraMusic?.pause();});
film.addEventListener('volumechange',labels);
film.addEventListener('error',()=>message(3));
sound.addEventListener('click',()=>{film.muted=!film.muted;if(!film.muted){window.qaraMusic?.pause();userPaused=false;play();}labels();});
if('IntersectionObserver'in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)play();else silence();},{threshold:.15}).observe(section);
document.addEventListener('visibilitychange',()=>{if(document.hidden)silence();else play();});
window.addEventListener('pagehide',silence);
document.getElementById('immersive-open')?.addEventListener('click',()=>{userPaused=true;silence();});
document.addEventListener('qara-language-change',labels);
document.addEventListener('change',e=>{if(['site-language','language'].includes(e.target.id))setTimeout(labels,0);});
const header=document.querySelector('body > header');function fit(){if(header)section.style.setProperty('--opening-header-height',Math.ceil(header.getBoundingClientRect().height+22)+'px');}
if(header&&'ResizeObserver'in window)new ResizeObserver(fit).observe(header);fit();labels();play();
})();
