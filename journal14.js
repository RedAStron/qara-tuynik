(()=>{'use strict';
const copy=window.qaraJournal14,langs=['en','nl','kaa-Latn','kaa-Cyrl'],selector=document.getElementById('language'),slider=document.getElementById('timeline'),pieces=[...document.querySelectorAll('#shards polygon')];
function draw(){const f=Number(slider.value)/100;pieces.forEach((p,i)=>{const angle=(i*2.39996),dx=Math.cos(angle)*(90+(i%5)*24)*f,dy=(38+(i%7)*8)*f,rotation=((i%2?1:-1)*(15+i*4))*f;const xy=p.getAttribute('points').split(' ').map(pair=>pair.split(',').map(Number)),cx=xy.reduce((a,v)=>a+v[0],0)/3,cy=xy.reduce((a,v)=>a+v[1],0)/3;p.setAttribute('transform',`translate(${dx.toFixed(2)} ${dy.toFixed(2)}) rotate(${rotation.toFixed(2)} ${cx} ${cy})`);});slider.setAttribute('aria-valuetext',copy.intact[langs.indexOf(selector.value)]+' → '+copy.scattered[langs.indexOf(selector.value)]+': '+slider.value+'%');}
function apply(){const col=Math.max(0,langs.indexOf(selector.value));document.documentElement.lang=langs[col];document.title=copy.title[col]+' — QARA TUYNIK';document.querySelectorAll('[data-t]').forEach(el=>{const row=copy[el.dataset.t];if(row)el.textContent=row[col];});try{localStorage.setItem('qara-language',langs[col]);}catch{}draw();}
try{const lang=localStorage.getItem('qara-language');if(langs.includes(lang))selector.value=lang;}catch{}
selector.addEventListener('change',apply);slider.addEventListener('input',draw);apply();
})();
