/* Only coordinate this film; never force autoplay or change other media URLs. */
(()=>{'use strict';
  const film=document.getElementById('bts-video'),status=document.getElementById('bts-status');
  if(!film||!status)return;
  const article=document.getElementById('between-two-skies');
  const copies={
    en:['FILMS','A SHORT FILM','Between Two Skies','A short film by I. Urazov','Clouds, rooftops, trees, and distant wind turbines. Fragments of everyday life, reflected into unfamiliar landscapes.','Everything begins with something real. The reflection lets imagination take it somewhere else.','Music','Open video file','Your browser cannot play this film.','The film could not load. Please try again, or use Open video file.'],
    nl:['FILMS','EEN KORTE FILM','Tussen twee hemels','Een korte film van I. Urazov','Wolken, daken, bomen en windturbines in de verte. Fragmenten van het dagelijks leven, weerspiegeld in onbekende landschappen.','Alles begint met iets echts. De weerspiegeling laat de verbeelding het ergens anders naartoe brengen.','Muziek','Videobestand openen','Je browser kan deze film niet afspelen.','De film kon niet worden geladen. Probeer het opnieuw of open het videobestand.'],
    ru:['ФИЛЬМЫ','КОРОТКОМЕТРАЖНЫЙ ФИЛЬМ','Между двумя небесами','Короткометражный фильм И. Уразова','Облака, крыши, деревья и далёкие ветряные турбины. Фрагменты повседневной жизни, превращённые отражением в незнакомые пейзажи.','Всё начинается с чего-то реального. Отражение позволяет воображению перенести это куда-то ещё.','Музыка','Открыть видеофайл','Ваш браузер не может воспроизвести этот фильм.','Не удалось загрузить фильм. Попробуйте ещё раз или откройте видеофайл.'],
    uz:['FILMLAR','QISQA FILM','Ikki osmon orasida','I. Urazovning qisqa filmi','Bulutlar, tomlar, daraxtlar va uzoqdagi shamol turbinalari. Kundalik hayot lavhalari aks etib, notanish manzaralarga aylanadi.','Hammasi haqiqiy bir narsadan boshlanadi. Uning aksi esa tasavvurga uni boshqa bir olamga olib borish imkonini beradi.','Musiqa','Video faylni ochish','Brauzeringiz bu filmni ijro eta olmaydi.','Filmni yuklab bo‘lmadi. Qayta urinib ko‘ring yoki video faylni oching.'],
    'kaa-Latn':['FILMLER','QÍSQA FILM','Eki aspan arasında','I. Urazovtıń qısqa filmi','Bultlar, úylerdiń tóbeleri, terekler hám uzaqtaǵı samal turbinaları. Kúndelikli turmıstan alınǵan kórinisler sáwlelenip, biytanıs mánzerelerge aylanadı.','Hámmesi haqıyqıy bir nárseden baslanadı. Sáwleleniwi bolsa qıyalǵa onı basqa bir jerge alıp ketiwge múmkinshilik beredi.','Muzıka','Video fayldı ashıw','Brauzerińiz bul filmdi oynata almaydı.','Film júklenbedi. Qaytadan urınıp kóriń yamasa video fayldı ashıń.'],
    'kaa-Cyrl':['ФИЛЬМЛЕР','ҚЫСҚА ФИЛЬМ','Еки аспан арасында','И. Уразовтың қысқа фильми','Бултлар, үйлердиң төбелери, тереклер ҳәм узақтағы самал турбиналары. Күнделикли турмыстан алынған көринислер сәўлеленип, бийтаныс мәнзерелерге айланады.','Ҳәммеси ҳақыйқый бир нәрседен басланады. Сәўлелениўи болса қыялға оны басқа бир жерге алып кетиўге мүмкиншилик береди.','Музыка','Видео файлды ашыў','Браузериңиз бул фильмди ойната алмайды.','Фильм жүкленбеди. Қайтадан урынып көриң ямаса видео файлды ашың.']
  };
  let copy=copies.en;
  function translate(){
    const selected=document.getElementById('site-language')?.value||document.documentElement.lang;
    const lang=copies[selected]?selected:'en';copy=copies[lang];article.lang=lang;
    const values={kicker:'QARA TUYNIK / '+copy[0],duration:'02:25 / '+copy[1],title:copy[2],byline:copy[3],intro:copy[4],reflection:copy[5],credit:copy[6]+': Teddy Voxhall — Moonlight (Original Eivissa Mix)',open:copy[7],unsupported:copy[8]};
    article.querySelectorAll('[data-bts]').forEach(el=>{const value=values[el.dataset.bts];if(value!==undefined&&el.textContent!==value)el.textContent=value;});
    film.setAttribute('aria-label',copy[2]+' — '+copy[3]);
    if(!status.hidden)status.textContent=copy[9];
  }
  document.addEventListener('change',event=>{if(event.target.id==='site-language')translate();});
  new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  translate();
  document.addEventListener('play',event=>{
    const media=event.target;
    if(!(media instanceof HTMLMediaElement))return;
    if(media===film){
      window.qaraMusic?.pause();
      document.querySelectorAll('video,audio').forEach(other=>{if(other!==film)other.pause();});
      status.hidden=true;status.textContent='';
    }else if(!film.paused)film.pause();
  },true);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)film.pause();});
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)film.pause();});
    observer.observe(film);
  }
  function unavailable(){status.textContent=copy[9];status.hidden=false;}
  film.addEventListener('error',unavailable);
  film.querySelector('source')?.addEventListener('error',unavailable);
})();
