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
  function localize() {
    const t = texts[document.documentElement.lang] || texts.en;
    modal.querySelectorAll('[data-portal]').forEach(el => {const value=t[el.dataset.portal];if(el.textContent!==value)el.textContent=value;});
    logo.setAttribute('aria-label',t.open);
    modal.querySelector('nav').setAttribute('aria-label',t.open);
  }
  new MutationObserver(localize).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
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
