(() => {
'use strict';
const button=document.getElementById('sound'),volume=document.getElementById('volume'),output=document.getElementById('volume-value'),status=document.getElementById('audio-status');if(!button||!volume)return;
const track=new Audio();track.preload='none';track.loop=true;track.src='assets/collection/chronometry.mp3';track.volume=Number(volume.value)/100;
const credit='Exploring The Universe';let busy=false;
function label(){const lang=document.documentElement.lang;const on=!track.paused;const text=lang==='kaa-Latn'?(on?'Muzıka qosılǵan':'Muzıka óshirilgen'):lang==='kaa-Cyrl'?(on?'Музыка қосылған':'Музыка өширилген'):(on?'Music on':'Music off');if(button.textContent!==text)button.textContent=text;const pressed=String(on);if(button.getAttribute('aria-pressed')!==pressed)button.setAttribute('aria-pressed',pressed);}
function pause(){track.pause();label();}window.qaraMusic={pause};
button.addEventListener('click',async()=>{if(busy)return;if(!track.paused){pause();return;}busy=true;button.disabled=true;document.querySelectorAll('video').forEach(v=>v.pause());try{await track.play();status.textContent=credit;}catch{status.textContent='Music could not start. Press Music to try again.';}finally{busy=false;button.disabled=false;label();}});
track.addEventListener('play',label);track.addEventListener('pause',label);track.addEventListener('error',()=>{status.textContent='Music unavailable. Please check the uploaded audio file.';label();});volume.addEventListener('input',()=>{track.volume=Number(volume.value)/100;if(output)output.textContent=volume.value+'%';});document.addEventListener('play',e=>{if(e.target.tagName==='VIDEO')pause();},true);document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});window.addEventListener('pagehide',pause);document.addEventListener('qara-language-change',label);document.addEventListener('change',e=>{if(e.target.id==='site-language')setTimeout(label,0);});label();
})();
