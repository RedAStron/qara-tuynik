(() => {
  'use strict';
  const toggle = document.getElementById('scroll-effects');
  const hero = document.querySelector('.artwork');
  const picture = hero && hero.querySelector('img');
  if (!toggle || !picture || !window.matchMedia || !window.requestAnimationFrame) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const compact = window.matchMedia('(max-width: 700px)');
  const seen = new WeakSet();
  const running = new Set();
  let observer = null, frame = null, enabled = false;
  const targets = [...document.querySelectorAll('.intro h2, .intro > p:not(.eyebrow), .prose h2, .prose p, .prose blockquote, .horizon-heading, .ending h2, .ending p')];
  function render() {
    frame = null;
    if (!enabled || document.hidden) return;
    const rect = hero.getBoundingClientRect();
    const height = window.innerHeight || 800;
    if (rect.bottom <= 0 || rect.top >= height) return;
    const progress = Math.max(-1, Math.min(1, (height / 2 - (rect.top + rect.height / 2)) / height));
    const distance = compact.matches ? 18 : 38;
    picture.style.transform = `translate3d(0,${(progress * distance).toFixed(2)}px,0) scale(${(1 + Math.abs(progress) * 0.018).toFixed(4)})`;
  }
  function schedule() {
    if (enabled && !document.hidden && frame === null) frame = requestAnimationFrame(render);
  }
  function stop() {
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
    document.removeEventListener('visibilitychange', schedule);
    if (observer) observer.disconnect();
    observer = null;
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    running.forEach(animation => animation.cancel());
    running.clear();
    picture.style.removeProperty('transform');
  }
  function configure() {
    stop();
    enabled = toggle.checked && !reduced.matches;
    toggle.disabled = reduced.matches;
    if (reduced.matches) toggle.checked = false;
    if (!enabled) return;
    window.addEventListener('scroll', schedule, {passive:true});
    window.addEventListener('resize', schedule, {passive:true});
    document.addEventListener('visibilitychange', schedule);
    // Content is visible by default, even if an observer or animation fails.
    if ('IntersectionObserver' in window && typeof Element.prototype.animate === 'function') {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || seen.has(entry.target)) return;
          seen.add(entry.target);
          observer.unobserve(entry.target);
          try {
            const quote = entry.target.tagName === 'BLOCKQUOTE';
            const animation = entry.target.animate([
              {opacity:0.22, transform:`translate3d(0,${compact.matches ? 12 : 23}px,0)`},
              {opacity:1, transform:'translate3d(0,0,0)'}
            ], {duration:quote ? 1000 : 760, easing:'cubic-bezier(.2,.65,.25,1)', fill:'none'});
            running.add(animation);
            animation.onfinish = animation.oncancel = () => running.delete(animation);
          } catch (_) { /* Readable static fallback. */ }
        });
      }, {threshold:0, rootMargin:'0px 0px -7% 0px'});
      targets.forEach(target => {if (!seen.has(target)) observer.observe(target);});
    }
    schedule();
  }
  toggle.checked = !reduced.matches;
  toggle.addEventListener('change', configure);
  if (reduced.addEventListener) reduced.addEventListener('change', configure);
  else if (reduced.addListener) reduced.addListener(configure);
  // Restore content immediately before printing; the CSS also removes transforms.
  window.addEventListener('beforeprint', stop);
  window.addEventListener('afterprint', configure);
  configure();
})();
