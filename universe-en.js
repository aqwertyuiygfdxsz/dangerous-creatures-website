/* ============================================================
   Опасные Создания — Вселенная
   data + i18n + search/filter/scrollspy/nav
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- DATA ---------------- */

  const LOCATIONS = [
    { name: 'Lovarra',       text: 'Rey’s homeland, an ancient house of the South (House Phoenix, Rivald’s line). Bountiful lands behind orochit walls: safe and peaceful.' },
    { name: 'Thornhall',     text: 'The northern kingdom of House Morel, ruled by King Loran. A harsh land that takes the first blow of the Nav’s creatures — with no orochit walls.' },
    { name: 'The Sea House',  text: 'Domain of the Gorvarins, the second most powerful house of the North. Its lord is Azarin Gorvarin.' },
    { name: 'The East',       text: 'An ancient empire that kept itself apart and hostile to South and North alike for almost a thousand years. Now tied to the North by the marriage of Azarin and Esmar.' },
    { name: 'Krylnya',        text: 'The burial place of the kings of Thornhall.' },
    { name: 'The Whispering Wood', text: 'A forest near Thornhall.' },
    { name: 'The Citadel',    text: 'The seat of the reapers.' },
    { name: 'The Narrow Throat', text: 'A strait in Gorvarin lands, closed off by them after Taron’s death.' }
  ];

  const GLOSSARY = [
    { term: 'Yav',         ref: '',        def: 'The world of men, where the saga’s main events unfold: great houses, wars over resources and dynastic marriages.' },
    { term: 'Nav',         ref: '',        def: 'A primordial dark element existing alongside Yav. It is made of layers and inhabited by deadly creatures and ancient entities.' },
    { term: 'Day of Union', ref: '', def: 'An astronomical and magical event once every 22 years, when the border between Nav and Yav thins to its limit.' },
    { term: 'Seal of the Nav', ref: '', def: 'The mark of children born in the Year of Union (or brought back by necromancers): a thin bond with the dark world, snow-white hair and red eyes.' },
    { term: 'Orochit',     ref: 'Chapter 6', def: 'A rare heavy mineral of the South (lands of House Rann). It suppresses the magic of the Nav and repels its creatures; the defensive walls of the North are built from it. Deadly toxic to reapers — it leaves burns that never heal and blocks regeneration.' },
    { term: 'Sky iron', ref: '', def: 'A legendary metal: it does not heat in fire nor frost over in the cold. Durable, it binds to living tissue and serves as material for weapons against the Nav.' },
    { term: 'The Reforging',  ref: '', def: 'The rite in which the human blood of a future reaper is mixed with the blood of the Nav. It grants strength, speed, sharpened senses and regeneration.' },
    { term: 'Black blood', ref: '', def: 'The blood of the Nav inside a reaper. Its power is bounded by the Reserve; beyond that limit the darkness takes over what is human.' },
    { term: 'The Reserve',     ref: '', def: 'The limit of the Nav’s power within a reaper. Exceed it and the reaper risks turning into a creature of the Nav, his mind left locked inside the body.' },
    { term: 'Morana',     ref: '', def: 'The goddess of death worshipped by the necromancers — servants of the dark arts able to call back fading lives.' },
    { term: 'Ichtor',      ref: 'Chapter 1', def: 'Blood of the Nav stabilised by the dusk potion; it turns a human into a reaper.' },
    { term: 'Lure-whistle',    ref: 'Chapter 2', def: 'A charmed whistle holding a fragment of a Nav creature; it sounds at the Nav’s own pitch, drawing a beast in or bending its will.' },
    { term: 'Mavka',      ref: 'Chapter 2', def: 'A spawn of Yav; becoming one is a deliberate rite (a cut, a dance, a payment to the water). Mavkas have a pack, and everything outside the pack is prey.' },
    { term: 'Moon flower', ref: 'Chapter 2', def: 'A flower that opens at night; in the South it is used in funeral rites.' },
    { term: 'Var solis',  ref: 'Chapter 2', def: '“Live / be light.” A phrase Rey hears from her mother.' }
  ];

  // Персонажи по фракциям (дом / королевство / орден)
  const FACTIONS = [
    {
      id: 'lovarra', logo: 'assets/factions/lovara_logo.png',
      name: 'Ловарра', sub: 'Юг • Дом Феникса',
      main: [
        { name: 'Рэй',   role: 'принцесса',          img: 'assets/chars/ray.jpg',   desc: 'Принцесса Ловарры.' },
        { name: 'Тата',  role: 'служанка принцессы',  img: 'assets/chars/tata.jpg',  desc: 'Хочет быть полезной для Рэй.' },
        { name: 'Марла', role: 'служанка принцессы',  img: 'assets/chars/marla.jpg', desc: 'Служанка принцессы Рэй.' },
        { name: 'Ривальд', role: 'король · отец Рэй',  img: 'assets/chars/rivald.jpg', desc: 'Король Ловарры, отец Рэй.' }
      ],
      mentioned: [
        { name: 'Дэйлан', role: 'младший брат Рэй' },
        { name: 'Арэлла', role: 'младшая сестра Рэй' },
        { name: 'Радан',  role: 'брат-близнец Рэй' },
        { name: 'Мать',   role: 'дом Ранн' },
        { name: 'Дядя',   role: 'дом Ранн' }
      ]
    },
    {
      id: 'thornhall', logo: 'assets/factions/north_logo.png',
      name: 'Торнхолл', sub: 'Королевство Севера',
      main: [
        { name: 'Лоран',   role: 'король Торнхолла', img: 'assets/chars/loran.jpg',   desc: 'Несёт корону погибшего брата. Пытается остаться человеком там, где выживают только чудовища.' },
        { name: 'Ровенна', role: 'королева',         img: 'assets/chars/rovenna.jpg', desc: 'Мать Лорана, королева.' },
        { name: 'Гарон',   role: 'советник короля',  img: 'assets/chars/garon.jpg',   desc: 'Советник с двумя лицами и одной скрытой целью.' },
        { name: 'Морва',   role: 'мать Ровенны',    img: 'assets/chars/morva.jpg',   desc: 'Старая, мудрая. Помнит то, что все остальные предпочли забыть.' }
      ],
      mentioned: [
        { name: 'Тарон',  role: 'отец Лорана' },
        { name: 'Селиан', role: 'брат Лорана' }
      ]
    },
    {
      id: 'citadel', logo: 'assets/factions/reapers_logo.png',
      name: 'Цитадель', sub: 'Защитники границ',
      main: [
        { name: 'Командир', role: 'командующий жнец · Урман', img: 'assets/chars/comander.jpg', desc: 'Второй в Цитадели после Воевластного.' },
        { name: 'Криня',    role: 'жнец · Криворот', img: 'assets/chars/krinya.jpg',   desc: 'Остроумный и добродушный жнец, скрывающий за шутками невероятную выносливость.' },
        { name: 'Марк',     role: 'жнец · Маркош',   img: 'assets/chars/mark.jpg',     desc: 'Молчаливый и смертоносный охотник. Повышенный резерв при тонком лимите: его кровь на 4/5 принадлежит Нави.' }
      ],
      mentioned: [
        { name: 'Воевластный', role: 'Асвальд · глава ордена' },
        { name: 'Буян',        role: 'травник и ведун' },
        { name: 'Решаль',      role: 'некромантка' },
        { name: 'Таи',         role: 'некромантка' }
      ]
    },
    {
      id: 'gorvarin', crest: 'wolf',
      name: 'Горварины', sub: 'Север • Морской Дом',
      main: [
        { name: 'Азарин', role: 'державец Морского Дома', img: 'assets/chars/azarin.jpg', desc: 'Считает себя истинным королём.' },
        { name: 'Эсмар', role: 'дочь императора Востока · жена Азарина', img: 'assets/chars/esmar.jpg', desc: 'Дочь восточного императора. Брак с Азарином впервые за почти тысячу лет связал обособленный Восток с землями Севера.' }
      ],
      mentioned: [
        { name: 'Тарон', role: 'прежний державец' },
        { name: 'Император Востока', role: 'отец Эсмар' },
        { name: 'Кассия',            role: 'та, чьего прихода ждут' }
      ]
    }
  ];

  // Heraldic crests (simple gold line-glyphs)
  const CRESTS = {
    phoenix: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M32 14l3 6-3 4-3-4z"/><path d="M32 24C24 16 14 14 8 18c8 4 12 10 20 12"/><path d="M32 24c8-8 18-10 24-6-8 4-12 10-20 12"/><path d="M32 24v22M26 40l6 12 6-12"/></svg>`,
    wolf: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M18 20L14 10l10 8"/><path d="M46 20l4-10-10 8"/><path d="M18 20c-2 14 4 26 14 30 10-4 16-16 14-30-6 6-22 6-28 0z"/><path d="M27 32h-3M40 32h-3"/><path d="M32 50l-3-8 3-2 3 2z"/></svg>`,
    tower: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M22 52V28h-2v-6h4v4h4v-6l4-6 4 6v6h4v-4h4v6h-2v24z"/><path d="M28 52V40h8v12"/><path d="M30 32h4"/></svg>`
  };

  // Placeholder portrait silhouette
  const BUST = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1"><circle cx="12" cy="9" r="4"/><path d="M5 20c0-4.5 3-6.6 7-6.6s7 2.1 7 6.6"/></svg>`;

  /* ---------------- i18n (UI only) ---------------- */
  const I18N = {
    ru: {
      brand: 'Опасные Создания',
      'nav.read': 'Книга', 'nav.home': 'Главная', 'nav.world': 'Вселенная',
      'u.hero.kicker': 'Энциклопедия мира',
      'u.hero.title': 'Вселенная',
      'u.hero.sub': 'Сказки здесь заканчиваются на границе леса, дальше выживают лишь хищники.',
      'u.search.ph': 'Поиск по локациям и понятиям…',
      'u.tab.world': 'Мир', 'u.tab.reapers': 'Жнецы', 'u.tab.chars': 'Персонажи', 'u.tab.gloss': 'Словарь',
      'u.world.kicker': 'Раздел\u00a0II', 'u.world.title': 'Мир', 'u.world.titleEn': 'The World',
      'u.world.continent.h': 'Континент Галлос',
      'u.world.continent.lead': 'Земля, разделённая надвое временем и кровью. Юг и Север заселялись в разное время и разными народами\u00a0— и оттого живут по-разному до сих пор.',
      'u.world.south.label': 'Юг',
      'u.world.south.text': 'Заселён около двух тысяч лет назад — переселенцами с Востока. Это древние дома, выросшие из старых корней: старые песни, старая вера, многовековые династии.',
      'u.world.north.label': 'Север',
      'u.world.north.text': 'Дикие земли, захваченные четыреста лет назад переселенцами с юга. Земли были поделены между 20 Державцами, но подчиняются единой короне.',
      'u.world.south.houses.h': 'Древние дома',
      'u.world.north.settlers.h': 'Переселенцы',
      'u.world.north.lords.h': 'Державцы Северных Земель',
      'u.world.east.label': 'Восток',
      'u.world.east.tag': 'Первое упоминание · Глава 11',
      'u.world.east.text': 'Древние города и вольные земли. Колыбель южных домов, откуда две тысячи лет назад пришли первые переселенцы. Земли, что не склонились ни перед короной Юга, ни перед короной Севера.',
      'u.world.map.cap': 'Континент Галлос',
      'u.world.continent.note': 'Действие первой книги разворачивается на Севере, в Торнхолле, куда принцессу Рэй привозят как невесту. Но корни самой Рэй — на Юге, в Ловарре, откуда она родом.',
      'u.world.realms.h': 'Явь и Навь',
      'u.world.yav.label': 'Явь', 'u.world.yav.text': 'Мир живых. Мир людей, дворов, войн и интриг.',
      'u.world.yav.subh': 'Порождения Яви',
      'u.world.yav.spawn': 'Мавки, волколаки, опустевшие и другая мелкая нечисть — порождения самой Яви. Бывшие люди, в которых примешалась навь. Переходные существа, не истинные обитатели Нави.',
      'u.world.nav.label': 'Навь', 'u.world.nav.text': 'Мир за гранью Яви — со своими законами и существами.',
      'u.world.nav.subh': 'Навьи Твари',
      'u.world.nav.guests': 'Трескуны, костоглоты, болотники — существа, попавшие в Явь через червоточины с верхнего слоя Нави.',
      'u.world.oro.h': 'Орочит и безопасные земли',
      'u.world.oro.lead': 'Ключ к безопасному миру — камень орочит. Нечисть не может его пройти.',
      'u.world.oro.p1': 'В Ловарре орочит добывают и встраивают в стены: пояс вокруг каждой деревни, камень в кладке городов. Поэтому на Юге безопасно — там не нужны жнецы, люди живут в покое за высокими стенами, и ловаррийки нечисти не боятся. Орочитом укрепляют и гробы: на Юге мёртвых не сжигают, как на Севере, а заключают в гробы из орочита.',
      'u.world.oro.p2': 'Торнхолл — полная противоположность. Дикие, опасные земли, кишащие нечистью, где жнецы — расходный материал.',
      'u.world.loc.h': 'Локации',
      'u.rea.kicker': 'Раздел\u00a0III', 'u.rea.title': 'Жнецы', 'u.rea.titleEn': 'Reapers',
      'u.rea.lead': 'Переплавленные люди с навьей кровью — оружие против нечисти.',
      'u.rea.p1': 'В основе жнеца — <b>ихтор</b>, чёрная кровь: стабилизированная навья кровь, которую вливают человеку при переплавке. Ихтор гуще человеческой крови, и оттого сердце жнеца бьётся медленно и редко. Эта же кровь даёт силу и выносливость, недоступную обычным людям, ускоренную регенерацию ран и притупляет тело: жнецы не чувствуют ни боли, ни холода.',
      'u.rea.p2': 'Запас сил жнецов конечен и ограничен <b>«Резервом»</b> — концентрацией навьей крови, стабильность которой поддерживается сумрачным зельем. Эта пропорция нестабильна: чёрная кровь стремится подчинить себе остатки красной. Если в пылу сражения этот критический лимит превышается, запускается необратимая реакция. Разум жнеца сгорает в Нави, а его тело превращается в пустую, хищную оболочку.',
      'u.rea.pull': 'Положение жнецов в обществе — в отчётных списках они числятся как <b>«имущество цитадели»</b> над конями и костоглотами.',
      'u.rea.ref': 'Первое упоминание — глава 1',
      'u.whi.h': 'Свистки-манилки',
      'u.whi.p1': 'Орудие охоты жнецов. В каждый свисток вложен кусочек призываемого существа, и его зов приманивает навью тварь — превращая хаос столкновения в бой по правилам жнецов, в охоту, а не в случайную резню.',
      'u.whi.ref': 'Первое упоминание — глава 2',
      'u.cha.kicker': 'Раздел\u00a0I', 'u.cha.title': 'Персонажи книги\u00a0I', 'u.cha.titleEn': 'Characters · Book I',
      'u.cha.sub': 'Люди, чьи судьбы переплелись на страницах истории.',
      'u.cha.tagline': 'Каждый из них уже сделал свой выбор.<br>Осталось узнать, кто переживёт его последствия.',
      'u.cta.read': 'Читать главу 1',
      'u.mentioned': 'Упоминаются',
      'u.glo.kicker': 'Раздел\u00a0IV', 'u.glo.title': 'Словарь', 'u.glo.titleEn': 'Glossary',
      'u.empty': 'Ничего не найдено.',
      'footer.follow': 'Следить за обновлениями'
    },
    en: {
      brand: 'Dangerous Creatures',
      'nav.read': 'Read', 'nav.home': 'Home', 'nav.world': 'Universe',
      'u.hero.kicker': 'World Compendium',
      'u.hero.title': 'Universe',
      'u.hero.sub': 'The world of Dangerous Creatures — the continent of Gallos, divided by time and blood.',
      'u.search.ph': 'Search locations and terms…',
      'u.tab.world': 'World', 'u.tab.reapers': 'Reapers', 'u.tab.chars': 'Characters', 'u.tab.gloss': 'Glossary',
      'u.world.kicker': 'Section\u00a0II', 'u.world.title': 'The World', 'u.world.titleEn': '',
      'u.world.continent.h': 'The Continent of Gallos',
      'u.world.continent.lead': 'A land split in two by time and blood. South and North were settled at different times by different peoples — and so they live differently to this day.',
      'u.world.south.label': 'South',
      'u.world.south.text': 'Settled some two thousand years ago by migrants from the East. These are ancient houses grown from old roots: old songs, old faith, dynasties centuries deep.',
      'u.world.north.label': 'North',
      'u.world.north.text': 'Wild lands taken four hundred years ago by settlers from the South. They were divided among 20 lords, yet answer to a single crown.',
      'u.world.south.houses.h': 'Ancient Houses',
      'u.world.north.settlers.h': 'Settlers',
      'u.world.north.lords.h': 'Lords of the North',
      'u.world.east.label': 'East',
      'u.world.east.tag': 'First mention · Chapter 11',
      'u.world.east.text': 'Ancient cities and free lands. The cradle of the southern houses, from which the first settlers came two thousand years ago. Lands that bowed neither to the crown of the South nor to the crown of the North.',
      'u.world.map.cap': 'The Continent of Gallos',
      'u.world.continent.note': 'The first book takes place in the North, in Thornhall, where Princess Rey is brought as a bride. But Rey’s own roots are in the South, in Lovarra, where she was born.',
      'u.world.realms.h': 'Yav & Nav',
      'u.world.yav.label': 'Yav', 'u.world.yav.text': 'The world of the living. The world of men, courts, wars and intrigue.',
      'u.world.yav.subh': 'Spawn of Yav',
      'u.world.yav.spawn': 'Mavkas, wolf-walkers, the hollowed and other lesser fiends are spawn of Yav itself. Former people with the Nav mixed into them. Creatures in between, not true dwellers of the Nav.',
      'u.world.nav.label': 'Nav', 'u.world.nav.text': 'The world beyond Yav — with laws and creatures of its own.',
      'u.world.nav.subh': 'Creatures of the Nav',
      'u.world.nav.guests': 'Cracklers, bone-gnawers, bog-dwellers — creatures that slipped into Yav through wormholes from the upper layer of the Nav.',
      'u.world.oro.h': 'Orochit & the Safe Lands',
      'u.world.oro.lead': 'The key to a safe world is orochit stone. No fiend can pass it.',
      'u.world.oro.p1': 'In Lovarra orochit is mined and built into walls: a belt around every village, stone in the masonry of the cities. That is why the South is safe — no reapers are needed there, people live in peace behind high walls, and Lovarran women do not fear the fiends. Coffins are reinforced with it too: in the South the dead are not burned as in the North but sealed in coffins of orochit.',
      'u.world.oro.p2': 'Thornhall is the exact opposite. Wild, dangerous lands swarming with fiends, where reapers are expendable material.',
      'u.world.loc.h': 'Locations',
      'u.rea.kicker': 'Section\u00a0III', 'u.rea.title': 'Reapers', 'u.rea.titleEn': '',
      'u.rea.lead': 'People reforged with the blood of the Nav — a weapon against the fiends.',
      'u.rea.p1': 'At the core of a reaper lies <b>ichtor</b>, black blood: stabilised blood of the Nav poured into a human during the reforging. Ichtor is thicker than human blood, and so a reaper’s heart beats slowly and rarely. That same blood grants strength and endurance beyond ordinary men, accelerated healing of wounds, and dulls the body: reapers feel neither pain nor cold.',
      'u.rea.p2': 'A reaper’s strength is finite and bounded by the <b>“Reserve”</b> — the concentration of Nav blood, held stable by the dusk potion. That proportion is unstable: the black blood strives to subdue what remains of the red. If this critical limit is crossed in the heat of battle, an irreversible reaction begins. The reaper’s mind burns away in the Nav, and his body becomes an empty, predatory shell.',
      'u.rea.pull': 'The standing of reapers in society — in the ledgers they are listed as <b>“property of the Citadel”</b>, above horses and bone-gnawers.',
      'u.rea.ref': 'First mention — chapter 1',
      'u.whi.h': 'Lure-Whistles',
      'u.whi.p1': 'The reapers’ hunting tool. Each whistle holds a fragment of the creature it calls, and its voice lures a Nav beast in — turning the chaos of an encounter into a fight on the reapers’ terms, a hunt rather than a random slaughter.',
      'u.whi.ref': 'First mention — chapter 2',
      'u.cha.kicker': 'Section\u00a0I', 'u.cha.title': 'Characters · Book I', 'u.cha.titleEn': '',
      'u.cha.sub': 'People whose fates intertwined upon the pages of history.',
      'u.cha.tagline': 'Each of them has already made their choice.<br>What remains is to see who survives its consequences.',
      'u.cta.read': 'Read chapter 1',
      'u.mentioned': 'Mentioned',
      'u.glo.kicker': 'Section\u00a0IV', 'u.glo.title': 'Glossary', 'u.glo.titleEn': '',
      'u.empty': 'Nothing found.',
      'footer.follow': 'Follow for updates'
    }
  };

  /* ---------------- helpers ---------------- */
  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const norm = (s) => (s || '').toLowerCase().replace(/ё/g, 'е').trim();

  /* ---------------- render: locations ---------------- */
  function renderPlaces() {
    const grid = $('#placesGrid');
    grid.innerHTML = LOCATIONS.map((l, i) => `
      <article class="u-place searchable" id="loc-${i}" data-search="${norm(l.name + ' ' + l.text)}">
        <div class="u-place-name"><span class="pin"></span>${l.name}</div>
        <p class="u-place-text">${l.text}</p>
      </article>`).join('');
  }

  /* ---------------- render: glossary ---------------- */
  function renderGloss() {
    const grid = $('#glossGrid');
    grid.innerHTML = GLOSSARY.map((g, i) => `
      <div class="u-term searchable" id="term-${i}" data-search="${norm(g.term + ' ' + g.def)}">
        <div class="u-term-head">
          <span class="u-term-name">${g.term}</span>
          ${g.ref ? `<span class="u-term-ref">${g.ref}</span>` : ''}
        </div>
        <p class="u-term-def">${g.def}</p>
      </div>`).join('');
  }

  /* ---------------- render: factions (characters) ---------------- */
  function renderFactions() {
    const root = $('#factionsRoot');
    root.innerHTML = FACTIONS.map(f => {
      const cards = f.main.map((p, i) => `
        <article class="u-pcard" id="char-${f.id}-${i}" data-search="${norm(p.name + ' ' + p.role + ' ' + (p.desc || ''))}">
          <div class="u-portrait2">
            ${p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy" />` : BUST}
            ${p.desc ? `<div class="u-pcard-over"><p class="u-pcard-desc">${p.desc}</p></div>` : ''}
          </div>
          <h3 class="u-pcard-name">${p.name}</h3>
          <div class="u-pcard-role">${p.role}</div>
        </article>`).join('');
      const ment = f.mentioned.map(m => `
        <div class="u-mentioned-item" data-search="${norm(m.name + ' ' + m.role)}"><b>${m.name}</b> · ${m.role}</div>`).join('');
      return `
        <section class="u-faction" data-faction="${f.id}">
          <div class="u-faction-head">
            <span class="u-crest" aria-hidden="true">${f.logo ? `<img src="${f.logo}" alt="" />` : (CRESTS[f.crest] || '')}</span>
            <div class="u-faction-titles">
              <div class="u-faction-name">${f.name}</div>
              <div class="u-faction-sub">${f.sub}</div>
            </div>
          </div>
          <div class="u-faction-rule"></div>
          <div class="u-faction-grid">${cards}</div>
          <div class="u-mentioned">
            <div class="u-mentioned-label" data-i18n="u.mentioned">Mentioned</div>
            <div class="u-mentioned-list">${ment}</div>
          </div>
        </section>`;
    }).join('');
  }

  /* ---------------- search ---------------- */
  let query = '';

  function applyState() {
    const q = norm(query);

    // characters: hide non-matching cards / mentioned; hide whole faction if empty
    $$('#factionsRoot .u-faction').forEach(fac => {
      let vis = 0;
      $$('.u-pcard', fac).forEach(el => {
        const show = !q || el.dataset.search.includes(q);
        el.classList.toggle('search-hidden', !show); if (show) vis++;
      });
      $$('.u-mentioned-item', fac).forEach(el => {
        const show = !q || el.dataset.search.includes(q);
        el.classList.toggle('search-hidden', !show); if (show) vis++;
      });
      fac.classList.toggle('search-hidden', !!q && vis === 0);
    });

    // locations: search only
    let lShown = 0;
    $$('#placesGrid .u-place').forEach(el => {
      const show = !q || el.dataset.search.includes(q);
      el.classList.toggle('search-hidden', !show);
      if (show) lShown++;
    });
    $('#placesEmpty').classList.toggle('is-shown', lShown === 0);

    // glossary: search only
    let gShown = 0;
    $$('#glossGrid .u-term').forEach(el => {
      const show = !q || el.dataset.search.includes(q);
      el.classList.toggle('search-hidden', !show);
      if (show) gShown++;
    });
    $('#glossEmpty').classList.toggle('is-shown', gShown === 0);
  }

  /* ---- unified search index + live dropdown ---- */
  const CAT = {
    ru: { char: 'Персонаж', ment: 'Упоминается', loc: 'Локация', term: 'Понятие' },
    en: { char: 'Character', ment: 'Mentioned', loc: 'Location', term: 'Term' }
  };
  const DIAMOND = `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="8" y="8" width="8" height="8" transform="rotate(45 12 12)"/></svg>`;
  const PIN = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>`;
  const BOOK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 5.5A2 2 0 0 1 6 4h6v15H6a2 2 0 0 0-2 1.5z"/><path d="M20 5.5A2 2 0 0 0 18 4h-6v15h6a2 2 0 0 1 2 1.5z"/></svg>`;
  const BUST2 = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="9" r="3.6"/><path d="M5 20c0-4.2 3-6.2 7-6.2s7 2 7 6.2"/></svg>`;

  let INDEX = [];
  function buildIndex() {
    const idx = [];
    LOCATIONS.forEach((l, i) => idx.push({
      catKey: 'loc', name: l.name, sub: '', text: l.text,
      img: '', elId: `loc-${i}`, section: 'world'
    }));
    GLOSSARY.forEach((g, i) => idx.push({
      catKey: 'term', name: g.term, sub: g.ref, text: g.def,
      img: '', elId: `term-${i}`, section: 'glossary'
    }));
    idx.forEach(e => {
      e._name = norm(e.name);
      e._all = norm(e.name + ' ' + e.sub + ' ' + e.text);
    });
    INDEX = idx;
  }

  function glyphFor(key) {
    return key === 'loc' ? PIN : key === 'term' ? BOOK : key === 'ment' ? BUST2 : DIAMOND;
  }

  function escapeHtml(s) {
    return (s || '').replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  }
  function highlight(text, rawq) {
    const esc = escapeHtml(text);
    const q = (rawq || '').trim();
    if (!q) return esc;
    try {
      const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
      return esc.replace(re, '<mark>$1</mark>');
    } catch (e) { return esc; }
  }
  function scoreOf(e, q) {
    if (e._name.startsWith(q)) return 0;
    if (e._name.includes(q)) return 1;
    if (norm(e.sub).includes(q)) return 2;
    return 3;
  }

  function initSearch() {
    const wrap = $('#searchWrap');
    const input = $('#searchInput');
    const go = $('#searchGo');
    const panel = $('#searchResults');
    buildIndex();

    let data = [];
    let cursor = -1;
    let open = false;

    function curLang() { return 'en'; }

    function position() {
      const r = input.getBoundingClientRect();
      panel.style.left = r.left + 'px';
      panel.style.width = r.width + 'px';
      const ph = panel.offsetHeight;
      const below = window.innerHeight - r.bottom - 16;
      const above = r.top - 16;
      // open upward when there isn't enough room beneath the field (it sits low in the hero)
      if (below >= Math.min(ph, 360) || below >= above) {
        panel.style.top = (r.bottom + 10) + 'px';
      } else {
        panel.style.top = Math.max(14, r.top - 10 - ph) + 'px';
      }
    }
    function openPanel() {
      if (!open) { panel.classList.add('is-open'); open = true; input.setAttribute('aria-expanded', 'true'); }
      position();
    }
    function closePanel() {
      if (!open) return;
      panel.classList.remove('is-open'); open = false; cursor = -1;
      input.setAttribute('aria-expanded', 'false');
    }

    function rowHtml(e, i, raw, lang) {
      const cat = CAT[lang][e.catKey] || '';
      const thumb = e.img
        ? `<span class="u-result-thumb"><img src="${e.img}" alt="" loading="lazy" /></span>`
        : `<span class="u-result-thumb">${glyphFor(e.catKey)}</span>`;
      const snippet = e.text || e.sub;
      const sub = (e.catKey === 'char' && e.sub) ? `<span style="color:var(--pearl-dim)">${highlight(e.sub, raw)}</span> — ` : '';
      const text = snippet ? `<div class="u-result-text">${e.text ? sub : ''}${highlight(snippet, raw)}</div>` : '';
      return `<button class="u-result" type="button" role="option" data-i="${i}">
        ${thumb}
        <span class="u-result-body">
          <span class="u-result-name">${highlight(e.name, raw)}<span class="u-result-cat">${cat}</span></span>
          ${text}
        </span>
      </button>`;
    }

    function render() {
      const raw = input.value;
      const q = norm(raw);
      if (!q) { closePanel(); panel.innerHTML = ''; return; }
      const lang = curLang();
      data = INDEX
        .filter(e => e._all.includes(q))
        .map(e => ({ e, s: scoreOf(e, q) }))
        .sort((a, b) => a.s - b.s || a.e._name.length - b.e._name.length)
        .slice(0, 12)
        .map(x => x.e);
      cursor = -1;

      if (!data.length) {
        panel.innerHTML = `<div class="u-results-empty">${'Nothing found'}</div>`;
      } else {
        const head = `<div class="u-results-head">${'Found'} · ${data.length}</div>`;
        panel.innerHTML = head + data.map((e, i) => rowHtml(e, i, raw, lang)).join('');
        $$('.u-result', panel).forEach((btn, i) => {
          btn.addEventListener('click', () => goTo(data[i]));
          btn.addEventListener('mousemove', () => setCursor(i));
        });
      }
      openPanel();
    }

    function setCursor(i) {
      cursor = i;
      $$('.u-result', panel).forEach((b, k) => b.classList.toggle('is-cursor', k === i));
    }
    function moveCursor(d) {
      if (!data.length) return;
      cursor = (cursor + d + data.length) % data.length;
      const rows = $$('.u-result', panel);
      rows.forEach((b, k) => b.classList.toggle('is-cursor', k === cursor));
      const el = rows[cursor];
      if (el) {
        const pr = panel.getBoundingClientRect(), er = el.getBoundingClientRect();
        if (er.bottom > pr.bottom) panel.scrollTop += er.bottom - pr.bottom + 8;
        else if (er.top < pr.top) panel.scrollTop -= pr.top - er.top + 8;
      }
    }

    function goTo(entry) {
      closePanel();
      input.blur();
      const cs = getComputedStyle(document.documentElement);
      const navH = parseInt(cs.getPropertyValue('--nav-h')) || 76;
      const tabsH = parseInt(cs.getPropertyValue('--tabs-h')) || 58;
      const offset = navH + tabsH + 26;
      const el = (entry.elId && document.getElementById(entry.elId)) || document.getElementById(entry.section);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      if (entry.elId) {
        const target = document.getElementById(entry.elId);
        if (target) {
          target.classList.remove('flash-target'); void target.offsetWidth;
          target.classList.add('flash-target');
          setTimeout(() => target.classList.remove('flash-target'), 1900);
        }
      }
    }

    function submit() {
      if (!data.length) return;
      goTo(data[cursor >= 0 ? cursor : 0]);
    }

    input.addEventListener('input', () => {
      wrap.classList.toggle('has-value', !!input.value.trim());
      render();
    });
    input.addEventListener('focus', () => { if (input.value.trim()) render(); });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); moveCursor(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); moveCursor(-1); }
      else if (e.key === 'Enter') { e.preventDefault(); submit(); }
      else if (e.key === 'Escape') {
        input.value = ''; wrap.classList.remove('has-value');
        closePanel(); panel.innerHTML = '';
      }
    });
    go.addEventListener('click', (e) => { e.preventDefault(); input.focus(); submit(); });

    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target) && !panel.contains(e.target)) closePanel();
    });
    window.addEventListener('scroll', () => { if (open) position(); }, { passive: true });
    window.addEventListener('resize', () => { if (open) position(); });
    // re-render labels on language switch while open
    window.addEventListener('uc:lang', () => { if (open) render(); });
  }

  /* ---------------- i18n ---------------- */
  function setLang(lang) {
    const dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (!(key in dict)) return;
      // elements that also carry an attr target handle below
      if (el.dataset.i18nAttr) return;
      // titles contain a nested .en span — only replace the leading text node
      const en = el.querySelector('.en');
      if (en) {
        // set first text node
        el.childNodes[0].nodeValue = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });
    $$('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (key in dict) el.innerHTML = dict[key];
    });
    $$('[data-i18n-attr]').forEach(el => {
      const attr = el.dataset.i18nAttr;
      const key = el.dataset.i18n;
      if (key in dict) el.setAttribute(attr, dict[key]);
    });
    $$('.lang button').forEach(b => b.classList.toggle('is-active', b.dataset.lang === lang));
    try { localStorage.setItem('lang', lang); } catch (e) {}
    window.dispatchEvent(new CustomEvent('uc:lang', { detail: lang }));
  }

  function initLang() {
    $$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
    setLang('en');
  }

  /* ---------------- nav / tabs / scrollspy ---------------- */
  function initNav() {
    const nav = $('#nav');
    const burger = $('#burger');
    burger.addEventListener('click', () => nav.classList.toggle('is-open'));
    $$('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));
  }

  function initScrollSpy() {
    const tabs = $$('.u-tab');
    const sections = $$('[data-section]');
    const byId = {};
    tabs.forEach(t => { byId[t.dataset.target] = t; });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          tabs.forEach(t => t.classList.remove('is-active'));
          const t = byId[e.target.id];
          if (t) t.classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(s => io.observe(s));
  }

  function initReveal() {
    const els = $$('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('is-in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
  }

  /* ---------------- boot ---------------- */
  function boot() {
    renderPlaces();
    renderGloss();
    initSearch();
    initNav();
    initScrollSpy();
    initReveal();
    initLang();
    applyState();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
