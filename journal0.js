(() => {
  'use strict';
  const copy = window.JOURNAL_ZERO_COPY;
  if (!copy) return;
  const languages = ['en', 'nl', 'kaa-Latn', 'kaa-Cyrl'];
  const select = document.getElementById('language');
  const slider = document.getElementById('horizon');
  const panel = document.getElementById('horizon-panel');
  const output = document.getElementById('horizon-state');
  let language = 'en';
  const text = key => copy[key][languages.indexOf(language)];
  function draw() {
    const value = Math.max(0, Math.min(100, Number(slider.value) || 0));
    const t = value / 100;
    panel.style.setProperty('--shine', t.toFixed(3));
    panel.style.setProperty('--spread', (0.75 + t * 0.7).toFixed(3));
    document.getElementById('core-dark').setAttribute('r', String(82 - t * 34));
    document.getElementById('core-light').setAttribute('r', String(40 + t * 96));
    const state = value < 35 ? 'collapse' : value > 65 ? 'emergence' : 'transition';
    const label = `${text(state)} · ${value}%`;
    output.textContent = label;
    slider.setAttribute('aria-valuetext', label);
    const flow = document.querySelector('#flow-lines path');
    flow.setAttribute('d', value < 50
      ? 'M120 210H225m-12-8 12 8-12 8M780 210H675m12-8-12 8 12 8'
      : 'M225 210H120m12-8-12 8 12 8M675 210H780m-12-8 12 8-12 8');
    flow.setAttribute('opacity', String(Math.abs(t - 0.5) * 2));
  }
  function apply() {
    language = languages.includes(select.value) ? select.value : 'en';
    const col = languages.indexOf(language);
    document.documentElement.lang = language;
    document.title = `${text('title')} — Journal 0 — QARA TUYNIK`;
    document.querySelectorAll('[data-zero]').forEach(el => {
      const key = el.dataset.zero;
      if (copy[key] && el.textContent !== copy[key][col]) el.textContent = copy[key][col];
    });
    document.querySelectorAll('[data-zero-alt]').forEach(el => el.alt = text(el.dataset.zeroAlt));
    document.querySelectorAll('[data-zero-label]').forEach(el => el.setAttribute('aria-label', text(el.dataset.zeroLabel)));
    try { localStorage.setItem('qara-language', language); } catch (_) { /* Private mode remains usable. */ }
    draw();
  }
  try { const saved = localStorage.getItem('qara-language'); if (languages.includes(saved)) select.value = saved; } catch (_) {}
  select.addEventListener('change', apply);
  slider.addEventListener('input', draw);
  document.getElementById('horizon-reset').addEventListener('click', () => { slider.value = '0'; draw(); });
  apply();
})();
