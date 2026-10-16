(() => {
 'use strict';
 const $=id=>document.getElementById(id);
 const data=Array.isArray(window.QARA_SKY)?window.QARA_SKY.map(d=>({...d,markers:d.markers.filter(m=>m.kind!=='star').slice(0,3)})):[];
 const dict=window.STAR_FIELD_WORDS, core=window.StarFieldCore;
 const languages=['en','nl','kaa-Latn','kaa-Cyrl'];
 let language='en', selected=-1, selectedMarker=-1, source=null, request=0, lensPoint={x:.5,y:.5}, drawFrame=0, failed=false;
 let savedProgress='[]';
 try{language=localStorage.getItem('qara-language')||'en';savedProgress=localStorage.getItem('qara-star-field-visited')||'[]';}catch(_){}
 if(!languages.includes(language))language='en';
 const visited=core.visited(savedProgress,data.map(d=>d.slug));
 const reduce=matchMedia('(prefers-reduced-motion: reduce)'), narrow=matchMedia('(max-width:550px)');
 let motionPaused=reduce.matches;
 const desktop=[[13,46],[33,22],[51,49],[73,22],[86,66],[47,82]];
 const mobile=[[24,17],[75,18],[24,49],[75,50],[24,81],[75,82]];
 const edges=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,2],[0,5]];
 const ctx=$('lens-canvas').getContext('2d');
 const text=key=>(dict[key]||[key])[languages.indexOf(language)]||key;
 const save=()=>{try{localStorage.setItem('qara-star-field-visited',JSON.stringify([...visited]));}catch(_){}};
 const smooth=()=>reduce.matches?'auto':'smooth';
 const nodeButtons=[];
 data.forEach((d,i)=>{
  const button=document.createElement('button');button.type='button';button.className='destination';button.dataset.index=i;button.setAttribute('aria-pressed','false');
  button.style.setProperty('--x',desktop[i][0]+'%');button.style.setProperty('--y',desktop[i][1]+'%');button.style.setProperty('--mobile-x',mobile[i][0]+'%');button.style.setProperty('--mobile-y',mobile[i][1]+'%');
  const star=document.createElement('span');star.className='star';
  const thumb=document.createElement('img');thumb.src=d.thumb;thumb.alt='';thumb.loading='lazy';star.append(thumb);
  const name=document.createElement('strong');name.dataset.t=d.slug;
  const number=document.createElement('small');number.textContent=String(i+1).padStart(2,'0');
  button.append(star,name,number);button.addEventListener('click',()=>choose(i,true));$('destinations').append(button);nodeButtons.push(button);
 });
 for(let i=0;i<85;i++){
  const star=document.createElement('i');star.style.left=(i*61.803%100)+'%';star.style.top=(i*37.17%100)+'%';star.style.setProperty('--delay',-(i%9)+'s');$('star-dust').append(star);
 }
 function lines(){
  const positions=narrow.matches?mobile:desktop;const svg=$('constellation');svg.replaceChildren();
  edges.forEach(([a,b])=>{if(!data[a]||!data[b])return;const l=document.createElementNS('http://www.w3.org/2000/svg','line');
   Object.entries({x1:positions[a][0],y1:positions[a][1],x2:positions[b][0],y2:positions[b][1]}).forEach(([k,v])=>l.setAttribute(k,String(v)));
   if(visited.has(data[a].slug)&&visited.has(data[b].slug))l.classList.add('lit');svg.append(l);
  });
 }
 function progress(){
  $('progress').textContent=visited.size+' / '+data.length+' '+text('explored');
  $('completion').hidden=visited.size!==data.length||!data.length;
  nodeButtons.forEach((b,i)=>{const seen=visited.has(data[i].slug);b.classList.toggle('visited',seen);b.setAttribute('aria-pressed',String(i===selected));b.setAttribute('aria-label',text(data[i].slug)+(seen?' · '+text('explored'):''));});lines();
 }
 function motion(){
  document.body.classList.toggle('paused',motionPaused||reduce.matches||document.hidden);
  $('motion').textContent=text(reduce.matches?'paused':motionPaused?'resume':'pause');
  $('motion').setAttribute('aria-pressed',String(motionPaused||reduce.matches));$('motion').disabled=reduce.matches;
 }
 function translate(){
  document.documentElement.lang=language;$('language').value=language;document.title=text('title')+' — QARA TUYNIK';
  document.querySelectorAll('[data-t]').forEach(el=>el.textContent=text(el.dataset.t));
  if(selected>=0)heading();
  $('lens-canvas').setAttribute('aria-label',text('lens'));
  progress();motion();
  if(failed)$('image-status').textContent=text('loadError');
  else if(selected>=0&&!source)$('image-status').textContent=text('loading');
 }
 function heading(){
  const d=data[selected];$('object-title').textContent=text(d.slug);$('object-note').textContent=text('note-'+d.slug);
  $('object-number').textContent=String(selected+1).padStart(2,'0')+' / '+String(data.length).padStart(2,'0');
  $('photograph').alt=text(d.slug);$('photo-stage').setAttribute('aria-label',text(d.slug)+' — '+text('lens'));
 }
 function renderMarkers(){
  $('markers').replaceChildren();$('marker-list').replaceChildren();
  data[selected].markers.forEach((m,i)=>{
   const b=document.createElement('button');b.type='button';b.className='marker';b.style.setProperty('--mx',m.x*100+'%');b.style.setProperty('--my',m.y*100+'%');b.setAttribute('aria-label',m.name);b.setAttribute('aria-pressed','false');
   const label=document.createElement('span');label.textContent=m.name;b.append(label);
   const item=document.createElement('button');item.type='button';item.textContent=m.name;item.setAttribute('aria-pressed','false');
   [b,item].forEach(el=>{el.dataset.marker=i;el.addEventListener('click',()=>selectMarker(i));});$('markers').append(b);$('marker-list').append(item);
  });
 }
 function selectMarker(i){
  const m=data[selected].markers[i];if(!m||!source)return;selectedMarker=i;
  lensPoint={x:m.x,y:m.y};$('lens-toggle').checked=Boolean(ctx);toggleLens();
  document.querySelectorAll('[data-marker]').forEach(el=>el.setAttribute('aria-pressed',String(Number(el.dataset.marker)===i)));
  $('selected-name').textContent=m.name;$('simbad').href=m.url;$('simbad').hidden=!m.url;$('marker-hint').hidden=true;draw();
 }
 function choose(index,interacted){
  if(!data.length)return;
  selected=(index+data.length)%data.length;selectedMarker=-1;const d=data[selected],ticket=++request;
  source=null;failed=false;$('explorer').hidden=false;$('inspection').hidden=true;$('retry').hidden=true;$('image-status').textContent=text('loading');
  $('simbad').hidden=true;$('marker-hint').hidden=false;heading();progress();lensPoint={x:.5,y:.5};
  try{history.replaceState(null,'','#'+d.slug);}catch(_){}
  if(interacted){$('explorer').scrollIntoView({behavior:smooth(),block:'start'});$('object-title').focus({preventScroll:true});}
  const image=new Image();image.decoding='async';
  image.onload=()=>{
   if(ticket!==request)return;
   source=image;$('photograph').src=d.image;$('photograph').width=image.naturalWidth;$('photograph').height=image.naturalHeight;
   $('full-image').href=d.image;$('inspection').hidden=false;$('image-status').textContent='';renderMarkers();toggleLens();
   visited.add(d.slug);save();progress();draw();
  };
  image.onerror=()=>{if(ticket!==request)return;failed=true;$('image-status').textContent=text('loadError');$('retry').hidden=false;};
  image.src=d.image;
 }
 function draw(){
  drawFrame=0;if(!source)return;
  $('crosshair').style.left=(lensPoint.x*100)+'%';$('crosshair').style.top=(lensPoint.y*100)+'%';
  $('position').textContent=Math.round(lensPoint.x*100)+'% / '+Math.round(lensPoint.y*100)+'%';
  if(!ctx||!$('lens-toggle').checked)return;
  const zoom=Number($('zoom').value),c=core.crop(source.naturalWidth,source.naturalHeight,lensPoint.x,lensPoint.y,zoom);
  ctx.clearRect(0,0,600,400);ctx.drawImage(source,c.x,c.y,c.width,c.height,0,0,600,400);
  const x=(lensPoint.x*source.naturalWidth-c.x)/c.width*600,y=(lensPoint.y*source.naturalHeight-c.y)/c.height*400;
  ctx.strokeStyle='#ffffff99';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x-10,y);ctx.lineTo(x+10,y);ctx.moveTo(x,y-10);ctx.lineTo(x,y+10);ctx.stroke();
 }
 function queueDraw(){if(!drawFrame)drawFrame=requestAnimationFrame(draw);}
 function toggleLens(){
  const on=$('lens-toggle').checked&&Boolean(ctx);$('lens-panel').hidden=!on;$('crosshair').hidden=!on;$('photo-stage').classList.toggle('lens-active',on);$('zoom').disabled=!on;draw();
 }
 const stage=$('photo-stage');let dragging=false;
 function move(e){if(!source||!$('lens-toggle').checked)return;lensPoint=core.point(e.clientX,e.clientY,stage.getBoundingClientRect());queueDraw();}
 stage.addEventListener('pointerdown',e=>{if(e.target.closest('button')||!$('lens-toggle').checked)return;dragging=true;stage.setPointerCapture(e.pointerId);move(e);});
 stage.addEventListener('pointermove',e=>{if(e.pointerType==='mouse'||dragging)move(e);});
 stage.addEventListener('pointerup',()=>{dragging=false;});stage.addEventListener('pointercancel',()=>{dragging=false;});stage.addEventListener('lostpointercapture',()=>{dragging=false;});
 stage.addEventListener('keydown',e=>{
  if(e.target!==stage||!source||!$('lens-toggle').checked)return;
  const vectors={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]};const v=vectors[e.key];if(!v)return;e.preventDefault();
  const step=e.shiftKey ? .05 : .01;lensPoint={x:core.clamp(lensPoint.x+v[0]*step),y:core.clamp(lensPoint.y+v[1]*step)};draw();
 });
 $('language').addEventListener('change',()=>{language=$('language').value;try{localStorage.setItem('qara-language',language);}catch(_){}translate();});
 $('lens-toggle').addEventListener('change',toggleLens);
 $('labels-toggle').addEventListener('change',()=>{$('markers').hidden=!$('labels-toggle').checked;});
 $('zoom').addEventListener('input',()=>{$('zoom-value').textContent=$('zoom').value+'×';draw();});
 $('previous').addEventListener('click',()=>choose(selected-1,false));$('next').addEventListener('click',()=>choose(selected+1,false));
 $('retry').addEventListener('click',()=>choose(selected,false));
 $('back-map').addEventListener('click',()=>{$('atlas').scrollIntoView({behavior:smooth()});nodeButtons[selected]?.focus({preventScroll:true});});
 $('reset').addEventListener('click',()=>{if(!confirm(text('resetConfirm')))return;visited.clear();save();progress();});
 $('motion').addEventListener('click',()=>{motionPaused=!motionPaused;motion();});
 reduce.addEventListener('change',motion);narrow.addEventListener('change',lines);document.addEventListener('visibilitychange',motion);
 if(!ctx){$('lens-toggle').checked=false;$('lens-toggle').disabled=true;}
 translate();
 const initial=data.findIndex(d=>d.slug===location.hash.slice(1));if(initial>=0)choose(initial,false);
})();
