(function () {
  function applyLang(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-en').forEach(el => { el.hidden = lang !== 'en'; });
    document.querySelectorAll('.lang-ja').forEach(el => { el.hidden = lang !== 'ja'; });
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', function (e) {
        const btn = e.target.closest('[data-lang]');
        if (btn) applyLang(btn.dataset.lang);
      });
    }
    applyLang(localStorage.getItem('lang') || 'en');
  });
})();
