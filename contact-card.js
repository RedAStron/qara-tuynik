(() => {
  'use strict';
  const languages = window.qaraTranslate ? ['en', 'nl', 'kaa-Latn', 'kaa-Cyrl', 'ru', 'uz'] : ['en', 'nl', 'kaa-Latn', 'kaa-Cyrl'];
  const copy = {
    kicker: ['QARA TUYNIK / CONTACT', 'QARA TUYNIK / CONTACT', 'QARA TUYNIK / BAYLANÍS', 'QARA TUYNIK / БАЙЛАНЫС'],
    title: ['Across the distance.', 'Voorbij de afstand.', 'Aralıqlarǵa qaramastan.', 'Аралықларға қарамастан.'],
    description: ['A place for conversations about astronomy, astrophotography, science, and the ideas that connect us.', 'Een plek voor gesprekken over astronomie, astrofotografie, wetenschap en de ideeën die ons verbinden.', 'Astronomiya, astrofotografiya, ilim hám bizdi baylanıstıratuǵın ideyalar haqqında sáwbetlesiw ushın orın.', 'Астрономия, астрофотография, илим ҳәм бизди байланыстыратуғын идеялар ҳаққында сәўбетлесиў ушын орын.'],
    email: ['Email', 'E-mail', 'Xat jazıw', 'Хат жазыў']
  };
  if(window.qaraTranslate)Object.values(copy).forEach(row=>row.push(window.qaraTranslate(row[0],'ru'),window.qaraTranslate(row[0],'uz')));
  const selector = document.getElementById('site-language') || document.getElementById('language');
  function apply() {
    const lang = selector?.value || document.documentElement.lang;
    const col = Math.max(0, languages.indexOf(lang));
    document.querySelectorAll('[data-contact]').forEach(el => {
      const row = copy[el.dataset.contact];
      if (row) el.textContent = row[col];
    });
  }
  selector?.addEventListener('change', apply);
  apply();
})();
