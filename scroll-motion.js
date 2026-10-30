/* QARA TUYNIK — no external libraries, mobile friendly */
(() => {
  'use strict';
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const init = () => {
    const selectors = [
      '#journal > h2', '#journal > .journal-intro', '.journal-card',
      '.gallery .section-heading', '.photo-card',
      '.collection .section-heading', '.collection > h2',
      '.observer-copy', '.observer-scenes figure',
      '.about-head', '.fact', '.sf-launch',
      '#qara-contact > h2', '#qara-contact > p',
      '.ai-acknowledgment > h2', '.nebula h2'
    ];
    const targets = [...new Set(document.querySelectorAll(selectors.join(',')))];
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('qt-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .08, rootMargin: '0px 0px -28px 0px' });
    targets.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      // Don't hide content already in view on first paint.
      if (rect.top < window.innerHeight * .85) return;
      element.classList.add('qt-reveal');
      if (element.matches('.journal-card, .photo-card, .fact')) element.style.setProperty('--qt-delay', `${(index % 4) * 65}ms`);
      observer.observe(element);
    });
    if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
      document.querySelectorAll('.journal-card, .fact').forEach(card => {
        if (getComputedStyle(card).position === 'static') card.style.position = 'relative';
        card.classList.add('qt-interactive');
        card.addEventListener('pointermove', event => {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--qt-pointer-x', `${((event.clientX-r.left)/r.width)*100}%`);
          card.style.setProperty('--qt-pointer-y', `${((event.clientY-r.top)/r.height)*100}%`);
        }, { passive:true });
      });
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();
