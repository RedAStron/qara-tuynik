(() => {
  'use strict';
  const texts=window.JOURNAL06_TEXT;
  const selector=document.getElementById('language');
  const labels={
    en:['Play film with sound','Pause film','Sound on','Mute','Unable to play. Open the video file','Play film'],
    nl:['Afspelen met geluid','Film pauzeren','Geluid aan','Geluid uit','Afspelen lukt niet. Open het videobestand','Film afspelen'],
    'kaa-Latn':['Filmdi dawısı menen qoyıw','Filmdi toqtatıw','Dawıstı qosıw','Dawıstı óshiriw','Filmdi qoyıp bolmadı. Videofayldı ashıń','Filmdi qoyıw'],
    'kaa-Cyrl':['Филмди даўысы менен қойыў','Филмди тоқтатыў','Даўысты қосыў','Даўысты өшириў','Филмди қойып болмады. Видеофайлды ашың','Филмди қойыў']
  };
  const alts={
    en:['Scheveningen Pier and Ferris wheel reflected on wet sand at night','Golden sunlight over the North Sea','A photographer silhouetted against sunlight over the sea'],
    nl:['De pier en het reuzenrad van Scheveningen weerspiegeld in het natte zand bij nacht','Gouden zonlicht boven de Noordzee','Het silhouet van een fotograaf tegen het zonlicht boven zee'],
    'kaa-Latn':['Túnde ıǵal qumda sáwlelengen Sxeveningen pirsi hám sholıw dógeregi','Arqa teńiz ústindegi altın reńli Quyash jaqtılıǵı','Teńiz ústindegi Quyash jaqtılıǵı aldında fotograf silueti'],
    'kaa-Cyrl':['Түнде ығал қумда сәўлеленген Схевенинген пирси ҳәм шолыў дөгереги','Арқа теңиз үстиндеги алтын реңли Қуяш жақтылығы','Теңиз үстиндеги Қуяш жақтылығы алдында фотограф силуэти']
  };
  let language='en';
  try{const saved=localStorage.getItem('qara-language');if(texts[saved])language=saved;}catch{}
  selector.value=language;
  const films=[...document.querySelectorAll('[data-film]')].map(el=>{
    const video=el.querySelector('video'),play=el.querySelector('.film-control');
    const actions=document.createElement('div');actions.className='film-actions';
    const sound=document.createElement('button');sound.type='button';sound.className='film-control';
    const status=document.createElement('div');status.className='film-status';status.setAttribute('role','status');
    actions.append(play,sound);el.append(actions,status);
    video.muted=true;
    return {el,video,play,sound,status,userPaused:false,visible:false,started:false,explicitMute:false};
  });
  function update(f){
    const t=labels[language];
    f.play.textContent=f.video.paused?(f.explicitMute?t[5]:t[0]):t[1];
    f.play.setAttribute('aria-label',f.play.textContent);
    f.sound.textContent=f.video.muted?t[2]:t[3];
    f.sound.setAttribute('aria-label',f.sound.textContent);
    if(f.status.firstChild)f.status.firstChild.textContent=t[4];
  }
  function failure(f){
    const link=document.createElement('a');link.href=f.video.querySelector('source').getAttribute('src');
    link.textContent=labels[language][4];f.status.replaceChildren(link);update(f);
  }
  function pauseOthers(current){films.forEach(f=>{if(f!==current)f.video.pause();});}
  function start(f,audible){
    pauseOthers(f);f.status.replaceChildren();f.userPaused=false;
    if(audible){f.video.muted=false;f.video.volume=1;f.explicitMute=false;}
    f.video.play().catch(()=>failure(f));update(f);
  }
  films.forEach(f=>{
    f.play.addEventListener('click',()=>{
      if(f.video.paused)start(f,!f.explicitMute);
      else{f.userPaused=true;f.video.pause();}
    });
    f.sound.addEventListener('click',()=>{
      if(f.video.muted)start(f,true);
      else{f.video.muted=true;f.explicitMute=true;update(f);}
    });
    ['play','pause','volumechange','ended'].forEach(type=>f.video.addEventListener(type,()=>update(f)));
    f.video.addEventListener('error',()=>failure(f));
  });
  function translate(){
    language=texts[selector.value]?selector.value:'en';
    document.querySelectorAll('[data-i18n]').forEach(el=>el.innerHTML=texts[language][Number(el.getAttribute('data-i18n'))]);
    document.documentElement.lang=language;document.documentElement.dir='ltr';
    document.title=texts[language][62]+' — QARA TUYNIK';
    document.querySelector('meta[name="description"]').content=texts[language][1];
    document.querySelectorAll('.image-full img').forEach((img,i)=>img.alt=alts[language][i]);
    films.forEach((f,i)=>{f.video.setAttribute('aria-label',texts[language][[14,37,47,57,58][i]]);update(f);});
    try{localStorage.setItem('qara-language',language);}catch{}
  }
  selector.addEventListener('change',translate);translate();
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if('IntersectionObserver' in window){
    const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveal.unobserve(e.target);}}),{threshold:.1});
    document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        const f=films.find(f=>f.el===e.target);f.visible=e.isIntersecting;
        if(!f.visible){f.video.pause();return;}
        if(reduced||f.userPaused||f.started||document.hidden)return;
        f.started=true;f.video.muted=true;pauseOthers(f);
        f.video.play().catch(()=>update(f));
      });
    },{threshold:.55});
    films.forEach(f=>observer.observe(f.el));
  }else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
  document.addEventListener('visibilitychange',()=>{if(document.hidden)films.forEach(f=>f.video.pause());});
  const progress=document.getElementById('progress');let ticking=false;
  function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%';ticking=false;}
  addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateProgress);ticking=true;}},{passive:true});updateProgress();
})();
