/* Use drawn icons instead of platform emoji in navigation and journal links. */
(() => {
  'use strict';
  const paths = {
    '↗':'M3 13L13 3M4 3h9v9',
    '→':'M2 8h12M9 3l5 5-5 5',
    '←':'M14 8H2M7 3L2 8l5 5',
    '↑':'M8 14V2M3 7l5-5 5 5',
    '↓':'M8 2v12M3 9l5 5 5-5'
  };
  const pattern = /([↗→←↑↓])[\uFE0E\uFE0F]?/g;
  function update() {
    observer.disconnect();
    document.querySelectorAll('a,button').forEach(link => {
      const walker = document.createTreeWalker(link, NodeFilter.SHOW_TEXT);
      const nodes = []; let node;
      while ((node = walker.nextNode())) {
        if (!node.parentElement.closest('svg,script,style,.journal-arrow') && /[↗→←↑↓]/.test(node.nodeValue)) nodes.push(node);
      }
      nodes.forEach(node => {
        const fragment = document.createDocumentFragment();
        const value = node.nodeValue; let start = 0;
        for (const match of value.matchAll(pattern)) {
          fragment.append(document.createTextNode(value.slice(start, match.index)));
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttribute('viewBox','0 0 16 16');
          svg.setAttribute('aria-hidden','true'); svg.setAttribute('focusable','false');
          svg.setAttribute('style','display:inline-block;width:1em;height:1em;vertical-align:-.12em;flex-shrink:0;color:inherit');
          const path = document.createElementNS(svg.namespaceURI,'path');
          path.setAttribute('d',paths[match[1]]);path.setAttribute('fill','none');
          path.setAttribute('stroke','currentColor');path.setAttribute('stroke-width','1.5');
          path.setAttribute('stroke-linecap','round');path.setAttribute('stroke-linejoin','round');
          svg.append(path);fragment.append(svg);start=match.index+match[0].length;
        }
        fragment.append(document.createTextNode(value.slice(start)));node.replaceWith(fragment);
      });
    });
    observer.observe(document.body,{childList:true,characterData:true,subtree:true});
  }
  const observer = new MutationObserver(update);
  update();
})();
