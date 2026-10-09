(() => {
  'use strict';
  const logo = document.querySelector('header .brand');
  if (!logo || typeof HTMLDialogElement === 'undefined' || !HTMLDialogElement.prototype.showModal) return;
  const modal = document.createElement('dialog');
  modal.id = 'cosmic-menu';
  modal.setAttribute('aria-labelledby', 'portal-title');
  modal.setAttribute('translate', 'no');
  modal.innerHTML = `<div class="portal-body"><div class="portal-sky" aria-hidden="true"></div><button class="portal-close" type="button" autofocus data-portal="close">Close</button><div class="portal-ring" aria-hidden="true"></div><h2 id="portal-title" data-portal="title">Your doorway to the stars</h2><p class="portal-sub" data-portal="sub">Where would you like to travel?</p><nav aria-label="Cosmic menu"><a href="#gallery"><span data-portal="gallery">Explore the sky</span><span aria-hidden="true">↗</span></a><a href="cinema.html"><span data-portal="cinema">Watch the universe</span><span aria-hidden="true">↗</span></a><a href="#nukus-story"><span data-portal="story">From Nukus to the stars</span><span aria-hidden="true">↗</span></a></nav><a class="portal-home" href="#" data-portal="home">Back to the homepage</a></div>`;
  document.body.append(modal);
  const texts = {
    en: {close:'Close',title:'Your doorway to the stars',sub:'Where would you like to travel?',gallery:'Explore the sky',cinema:'Watch the universe',story:'From Nukus to the stars',home:'Back to the homepage',open:'Open cosmic menu'},
    'kaa-Latn': {close:'Jabıw',title:'Juldızlarǵa jol',sub:'Qay jaqqa sayaxat etpeksiz?',gallery:'Aspandı izertlew',cinema:'Álemdi tamashalaw',story:'Nókisten juldızlarǵa',home:'Bas betke qaytıw',open:'Kosmos menyusın ashıw'},
    'kaa-Cyrl': {close:'Жабыў',title:'Жулдызларға жол',sub:'Қай жаққа саяхат етпексиз?',gallery:'Аспанды изертлеў',cinema:'Әлемди тамашалаў',story:'Нөкистен жулдызларға',home:'Бас бетке қайтыў',open:'Космос менюсын ашыў'}
  };
  const extra = {
    en:{secret:'Discover a small star',memory:'It started with a child looking up in Nukus.',read:'Read my story',constellation:'Explore my constellation',back:'Back to menu',mapTitle:'Six windows into the night',mapHint:'Tap a glowing point to preview a photograph.',art:'An artistic constellation — not a sky map.',explore:'Explore this photograph'},
    'kaa-Latn':{secret:'Kishkene juldızdı ashıw',memory:'Bári Nókiste aspanǵa qaraǵan bir baladan baslandı.',read:'Tariyxımdı oqıw',constellation:'Juldızlar toparımdı izertlew',back:'Menyuǵa qaytıw',mapTitle:'Túnge ashılǵan altı tereze',mapHint:'Súwretti kóriw ushın jarqıraǵan noqatqa basıń.',art:'Kórkem juldızlar toparı — aspan kartası emes.',explore:'Bul súwretti izertlew'},
    'kaa-Cyrl':{secret:'Кишкене жулдызды ашыў',memory:'Бәри Нөкисте аспанға қараған бир баладан басланды.',read:'Тарийхымды оқыў',constellation:'Жулдызлар топарымды изертлеў',back:'Менюға қайтыў',mapTitle:'Түнге ашылған алты терезе',mapHint:'Сүўретти көриў ушын жарқыраған ноқатқа басың.',art:'Көркем жулдызлар топары — аспан картасы емес.',explore:'Бул сүўретти изертлеў'}
  };
  Object.keys(extra).forEach(lang=>Object.assign(texts[lang],extra[lang]));
  const body = modal.querySelector('.portal-body');
  const menuView=document.createElement('div');menuView.className='portal-menu-view';
  const closeButton=modal.querySelector('.portal-close');
  [...body.children].filter(el=>el!==closeButton&&!el.classList.contains('portal-sky')).forEach(el=>menuView.append(el));
  body.append(menuView);
  const secret=document.createElement('button');secret.type='button';secret.className='portal-secret';secret.innerHTML='<span aria-hidden="true">✦</span>';secret.setAttribute('aria-expanded','false');secret.setAttribute('aria-controls','portal-memory');
  menuView.querySelector('.portal-ring').after(secret);
  const memory=document.createElement('div');memory.id='portal-memory';memory.hidden=true;
  memory.innerHTML='<p data-portal="memory"></p><a href="#nukus-story" data-portal="read"></a>';
  secret.after(memory);
  secret.addEventListener('click',()=>{memory.hidden=!memory.hidden;secret.setAttribute('aria-expanded',String(!memory.hidden));});
  const launch=document.createElement('button');launch.type='button';launch.className='portal-map-launch';launch.dataset.portal='constellation';menuView.querySelector('nav').after(launch);
  const mapView=document.createElement('section');mapView.hidden=true;mapView.className='portal-map-view';
  mapView.innerHTML='<button type="button" class="portal-map-back" data-portal="back"></button><h2 id="portal-map-title" data-portal="mapTitle"></h2><p class="portal-sub" data-portal="mapHint"></p><div class="portal-map"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M18 20 L53 12 L80 38 L57 61 L24 53 L37 85 M18 20 L24 53 M57 61 L37 85"/></svg></div><div class="portal-preview" aria-live="polite"><img alt="" decoding="async"><div><h3></h3><a data-portal="explore"></a></div></div><p class="portal-art" data-portal="art"></p>';
  body.append(mapView);
  const back=mapView.querySelector('button');
  launch.addEventListener('click',()=>{menuView.hidden=true;mapView.hidden=false;modal.setAttribute('aria-labelledby','portal-map-title');selectPhoto(selected);back.focus();modal.scrollTop=0;});
  back.addEventListener('click',()=>{mapView.hidden=true;menuView.hidden=false;modal.setAttribute('aria-labelledby','portal-title');launch.focus();modal.scrollTop=0;});
  const photos=[
    ['andromeda','andromeda','Andromeda','Andromeda','Андромеда',18,20],
    ['heart-soul','heart-and-soul','Heart & Soul','Júrek hám Jan','Жүрек ҳәм Жан',53,12],
    ['elephant-trunk','elephant-trunk','Elephant’s Trunk','Pil tumsıǵı','Пил тумсығы',80,38],
    ['north-america','north-america','North America','Arqa Amerika','Арқа Америка',57,61],
    ['orion','orion','Orion','Orion','Орион',24,53],
    ['cygnus-loop','veil','Cygnus Loop','Cygnus Loop','Cygnus Loop',37,85]
  ];
  let selected=0;
  const preview=mapView.querySelector('.portal-preview'),points=[];
  const photoName=p=>p[document.documentElement.lang==='kaa-Latn'?3:document.documentElement.lang==='kaa-Cyrl'?4:2];
  function selectPhoto(index){
    selected=index;const p=photos[index];
    const img=preview.querySelector('img'),src='assets/gallery/'+p[1]+'.jpg';
    if(img.getAttribute('src')!==src)img.setAttribute('src',src);
    preview.querySelector('h3').textContent=photoName(p);preview.querySelector('a').href=p[0]+'.html';
    points.forEach((point,i)=>{point.setAttribute('aria-pressed',String(i===index));point.setAttribute('aria-label',photoName(photos[i]));});
  }
  photos.forEach((p,i)=>{const point=document.createElement('button');point.type='button';point.className='portal-point';point.style.left=p[5]+'%';point.style.top=p[6]+'%';point.innerHTML='<span aria-hidden="true">✦</span><small aria-hidden="true">0'+(i+1)+'</small>';point.addEventListener('click',()=>selectPhoto(i));mapView.querySelector('.portal-map').append(point);points.push(point);});
  selectPhoto(0);
  modal.addEventListener('close',()=>{mapView.hidden=true;menuView.hidden=false;memory.hidden=true;secret.setAttribute('aria-expanded','false');modal.setAttribute('aria-labelledby','portal-title');});

  function localize() {
    const t = texts[document.documentElement.lang] || texts.en;
    if(secret.getAttribute('aria-label')!==t.secret)secret.setAttribute('aria-label',t.secret);
    selectPhoto(selected);
    modal.querySelectorAll('[data-portal]').forEach(el => {const value=t[el.dataset.portal];if(el.textContent!==value)el.textContent=value;});
    if (logo.getAttribute('aria-label') !== t.open) logo.setAttribute('aria-label',t.open);
    const nav = modal.querySelector('nav');
    if (nav.getAttribute('aria-label') !== t.open) nav.setAttribute('aria-label',t.open);
  }
  // Listen to the user's selection, not the translation engine's DOM writes.
  // Observing html.lang caused a feedback loop with languages.js.
  document.addEventListener('change', event => {
    if (event.target.id === 'site-language') localize();
  });
  localize();
  const sky = modal.querySelector('.portal-sky');
  for (let i=0;i<32;i++) {
    const x=(i*37+11)%100,y=(i*61+7)%100,star=document.createElement('i');
    star.className='portal-star';star.style.left=x+'%';star.style.top=y+'%';
    star.style.setProperty('--dx',(50-x)*1.4+'px');star.style.setProperty('--dy',(25-y)*1.4+'px');sky.append(star);
  }
  logo.setAttribute('role','button');logo.setAttribute('aria-haspopup','dialog');
  logo.setAttribute('aria-controls',modal.id);logo.setAttribute('aria-expanded','false');
  let oldOverflow='',destination=null;
  function open(event) {
    event.preventDefault();if(modal.open)return;
    localize();destination=null;oldOverflow=document.body.style.overflow;
    modal.showModal();document.body.style.overflow='hidden';logo.setAttribute('aria-expanded','true');
    document.dispatchEvent(new Event('qara-portal-open'));
  }
  logo.addEventListener('click',open);
  logo.addEventListener('keydown',event=>{if(event.key===' '){open(event);}});
  modal.querySelector('button').addEventListener('click',()=>modal.close());
  modal.addEventListener('click',event=>{if(event.target===modal){const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)modal.close();}});
  modal.querySelectorAll('a').forEach(a=>a.addEventListener('click',event=>{
    if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
    const href=a.getAttribute('href');
    if(href.startsWith('#')){event.preventDefault();destination=href;modal.close();}
    else modal.close();
  }));
  modal.addEventListener('close',()=>{
    document.body.style.overflow=oldOverflow;logo.setAttribute('aria-expanded','false');
    if(destination){const target=destination==='#'?logo:document.querySelector(destination);if(target){if(!target.hasAttribute('tabindex')){target.setAttribute('tabindex','-1');target.addEventListener('blur',()=>target.removeAttribute('tabindex'),{once:true});}target.focus({preventScroll:true});target.scrollIntoView({behavior:'instant',block:'start'});}destination=null;}
    else logo.focus({preventScroll:true});
  });
})();
