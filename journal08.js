(() => {
  'use strict';
  const select = document.getElementById('language');
  const button = document.getElementById('motion-toggle');
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = media.matches, lang = 'en';
  function motionLabel() {
    button.textContent = window.forceTranslations[lang][paused ? 'resume' : 'pause'];
    button.setAttribute('aria-pressed', String(paused));
    document.body.classList.toggle('motion-paused', paused);
  }
  function translate(value) {
    lang = window.forceTranslations[value] ? value : 'en';
    const words = window.forceTranslations[lang];
    document.documentElement.lang = lang;
    select.value = lang;
    document.querySelectorAll('[data-f]').forEach(el => { el.innerHTML = words[el.dataset.f]; });
    document.querySelectorAll('[data-alt]').forEach(el => { el.alt = words[el.dataset.alt]; });
    document.title = words.title1 + ' ' + words.title2 + ' — QARA TUYNIK';
    document.querySelectorAll('[data-step]').forEach(el => { el.setAttribute('aria-label', words['chapter' + el.dataset.step]); });
    try { localStorage.setItem('qara-language', lang); } catch (_) {}
    motionLabel();
  }
  let saved = 'en';
  try { saved = localStorage.getItem('qara-language') || localStorage.getItem('language') || 'en'; } catch (_) {}
  translate(saved);
  select.addEventListener('change', () => translate(select.value));
  const canvas = document.getElementById('force-canvas');
  const ctx = canvas.getContext('2d');
  const chapters = [...document.querySelectorAll('[data-chapter]')];
  const photos = [...document.querySelectorAll('.photo-scene figure')];
  let width = 0, height = 0, frame = 0, last = 0, elapsed = 0, scrollQueued = false;
  let phase = 0;
  const particles = Array.from({length: 220}, (_, i) => ({
    angle: i * 2.399963, radius: ((i * 73 % 223) + 8) / 231,
    size: .4 + (i * 17 % 10) / 10, speed: .025 + (i % 7) * .003
  }));
  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    const cx = width * .5, cy = height * .46, scale = Math.min(width * .44, height * .46);
    const glow = ctx.createRadialGradient(cx, cy, scale * .13, cx, cy, scale * 1.35);
    glow.addColorStop(0, '#07090c00'); glow.addColorStop(.4, '#b8854520'); glow.addColorStop(1, '#07090c00');
    ctx.fillStyle = glow; ctx.fillRect(0, 0, width, height);
    const count = width < 760 ? 100 : particles.length;
    for (let i = 0; i < count; i++) {
      const p = particles[i], t = elapsed * p.speed;
      const a = p.angle + t + phase * p.radius * 2.5;
      const gathering = paused ? 0 : Math.max(0, 1 - elapsed / 7);
      const r = scale * (.36 + p.radius * (.68 + phase * .5 + gathering * 1.5));
      const flatten = .5 + phase * .14;
      const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r * flatten;
      ctx.fillStyle = i % 5 === 0 ? '#ece5d399' : '#d1a46b66';
      ctx.beginPath(); ctx.arc(x, y, p.size, 0, Math.PI * 2); ctx.fill();
    }
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(-.28 + phase * .13);
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.ellipse(0, 0, scale * (.52 + i * .017), scale * (.24 + i * .012), 0, 0, Math.PI * 2);
      ctx.strokeStyle = ['#e5c28d80', '#d1a56b35', '#f2debf18'][i];
      ctx.lineWidth = i === 0 ? 1.2 : 3;
      ctx.stroke();
    }
    ctx.restore();
  }
  function tick(now) {
    frame = 0;
    if (paused || document.hidden || !ctx) return;
    if (now - last >= 33) {
      elapsed += Math.min((now - last) / 1000, .06); last = now; draw();
    }
    frame = requestAnimationFrame(tick);
  }
  function start() {
    if (ctx && !paused && !document.hidden && !frame) { last = performance.now(); frame = requestAnimationFrame(tick); }
  }
  function stop() { cancelAnimationFrame(frame); frame = 0; }
  function resize() {
    if (!ctx) return;
    width = innerWidth; height = innerHeight;
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw();
  }
  function scrollUpdate() {
    scrollQueued = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    document.getElementById('progress-fill').style.transform = 'scaleX(' + (max > 0 ? Math.min(1, scrollY / max) : 0) + ')';
    let active = '';
    chapters.forEach(el => { if (el.getBoundingClientRect().top <= innerHeight * .55) active = el.dataset.chapter; });
    document.querySelectorAll('[data-step]').forEach(el => {
      if (el.dataset.step === active) el.setAttribute('aria-current', 'location'); else el.removeAttribute('aria-current');
    });
    if (!paused) {
      phase = Math.min(1, scrollY / (innerHeight * 2.3));
      photos.forEach(el => {
        const offset = Math.max(-12, Math.min(12, (el.getBoundingClientRect().top - innerHeight * .5) * .025));
        el.style.transform = 'translateY(' + offset + 'px)';
      });
    }
  }
  button.addEventListener('click', () => {
    paused = !paused; motionLabel();
    photos.forEach(el => { el.style.transform = ''; });
    if (paused) stop(); else { scrollUpdate(); start(); }
  });
  media.addEventListener('change', event => {
    paused = event.matches; motionLabel();
    photos.forEach(el => { el.style.transform = ''; });
    if (paused) stop(); else start();
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); });
  addEventListener('scroll', () => { if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(scrollUpdate); } }, {passive: true});
  addEventListener('resize', () => { resize(); scrollUpdate(); });
  if (ctx) { document.body.classList.add('canvas-ready'); button.hidden = false; resize(); start(); }
  scrollUpdate();
})();
