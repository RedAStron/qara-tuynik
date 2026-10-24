/* Only coordinate this film; never force autoplay or change other media URLs. */
(()=>{'use strict';
  const film=document.getElementById('bts-video'),status=document.getElementById('bts-status');
  if(!film||!status)return;
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
  function unavailable(){status.textContent='The film could not load. Please try again, or use Open video file.';status.hidden=false;}
  film.addEventListener('error',unavailable);
  film.querySelector('source')?.addEventListener('error',unavailable);
})();
