// MARVEL Tokon Wiki - site interactions
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Tabs
  document.querySelectorAll('.tabs').forEach(function (tabs) {
    var buttons = tabs.querySelectorAll('.tab-buttons button');
    var panels = tabs.querySelectorAll('.tab-panel');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab');
        buttons.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        panels.forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        var panel = tabs.querySelector('.tab-panel[data-panel="' + target + '"]');
        if (panel) panel.classList.add('active');
      });
    });
  });

  // Accordion
  document.querySelectorAll('.accordion-item > button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.parentElement;
      var wasOpen = item.classList.contains('open');
      // close siblings within the same accordion
      var parent = item.parentElement;
      parent.querySelectorAll('.accordion-item.open').forEach(function (o) { o.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Roster filter + search
  var filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    var cards = Array.prototype.slice.call(document.querySelectorAll('.roster-grid .char-card'));
    var fbtns = filterBar.querySelectorAll('button[data-role]');
    var search = filterBar.querySelector('input[type="search"]');
    var activeRole = 'all';

    function apply() {
      var q = search ? search.value.trim().toLowerCase() : '';
      cards.forEach(function (card) {
        var role = card.getAttribute('data-role');
        var name = card.getAttribute('data-name').toLowerCase();
        var roleOk = activeRole === 'all' || role === activeRole;
        var qOk = !q || name.indexOf(q) !== -1;
        card.style.display = (roleOk && qOk) ? '' : 'none';
      });
    }

    fbtns.forEach(function (b) {
      b.addEventListener('click', function () {
        fbtns.forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        activeRole = b.getAttribute('data-role');
        apply();
      });
    });
    if (search) search.addEventListener('input', apply);
  }

  // Footer year
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
