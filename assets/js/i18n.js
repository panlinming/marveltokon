// MARVEL Tokon Wiki - client-side i18n (EN / ES / JA / PT)
(function () {
  var I18N = {
    en: {
      "nav.home": "Home", "nav.tier": "Tier List", "nav.characters": "Characters", "nav.teams": "Best Teams", "nav.beginner": "Beginner Guide", "nav.specs": "Specs",
      "footer.guides": "Guides", "footer.official": "Official &amp; Community", "footer.disclaimer": "Unofficial fan project. Not affiliated with Marvel, Arc System Works, Sony or PlayStation.",
      "home.eyebrow": "Fan-Made Community Wiki", "home.h1": "MARVEL <span>T\u014dkon</span>: Fighting Souls", "home.cta1": "Start Beginner Guide", "home.cta2": "Compare Characters", "home.cta3": "View Team Guides",
      "home.startEyebrow": "Start Here", "home.startTitle": "Your MARVEL T\u014dkon Journey", "home.startP": "New to T\u014dkon? Follow this path from your first match to ranked-ready team play.",
      "home.card1": "<a href=\"/guides/beginner/\">Beginner Guide</a>", "home.card1d": "Complete beginner walkthrough covering controls, team building and progression.",
      "home.card2": "<a href=\"/guides/best-teams/\">Best Teams</a>", "home.card2d": "Learn the strongest team compositions and character synergies.",
      "home.card3": "<a href=\"/characters/spider-man/\">Combo System</a>", "home.card3d": "Master assists, tag mechanics, cancels and advanced combo routes.",
      "home.card4": "<a href=\"/tier-list/\">Ranked Play</a>", "home.card4d": "Improve matchmaking performance and competitive fundamentals.",
      "home.aboutTitle": "What is MARVEL T\u014dkon: Fighting Souls?", "home.aboutCta": "Explore All Guides",
      "home.popEyebrow": "Popular Guides", "home.popTitle": "Most-Searched Right Now", "home.popP": "Move lists, combos and meta breakdowns for the launch roster's most popular fighters.",
      "home.ctaTitle": "Ready to Master MARVEL T\u014dkon?", "home.ctaP": "From your first character selection to advanced tournament-level team strategies, our community wiki helps you improve every aspect of your game.",
      "home.ctaB1": "Read the Beginner Guide", "home.ctaB2": "Play on PS5 &amp; PC",
      "page.h1.tier": "MARVEL T\u014dkon Tier List &ndash; Best Characters", "page.h1.roster": "MARVEL T\u014dkon Full Character Roster",
      "page.h1.spiderman": "Spider-Man Move List &amp; Combos", "page.h1.doom": "Doctor Doom Combo Guide &amp; Move List",
      "page.h1.wolverine": "Wolverine Move List &amp; Playstyle", "page.h1.ironman": "Iron Man Combos &amp; Builds",
      "page.h1.teams": "Best Team Comps &amp; Assists Guide", "page.h1.beginner": "Beginner Guide &amp; Core Mechanics", "page.h1.sysreq": "System Requirements, Crossplay &amp; Controls",
      "tab.moves": "Move List", "tab.combos": "Combos", "tab.synergy": "Team Synergy", "tab.teams": "Team Builds", "tab.specs": "PC Specs", "tab.crossplay": "Crossplay &amp; Netcode", "tab.controls": "Controls", "tab.all": "All Fighters", "tab.byteam": "Browse by Team"
    },
    es: {
      "nav.home": "Inicio", "nav.tier": "Tier List", "nav.characters": "Personajes", "nav.teams": "Mejores Equipos", "nav.beginner": "Gu\u00eda Principiante", "nav.specs": "Requisitos",
      "footer.guides": "Gu\u00edas", "footer.official": "Oficial y Comunidad", "footer.disclaimer": "Proyecto de fans no oficial. Sin afiliaci\u00f3n con Marvel, Arc System Works, Sony ni PlayStation.",
      "home.eyebrow": "Wiki comunitaria no oficial", "home.h1": "MARVEL <span>T\u014dkon</span>: Fighting Souls", "home.cta1": "Comenzar Gu\u00eda Principiante", "home.cta2": "Comparar Personajes", "home.cta3": "Ver Gu\u00edas de Equipos",
      "home.startEyebrow": "Empieza Aqu\u00ed", "home.startTitle": "Tu Viaje en MARVEL T\u014dkon", "home.startP": "\u00bfNuevo en T\u014dkon? Sigue esta ruta desde tu primera partida hasta el juego competitivo en equipo.",
      "home.card1": "<a href=\"/guides/beginner/\">Gu\u00eda Principiante</a>", "home.card1d": "Recorrido completo para principiantes: controles, creaci\u00f3n de equipos y progresi\u00f3n.",
      "home.card2": "<a href=\"/guides/best-teams/\">Mejores Equipos</a>", "home.card2d": "Aprende las composiciones m\u00e1s fuertes y las sinergias entre personajes.",
      "home.card3": "<a href=\"/characters/spider-man/\">Sistema de Combos</a>", "home.card3d": "Domina assists, mec\u00e1nicas de tag, cancels y rutas de combo avanzadas.",
      "home.card4": "<a href=\"/tier-list/\">Juego Competitivo</a>", "home.card4d": "Mejora tu rendimiento en matchmaking y los fundamentos competitivos.",
      "home.aboutTitle": "\u00bfQu\u00e9 es MARVEL T\u014dkon: Fighting Souls?", "home.aboutCta": "Explorar Todas las Gu\u00edas",
      "home.popEyebrow": "Gu\u00edas Populares", "home.popTitle": "Lo M\u00e1s Buscado Ahora", "home.popP": "Listas de movimientos, combos y an\u00e1lisis del meta de los luchadores m\u00e1s populares del roster.",
      "home.ctaTitle": "\u00bfListo para Dominar MARVEL T\u014dkon?", "home.ctaP": "Desde tu primera selecci\u00f3n de personaje hasta estrategias de equipo nivel torneo, nuestra wiki te ayuda a mejorar en todo.",
      "home.ctaB1": "Leer la Gu\u00eda Principiante", "home.ctaB2": "Jugar en PS5 y PC",
      "page.h1.tier": "Tier List de MARVEL T\u014dkon &ndash; Mejores Personajes", "page.h1.roster": "Roster Completo de MARVEL T\u014dkon",
      "page.h1.spiderman": "Lista de Movimientos y Combos de Spider-Man", "page.h1.doom": "Gu\u00eda de Combos y Lista de Movimientos de Doctor Doom",
      "page.h1.wolverine": "Lista de Movimientos y Estilo de Wolverine", "page.h1.ironman": "Combos y Builds de Iron Man",
      "page.h1.teams": "Gu\u00eda de Mejores Equipos y Assists", "page.h1.beginner": "Gu\u00eda Principiante y Mec\u00e1nicas", "page.h1.sysreq": "Requisitos, Crossplay y Controles",
      "tab.moves": "Lista de Movimientos", "tab.combos": "Combos", "tab.synergy": "Sinergia de Equipo", "tab.teams": "Builds de Equipo", "tab.specs": "Requisitos de PC", "tab.crossplay": "Crossplay y Netcode", "tab.controls": "Controles", "tab.all": "Todos los Luchadores", "tab.byteam": "Ver por Equipo"
    },
    ja: {
      "nav.home": "\u30db\u30fc\u30e0", "nav.tier": "\u5f37\u5ea6\u30e9\u30f3\u30ad\u30f3\u30b0", "nav.characters": "\u30ad\u30e3\u30e9\u30af\u30bf\u30fc", "nav.teams": "\u6700\u5f37\u30c1\u30fc\u30e0", "nav.beginner": "\u521d\u5fc3\u8005\u30ac\u30a4\u30c9", "nav.specs": "\u52d5\u4f5c\u74b0\u5883",
      "footer.guides": "\u30ac\u30a4\u30c9", "footer.official": "\u516c\u5f0f\uff06\u30b3\u30df\u30e5\u30cb\u30c6\u30a3", "footer.disclaimer": "\u975e\u516c\u5f0f\u30d5\u30a1\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3002Marvel\u3001Arc System Works\u3001Sony\u3001PlayStation \u3068\u306f\u7121\u95a2\u4fc2\u3067\u3059\u3002",
      "home.eyebrow": "\u30d5\u30a1\u30f3\u30e1\u30a4\u30c9\u30b3\u30df\u30e5\u30cb\u30c6\u30a3 Wiki", "home.h1": "MARVEL <span>T\u014dkon</span>\uff1a\u30d5\u30a1\u30a4\u30c6\u30a3\u30f3\u30b0\u30fb\u30bd\u30a6\u30eb", "home.cta1": "\u521d\u5fc3\u8005\u30ac\u30a4\u30c9\u3092\u59cb\u3081\u308b", "home.cta2": "\u30ad\u30e3\u30e9\u3092\u6bd4\u8f03", "home.cta3": "\u30c1\u30fc\u30e0\u30ac\u30a4\u30c9\u3092\u898b\u308b",
      "home.startEyebrow": "\u3053\u3053\u304b\u3089\u958b\u59cb", "home.startTitle": "\u3042\u306a\u305f\u306e MARVEL T\u014dkon \u4e0a\u9054\u3078\u306e\u9053", "home.startP": "T\u014dkon \u306f\u521d\u3081\u3066\uff1f\u521d\u5bfe\u6226\u304b\u3089\u30e9\u30f3\u30af\u6226\u5bfe\u5fdc\u306e\u30c1\u30fc\u30e0\u30d7\u30ec\u30a4\u307e\u3067\u3001\u3053\u306e\u9053\u7b4b\u3067\u4e0a\u9054\u3057\u307e\u3057\u3087\u3046\u3002",
      "home.card1": "<a href=\"/guides/beginner/\">\u521d\u5fc3\u8005\u30ac\u30a4\u30c9</a>", "home.card1d": "\u64cd\u4f5c\u30fb\u30c1\u30fc\u30e0\u7de8\u6210\u30fb\u4e0a\u9054\u306e\u6d41\u308c\u3092\u7db2\u7f85\u3057\u305f\u5b8c\u5168\u30ac\u30a4\u30c9\u3002",
      "home.card2": "<a href=\"/guides/best-teams/\">\u6700\u5f37\u30c1\u30fc\u30e0</a>", "home.card2d": "\u6700\u5f37\u306e\u30c1\u30fc\u30e0\u69cb\u6210\u3068\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u9593\u30b7\u30ca\u30b8\u30fc\u3092\u5b66\u3076\u3002",
      "home.card3": "<a href=\"/characters/spider-man/\">\u30b3\u30f3\u30dc\u30b7\u30b9\u30c6\u30e0</a>", "home.card3d": "\u30a2\u30b7\u30b9\u30c8\u3001\u30bf\u30c3\u30b0\u3001\u30ad\u30e3\u30f3\u30bb\u30eb\u3001\u5fdc\u7528\u30b3\u30f3\u30dc\u30eb\u30fc\u30c8\u3092\u7fd2\u5f97\u3002",
      "home.card4": "<a href=\"/tier-list/\">\u30e9\u30f3\u30af\u6226</a>", "home.card4d": "\u30de\u30c3\u30c1\u30e1\u30a4\u30af\u3067\u306e\u6210\u7e3e\u3068\u5bfe\u6226\u306e\u57fa\u790e\u3092\u5f37\u5316\u3002",
      "home.aboutTitle": "MARVEL T\u014dkon: Fighting Souls \u3068\u306f\uff1f", "home.aboutCta": "\u5168\u30ac\u30a4\u30c9\u3092\u898b\u308b",
      "home.popEyebrow": "\u4eba\u6c17\u30ac\u30a4\u30c9", "home.popTitle": "\u4eca\u3088\u304f\u691c\u7d22\u3055\u308c\u3066\u3044\u308b\u30ac\u30a4\u30c9", "home.popP": "\u4eba\u6c17\u30d5\u30a1\u30a4\u30bf\u30fc\u306e\u6280\u8868\u3001\u30b3\u30f3\u30dc\u3001\u30e1\u30bf\u5206\u6790\u3002",
      "home.ctaTitle": "MARVEL T\u014dkon \u3092\u6975\u3081\u308b\u6e96\u5099\u306f\uff1f", "home.ctaP": "\u6700\u521d\u306e\u30ad\u30e3\u30e9\u9078\u629e\u304b\u3089\u5927\u4f1a\u30ec\u30d9\u30eb\u306e\u30c1\u30fc\u30e0\u6226\u7565\u307e\u3067\u3001\u30b3\u30df\u30e5\u30cb\u30c6\u30a3 Wiki \u304c\u3042\u306a\u305f\u306e\u4e0a\u9054\u3092\u652f\u3048\u307e\u3059\u3002",
      "home.ctaB1": "\u521d\u5fc3\u8005\u30ac\u30a4\u30c9\u3092\u8aad\u3080", "home.ctaB2": "PS5 &amp; PC \u3067\u30d7\u30ec\u30a4",
      "page.h1.tier": "MARVEL T\u014dkon \u5f37\u5ea6\u30e9\u30f3\u30ad\u30f3\u30b0 &ndash; \u6700\u5f37\u30ad\u30e3\u30e9", "page.h1.roster": "MARVEL T\u014dkon \u5168\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u4e00\u89a7",
      "page.h1.spiderman": "\u30b9\u30d1\u30a4\u30c0\u30fc\u30de\u30f3 \u6280\u8868\uff06\u30b3\u30f3\u30dc", "page.h1.doom": "\u30c9\u30af\u30bf\u30fc\u30fb\u30c9\u30a5\u30fc\u30e0 \u30b3\u30f3\u30dc\u30ac\u30a4\u30c9\uff06\u6280\u8868",
      "page.h1.wolverine": "\u30a6\u30eb\u30f4\u30a1\u30ea\u30f3 \u6280\u8868\uff06\u30d7\u30ec\u30a4\u30b9\u30bf\u30a4\u30eb", "page.h1.ironman": "\u30a2\u30a4\u30a2\u30f3\u30de\u30f3 \u30b3\u30f3\u30dc\uff06\u30d3\u30eb\u30c9",
      "page.h1.teams": "\u6700\u5f37\u30c1\u30fc\u30e0\u69cb\u6210\uff06\u30a2\u30b7\u30b9\u30c8\u30ac\u30a4\u30c9", "page.h1.beginner": "\u521d\u5fc3\u8005\u30ac\u30a4\u30c9\uff06\u30b3\u30a2\u30e1\u30ab\u30cb\u30af\u30b9", "page.h1.sysreq": "\u52d5\u4f5c\u74b0\u5883\u30fb\u30af\u30ed\u30b9\u30d7\u30ec\u30a4\uff06\u64cd\u4f5c",
      "tab.moves": "\u6280\u8868", "tab.combos": "\u30b3\u30f3\u30dc", "tab.synergy": "\u30c1\u30fc\u30e0\u76f8\u6027", "tab.teams": "\u30c1\u30fc\u30e0\u30d3\u30eb\u30c9", "tab.specs": "PC \u52d5\u4f5c\u74b0\u5883", "tab.crossplay": "\u30af\u30ed\u30b9\u30d7\u30ec\u30a4\uff06\u30cd\u30c3\u30c8\u30b3\u30fc\u30c9", "tab.controls": "\u64cd\u4f5c", "tab.all": "\u5168\u30d5\u30a1\u30a4\u30bf\u30fc", "tab.byteam": "\u30c1\u30fc\u30e0\u5225\u8868\u793a"
    },
    pt: {
      "nav.home": "In\u00edcio", "nav.tier": "Tier List", "nav.characters": "Personagens", "nav.teams": "Melhores Equipes", "nav.beginner": "Guia Iniciante", "nav.specs": "Requisitos",
      "footer.guides": "Guias", "footer.official": "Oficial e Comunidade", "footer.disclaimer": "Projeto de f\u00e3s n\u00e3o oficial. Sem afilia\u00e7\u00e3o com Marvel, Arc System Works, Sony ou PlayStation.",
      "home.eyebrow": "Wiki comunit\u00e1ria n\u00e3o oficial", "home.h1": "MARVEL <span>T\u014dkon</span>: Fighting Souls", "home.cta1": "Come\u00e7ar Guia Iniciante", "home.cta2": "Comparar Personagens", "home.cta3": "Ver Guias de Equipes",
      "home.startEyebrow": "Comece Aqui", "home.startTitle": "Sua Jornada no MARVEL T\u014dkon", "home.startP": "Novo no T\u014dkon? Siga este caminho da primeira partida at\u00e9 o jogo em equipe competitivo.",
      "home.card1": "<a href=\"/guides/beginner/\">Guia Iniciante</a>", "home.card1d": "Guia completo para iniciantes: controles, montagem de equipe e progress\u00e3o.",
      "home.card2": "<a href=\"/guides/best-teams/\">Melhores Equipes</a>", "home.card2d": "Aprenda as composi\u00e7\u00f5es mais fortes e sinergias de personagens.",
      "home.card3": "<a href=\"/characters/spider-man/\">Sistema de Combos</a>", "home.card3d": "Domine assists, mec\u00e2nicas de tag, cancels e rotas de combo avan\u00e7adas.",
      "home.card4": "<a href=\"/tier-list/\">Jogo Ranqueado</a>", "home.card4d": "Melhore seu desempenho no matchmaking e os fundamentos competitivos.",
      "home.aboutTitle": "O que \u00e9 MARVEL T\u014dkon: Fighting Souls?", "home.aboutCta": "Explorar Todos os Guias",
      "home.popEyebrow": "Guias Populares", "home.popTitle": "Mais Pesquisados Agora", "home.popP": "Listas de golpes, combos e an\u00e1lises do meta dos lutadores mais populares.",
      "home.ctaTitle": "Pronto para Dominar o MARVEL T\u014dkon?", "home.ctaP": "Da primeira escolha de personagem at\u00e9 estrat\u00e9gias de equipe n\u00edvel torneio, nossa wiki ajuda voc\u00ea a evoluir em tudo.",
      "home.ctaB1": "Ler o Guia Iniciante", "home.ctaB2": "Jogar no PS5 e PC",
      "page.h1.tier": "Tier List do MARVEL T\u014dkon &ndash; Melhores Personagens", "page.h1.roster": "Roster Completo do MARVEL T\u014dkon",
      "page.h1.spiderman": "Lista de Golpes e Combos do Spider-Man", "page.h1.doom": "Guia de Combos e Lista de Golpes do Doutor Destino",
      "page.h1.wolverine": "Lista de Golpes e Estilo do Wolverine", "page.h1.ironman": "Combos e Builds do Homem de Ferro",
      "page.h1.teams": "Guia de Melhores Equipes e Assists", "page.h1.beginner": "Guia Iniciante e Mec\u00e2nicas", "page.h1.sysreq": "Requisitos, Crossplay e Controles",
      "tab.moves": "Lista de Golpes", "tab.combos": "Combos", "tab.synergy": "Sinergia de Equipe", "tab.teams": "Builds de Equipe", "tab.specs": "Requisitos de PC", "tab.crossplay": "Crossplay e Netcode", "tab.controls": "Controles", "tab.all": "Todos os Lutadores", "tab.byteam": "Ver por Equipe"
    }
  };

  var EXTRA = window.MTW_I18N_EXTRA || {};
  Object.keys(EXTRA).forEach(function (l) { if (I18N[l]) { for (var k in EXTRA[l]) I18N[l][k] = EXTRA[l][k]; } });

  var LABELS = { en: "EN", es: "ES", ja: "JA", pt: "PT" };
  var KEY = "mtw-lang";

  var ORIG = {};
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var k0 = el.getAttribute("data-i18n");
    if (!(k0 in ORIG)) ORIG[k0] = (el.tagName === "INPUT" || el.tagName === "TEXTAREA") ? el.placeholder : el.innerHTML;
  });

  function applyLang(lang) {
    if (!I18N[lang]) lang = "en";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      var val = (I18N[lang] && I18N[lang][k]) || I18N.en[k] || ORIG[k];
      if (val == null) return;
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") el.placeholder = val; else el.innerHTML = val;
    });
    var code = document.querySelector(".lang-code");
    if (code) code.textContent = LABELS[lang];
    document.querySelectorAll(".lang-menu button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  function buildDropdown() {
    var nav = document.querySelector(".nav-links");
    if (!nav) return;
    var li = document.createElement("li");
    li.className = "lang";
    li.innerHTML =
      '<button class="lang-btn" aria-haspopup="true" aria-expanded="false">\uD83C\uDF10 <span class="lang-code">EN</span> \u25BE</button>' +
      '<ul class="lang-menu" role="menu">' +
      '<li><button data-lang="en">English (US)</button></li>' +
      '<li><button data-lang="es">Espa\u00f1ol</button></li>' +
      '<li><button data-lang="ja">\u65e5\u672c\u8a9e</button></li>' +
      '<li><button data-lang="pt">Portugu\u00eas</button></li>' +
      "</ul>";
    nav.appendChild(li);
    var btn = li.querySelector(".lang-btn");
    var menu = li.querySelector(".lang-menu");
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function (e) {
        e.stopPropagation();
        applyLang(b.getAttribute("data-lang"));
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("click", function () { menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); });
  }

  buildDropdown();
  var saved = "en";
  try { saved = localStorage.getItem(KEY) || "en"; } catch (e) {}
  applyLang(saved);
})();


