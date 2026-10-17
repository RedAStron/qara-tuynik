(() => {
  'use strict';
  const file = location.pathname.split('/').pop();
  document.querySelectorAll('nav.journal-quick').forEach(nav => {
    if (!nav.querySelector('a[href="journal11.html"]')) { const a=document.createElement('a'); a.href='journal11.html'; a.textContent='11'; nav.append(a); }
    if (!nav.querySelector('a[href="journal12.html"]')) {const a=document.createElement('a');a.href='journal12.html';a.textContent='12';nav.append(a);}
    if (!nav.querySelector('a[href="journal13.html"]')) {const a=document.createElement('a');a.href='journal13.html';a.textContent='13';nav.append(a);}
    if (!nav.querySelector('a[href="journal14.html"]')) {const a=document.createElement("a");a.href="journal14.html";a.textContent="14";nav.append(a);}
    if (!nav.querySelector('a[href="journal15.html"]')) {const a=document.createElement("a");a.href="journal15.html";a.textContent="15";nav.append(a);}
    const links = Array.from(nav.querySelectorAll('a'));
    links.forEach(link => {
      if (link.getAttribute('href') === file) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    const active = nav.querySelector('[aria-current="page"]');
    // Only move the navigation itself; never scroll the article vertically.
    function revealActive() {
      if (!active || nav.scrollWidth <= nav.clientWidth) return;
      const n = nav.getBoundingClientRect(), a = active.getBoundingClientRect();
      nav.scrollLeft += (a.left + a.right - n.left - n.right) / 2;
    }
    requestAnimationFrame(revealActive);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(revealActive);
    const selector = document.getElementById('language') || document.getElementById('site-language');
    if (selector) selector.addEventListener('change', () => requestAnimationFrame(revealActive));
    nav.addEventListener('keydown', event => {
      const index = links.indexOf(document.activeElement);
      if (index < 0) return;
      let next;
      if (event.key === 'ArrowRight') next = Math.min(index + 1, links.length - 1);
      else if (event.key === 'ArrowLeft') next = Math.max(index - 1, 0);
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = links.length - 1;
      else return;
      event.preventDefault();
      links[next].focus();
    });
  });
})();
