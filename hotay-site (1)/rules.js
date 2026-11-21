// English / Tiếng Việt switch for the Rules page.
// Both languages are in the page; this only shows one at a time.
// Without JavaScript, both are shown one after the other.
(function () {
  var buttons = document.querySelectorAll('.lang-btn');
  var blocks = document.querySelectorAll('[data-lang-block]');

  function setLang(lang) {
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].hidden = blocks[i].getAttribute('data-lang-block') !== lang;
    }
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].setAttribute('aria-pressed', buttons[j].getAttribute('data-lang') === lang ? 'true' : 'false');
    }
    try { localStorage.setItem('htbc-lang', lang); } catch (e) {}
  }

  var start = null;
  if (location.hash === '#vi' || location.hash === '#en') start = location.hash.slice(1);
  if (!start) { try { start = localStorage.getItem('htbc-lang'); } catch (e) {} }
  if (start !== 'vi' && start !== 'en') {
    start = ((navigator.language || '').toLowerCase().indexOf('vi') === 0) ? 'vi' : 'en';
  }
  setLang(start);

  for (var k = 0; k < buttons.length; k++) {
    buttons[k].addEventListener('click', function () {
      var lang = this.getAttribute('data-lang');
      setLang(lang);
      if (window.history && history.replaceState) history.replaceState(null, '', '#' + lang);
    });
  }
})();
