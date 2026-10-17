// Registration is silent: visitors can keep using the regular website.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/service-worker.js').catch(err => console.warn('PWA registration:', err)));
}
