(() => {
 const copy={
  en:['Interactive · Six photographs','Star Field','Follow a point of light. Discover what lies beyond.','Enter Star Field'],
  nl:['Interactief · Zes foto’s','Sterrenveld','Volg een lichtpunt. Ontdek wat erachter schuilt.','Verken het sterrenveld'],
  'kaa-Latn':['Interaktiv · Altı súwret','Juldızlar maydanı','Bir jaqtılıq noqatınıń izinen júriń.','Juldızlar maydanına kiriw'],
  'kaa-Cyrl':['Интерактив · Алты сүўрет','Жулдызлар майданы','Бир жақтылық ноқатының изинен жүриң.','Жулдызлар майданына кириў']
 };
if(window.qaraTranslateCopy)for(const lang of ['ru','uz'])copy[lang]=window.qaraTranslateCopy(copy.en,lang);
 const selector=document.getElementById('site-language')||document.getElementById('language');
 function apply(){const words=copy[selector?.value||document.documentElement.lang]||copy.en;document.querySelectorAll('[data-sf-launch]').forEach(el=>{const value=words[Number(el.dataset.sfLaunch)];if(value!==undefined&&el.textContent!==value)el.textContent=value;});}
 if(selector)selector.addEventListener('change',apply);
 // Listen only to deliberate language changes. Watching html[lang] creates
 // a feedback loop with languages.js, which sets lang after body mutations.
 apply();
})();
