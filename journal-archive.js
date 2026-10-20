/* Uses the existing translated journal links as the single source of content. */
(()=>{'use strict';
function init(){
 const section=document.getElementById('journal'),source=section?.querySelector('.journal-cards');
 if(!source||section.querySelector('.ja-feature'))return;
 const links=[...source.querySelectorAll('a.journal-card[href]')];if(!links.length)return;
 const feature=links.find(a=>a.getAttribute('href')==='journal12.html')||links.at(-1);
 const labels={en:['Featured story','Browse the journal','Previous entries','Next entries','All {n} entries'],nl:['Uitgelicht verhaal','Blader door het dagboek','Vorige bijdragen','Volgende bijdragen','Alle {n} bijdragen'],'kaa-Latn':['Tańlanǵan jazba','Kúndelikti kóriw','Aldınǵı jazbalar','Keyingi jazbalar','Barlıq {n} jazba'],'kaa-Cyrl':['Таңланған жазба','Күнделикти көриў','Алдыңғы жазбалар','Кейинги жазбалар','Барлық {n} жазба']};
 const arrow='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12"/></svg>';
 const hero=document.createElement('a');hero.className='ja-feature';hero.href=feature.getAttribute('href');
 hero.innerHTML='<img src="journal12-assets/milky-way-eye.png" alt="" loading="lazy" decoding="async"><div class="ja-feature-copy"><span class="ja-kicker"></span><h3></h3><p></p>'+arrow+'</div>';
 const browse=document.createElement('div');browse.className='ja-browse';browse.innerHTML='<div class="ja-heading"><h3 id="ja-browse-title"></h3><div class="ja-buttons"><button type="button" class="ja-prev" aria-controls="ja-track"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m14 5-7 7 7 7"/></svg></button><button type="button" class="ja-next" aria-controls="ja-track"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m10 5 7 7-7 7"/></svg></button></div></div><div id="ja-track" role="region" aria-labelledby="ja-browse-title" tabindex="0"></div>';
 const track=browse.querySelector('#ja-track');
 const previews=links.filter(a=>a!==feature).reverse().map(original=>{
  const card=document.createElement('a');card.className='ja-card';card.href=original.getAttribute('href');
  card.innerHTML='<span class="ja-number"></span><h4></h4><p></p>'+arrow;track.append(card);return{original,card};
 });
 const details=document.createElement('details');details.className='ja-all';
 const summary=document.createElement('summary');details.append(summary);
 source.before(hero,browse,details);details.append(source);section.classList.add('ja-ready');
 function update(){
  const t=labels[document.documentElement.lang]||labels.en;
  hero.querySelector('.ja-kicker').textContent=t[0];
  hero.querySelector('h3').textContent=feature.querySelector('h3').textContent;
  hero.querySelector('p').textContent=feature.querySelector('p').textContent.replace(/^.*?·\s*/,'');
  browse.querySelector('h3').textContent=t[1];summary.textContent=t[4].replace('{n}',links.length);
  browse.querySelector('.ja-prev').setAttribute('aria-label',t[2]);browse.querySelector('.ja-next').setAttribute('aria-label',t[3]);
  for(const {original,card} of previews){const desc=original.querySelector('p').textContent;
   card.querySelector('.ja-number').textContent=desc.split('·')[0].trim();
   card.querySelector('h4').textContent=original.querySelector('h3').textContent;
   card.querySelector('p').textContent=desc.replace(/^.*?·\s*/,'');
  }
 }
 function move(direction){track.scrollBy({left:direction*(track.firstElementChild.getBoundingClientRect().width+16),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
 browse.querySelector('.ja-prev').addEventListener('click',()=>move(-1));browse.querySelector('.ja-next').addEventListener('click',()=>move(1));
 track.addEventListener('keydown',e=>{if(e.target!==track)return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();move(e.key==='ArrowRight'?1:-1);}});
 // The global translator writes html.lang after every body mutation.
 // Observing that attribute here would create an endless render/translate loop.
 // Refresh after the language selector's synchronous translation handlers finish.
 let refreshTimer;
 function scheduleUpdate(){clearTimeout(refreshTimer);refreshTimer=setTimeout(update,0);}
 document.addEventListener('change',event=>{
  if(['site-language','language'].includes(event.target.id))scheduleUpdate();
 });
 document.addEventListener('qara-language-change',scheduleUpdate);
 update();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
