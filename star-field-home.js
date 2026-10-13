(() => {
 const copy={
  en:['Interactive · Six photographs','Star Field','Follow a point of light. Discover what lies beyond.','Enter Star Field'],
  nl:['Interactief · Zes foto’s','Sterrenveld','Volg een lichtpunt. Ontdek wat erachter schuilt.','Verken het sterrenveld'],
  'kaa-Latn':['Interaktiv · Altı súwret','Juldızlar maydanı','Bir jaqtılıq noqatınıń izinen júriń.','Juldızlar maydanına kiriw'],
  'kaa-Cyrl':['Интерактив · Алты сүўрет','Жулдызлар майданы','Бир жақтылық ноқатының изинен жүриң.','Жулдызлар майданына кириў']
 };
 const selector=document.getElementById('site-language')||document.getElementById('language');
 function apply(){const words=copy[selector?.value||document.documentElement.lang]||copy.en;document.querySelectorAll('[data-sf-launch]').forEach(el=>{el.textContent=words[Number(el.dataset.sfLaunch)];});}
 if(selector)selector.addEventListener('change',apply);
 new MutationObserver(apply).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});apply();
})();
