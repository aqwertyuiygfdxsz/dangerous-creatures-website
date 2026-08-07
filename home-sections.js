(function(){
'use strict';

/* ---------------- Главы (chapter covers) ---------------- */
var SERIES = [
  {num:'01',poster:'assets/cov_1.png',ru:'Погребальный Звон',en:'The Death Knell',chapterHref:'read.html#ch1',trailers:[{label:'Трейлер главы',url:'https://www.instagram.com/reel/DUMLaL-jmFT/'}]},
  {num:'02',poster:'assets/cov_2.png',ru:'Лунный Цвет',en:'Moon Flower',chapterHref:'read.html#ch2',trailers:[{label:'Трейлер · Часть 1 (Лана)',url:'https://www.instagram.com/reel/DWI4vEZDh1Q/'},{label:'Трейлер · Часть 2 (Рэй)',url:'https://www.instagram.com/reel/DZ2d_60u0l1/'}]},
  {num:'03',poster:'assets/cov_3.png',ru:'Пепел Обещаний',en:'Ashes of Promises',chapterHref:'read.html#ch3',trailers:[{label:'Трейлер главы',url:'https://www.instagram.com/reel/Dao44UGO8H6/'}]},
  {num:'04',poster:'assets/cov_4.png',ru:'Тропа Мертвецов',en:'Path of the Dead',chapterHref:'read.html#ch4',trailers:[{label:'Трейлер главы',url:'https://www.instagram.com/reel/Da7NDN1hlb6/'}]},
  {num:'05',poster:'assets/cov_5.png',ru:'Эхо Воспоминаний',en:'Echo of Memories',chapterHref:'read.html#ch5',trailers:[{label:'Трейлер главы',url:'https://www.instagram.com/reel/DbKjiY_hXpv/'}]},
  {num:'06',poster:'assets/cov_6.png',ru:'Скованные Навью',en:'Bound by the Nav',chapterHref:'read.html#ch6'},
  {num:'07',poster:'assets/cov_7.png',ru:'Молвь или Дело',en:'Coming soon',chapterHref:'read.html',soon:true}
];

/* ---------------- Персонажи (по фракциям) ---------------- */
var CHARS_HREF = 'universe.html#characters';
var LOOKS = {
  south:[
    {name:'Рэй',     role:'принцесса', poster:'assets/chars/ray.jpg',    href:CHARS_HREF}
  ],
  north:[
    {name:'Лоран',   role:'король Севера', poster:'assets/chars/loran.jpg',   href:CHARS_HREF},
    {name:'Ровенна', role:'королева',         poster:'assets/chars/rovenna.jpg', href:CHARS_HREF},
    {name:'Гарон',   role:'советник короля',  poster:'assets/chars/garon.jpg',   href:CHARS_HREF},
    {name:'Морва',   role:'мать Ровенны',     poster:'assets/chars/morva.jpg',   href:CHARS_HREF}
  ],
  reapers:[
    {name:'Командир', role:'глава жнецов',    poster:'assets/chars/comander.jpg', href:CHARS_HREF},
    {name:'Криня',    role:'жнец · Криворот', poster:'assets/chars/krinya.jpg',   href:CHARS_HREF},
    {name:'Марк',     role:'жнец · Маркош',   poster:'assets/chars/mark.jpg',     href:CHARS_HREF}
  ]
};
var FACTION_LABEL = { south:'Ловарра', north:'Север', reapers:'Цитадель' };

/* homepage cast — fixed order, faction label, role, hover line */
var CAST_HOME = [
  {name:'Рэй',     faction:'Ловарра', role:'принцесса',        poster:'assets/chars/ray.jpg',      hover:'Ищет убийц брата.'},
  {name:'Тата',    faction:'Ловарра', role:'южанка, подруга принцессы', poster:'assets/chars/tata.jpg',     hover:'Знает больше, чем следует.'},
  {name:'Марк',     faction:'Жнецы',   role:'свита принцессы',    poster:'assets/chars/mark.jpg',     hover:'Тайно ищет культ в стенах замка.'},
  {name:'Криня',    faction:'Жнецы',   role:'свита принцессы',    poster:'assets/chars/krinya.jpg',   hover:'Встречает опасность шуткой.'},
  {name:'Лоран',   faction:'Север', role:'король Севера', poster:'assets/chars/loran.jpg',   hover:'Унаследовал жену и корону брата.'},
  {name:'Ровенна', faction:'Север', role:'королева',        poster:'assets/chars/rovenna.jpg', hover:'Готова на всё ради семьи.'},
  {name:'Морва',   faction:'Север', role:'мать Ровенны',     poster:'assets/chars/morva.jpg',   hover:'Видит вещие сны.'},
  {name:'Азарин',  faction:'Горварины', role:'державец Морского Дома', poster:'assets/chars/azarin.jpg', hover:'Верит, что он — истинный король.'},
  {name:'Эсмар',    faction:'Восток',   role:'дочь императора · жена Азарина', poster:'assets/chars/esmar.jpg', hover:'Верит в Азарина и приход Кассии.'}
];

/* chapter card — vertical cover + caption below (realista episode style) */
function trailerBtns(s){
  if(s.soon) return '';
  var IG='<svg class="ig-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>';
  var BK='<svg class="ig-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 6.5C10.5 5 8 4.5 4.5 5v13c3.5-.5 6 0 7.5 1.5"/><path d="M12 6.5C13.5 5 16 4.5 19.5 5v13c-3.5-.5-6 0-7.5 1.5"/></svg>';
  var read='<a class="ch-trailer ch-trailer-read" href="'+s.chapterHref+'">'+BK+'<span>Читать главу</span></a>';
  var trailers=(s.trailers||[]).map(function(t){
    return '<a class="ch-trailer" href="'+t.url+'" target="_blank" rel="noopener" aria-label="'+t.label+'">'+IG+'<span>'+t.label+'</span></a>';
  }).join('');
  return '<div class="ch-trailers">'+read+trailers+'</div>';
}

function seriesCardHtml(s){
  var n = s.num.replace(/^0/,'');
  return '<div class="card'+(s.soon?' is-soon':'')+'" data-kind="series">'
    +'<div class="ch-cover">'
    +'<a class="ch-cover-link" href="'+s.chapterHref+'" aria-label="Глава '+n+'. '+s.ru+'"><img src="'+s.poster+'" alt="" loading="lazy"></a>'
    +(s.soon?'<span class="ch-soon">Скоро</span>':'')
    +trailerBtns(s)
    +'</div>'
    +'<a class="ch-cap" href="'+s.chapterHref+'">'
    +'<span class="ch-num">Глава '+s.num+'</span>'
    +'<h3 class="ch-title">'+s.ru+'</h3>'
    +(s.soon?'':'<p class="ch-desc">'+s.en+'</p>')
    +'</a>'
    +'</div>';
}

/* character portrait — name + role caption */
function lookCardHtml(item){
  return '<a class="card" data-kind="look" href="'+item.href+'" aria-label="'+item.name+'">'
    +'<img src="'+item.poster+'" alt="" loading="lazy">'
    +'<div class="card-tone"></div>'
    +'<div class="card-meta"><span class="card-kicker">'+item.name+'</span><p class="card-hook">'+item.role+'</p></div>'
    +'</a>';
}

/* character card — portrait + caption below + hover line */
function castCardHtml(item){
  return '<a class="card" data-kind="cast" href="'+item.href+'" aria-label="'+item.name+'">'
    +'<div class="ch-cover"><img src="'+item.poster+'" alt="" loading="lazy">'
    +'<div class="cast-hover"><p>'+item.hover+'</p></div>'
    +'</div>'
    +'<div class="ch-cap">'
    +'<span class="ch-num">'+item.faction+'</span>'
    +'<h3 class="ch-title">'+item.name+'</h3>'
    +'<p class="ch-desc">'+item.role+'</p>'
    +'</div>'
    +'</a>';
}

function renderRails(){
  var seriesRail = document.getElementById('seriesRail');
  if(seriesRail){
    seriesRail.insertAdjacentHTML('afterbegin', SERIES.map(seriesCardHtml).join(''));
  }
  var castRail = document.getElementById('castRail');
  if(castRail){
    castRail.insertAdjacentHTML('afterbegin', CAST_HOME.map(function(item){
      item.href = CHARS_HREF; return castCardHtml(item);
    }).join(''));
  }
  Object.keys(LOOKS).forEach(function(tab){
    var rail = document.querySelector('.looks-rail[data-tab="'+tab+'"]');
    if(rail) rail.insertAdjacentHTML('afterbegin', LOOKS[tab].map(lookCardHtml).join(''));
  });
}

/* ---------------- Character tabs ---------------- */
function initTabs(){
  var tabs = document.querySelectorAll('.looks-tab');
  var rails = document.querySelectorAll('.looks-rail');
  tabs.forEach(function(btn){
    btn.addEventListener('click', function(){
      var target = btn.dataset.target;
      tabs.forEach(function(b){ b.setAttribute('aria-selected', b===btn ? 'true':'false'); });
      rails.forEach(function(r){ r.classList.toggle('is-active', r.dataset.tab===target); });
    });
  });
}

/* ---------------- Дерево связей (relations tree) ---------------- */
function initTree(){
  var frame = document.getElementById('treeFrame');
  var stage = document.getElementById('treeStage');
  var svg = document.getElementById('treeThreads');
  var edgeLayer = document.getElementById('treeEdges');
  var nodeLayer = document.getElementById('treeNodes');
  if(!frame || !stage) return;

  var C = 'assets/chars/', RS = 1.34, RSM = 1.12;
  var DESK = { BW:1780, BH:1300 }, MOB = { BW:760, BH:2420 };
  var NODES = [
    { id:'ray',    name:'Рэй',    role:'принцесса Ловарры', img:C+'ray-c.jpg',   r:82, cls:'center', x:430,  y:560,  mx:380, my:400 },
    { id:'loran',  name:'Лоран',  role:'король севера', img:C+'loran-c.jpg', r:82, cls:'center', x:960,  y:500,  mx:380, my:1240 },
    { id:'azarin', name:'Азарин', role:'глава дома Горваринов', img:C+'azarin-c.jpg', r:82, cls:'center', x:1450, y:520,  mx:380, my:1900 },
    { id:'rivald', name:'Ривальд',role:'король Ловарры',   img:C+'rivald.jpg',  r:52, x:300,  y:110,  mx:230, my:120 },
    { id:'daylan', name:'Дэйлан', role:'брат Рэй',         img:C+'daylan.jpg',  r:52, x:560,  y:250,  mx:530, my:120 },
    { id:'tata',   name:'Тата',   role:'служанка',         img:C+'tata-c.jpg',  r:52, x:170,  y:340,  mx:175, my:380 },
    { id:'marla',  name:'Марла',  role:'служанка',         img:C+'marla.jpg',   r:52, x:150,  y:600,  mx:175, my:620 },
    { id:'mark',   name:'Марк',   role:'жнец',             img:C+'mark.jpg',    r:52, x:360,  y:860,  mx:340, my:680 },
    { id:'krinya', name:'Криня',  role:'жнец',             img:C+'krinya-c.jpg',r:52, x:640,  y:860,  mx:525, my:660 },
    { id:'yurt',   name:'Юрт',    role:'жнец',             img:C+'yurt.jpg',    r:52, x:920,  y:860,  mx:600, my:370 },
    { id:'comander',name:'Урман',role:'командир жнецов',   img:C+'comander.jpg',r:60, cls:'hub', x:640, y:1160, mx:380, my:900 },
    { id:'rovenna',name:'Ровенна',role:'мать Лорана', img:C+'rovenna-c.png', r:52, x:960,  y:220,  mx:195, my:1140 },
    { id:'garon',  name:'Гарон',  role:'советник и дядя короля', img:C+'garon-c.jpg', r:52, x:1160, y:720,  mx:565, my:1160 },
    { id:'morva',  name:'Морва',  role:'мать Ровенны',     img:C+'morva-c.png', r:52, x:1170, y:150,  mx:200, my:1440 },
    { id:'esmar',  name:'Эсмар',  role:'жена Азарина',     img:C+'esmar.jpg',   r:52, x:1650, y:290,  mx:145, my:1760 },
    { id:'valran', name:'Валран', role:'отец Азарина',     img:C+'valran-c.jpg',r:52, x:1650, y:650,  mx:615, my:1760 },
    { id:'harn',   name:'Харн',   role:'командующий флота Горваринов',img:C+'harn.jpg',    r:52, x:1420, y:880,  mx:380, my:2270 }
  ];
  var EDGES = [
    ['ray','loran','spine'], ['loran','azarin','spine'],
    ['ray','rivald'], ['ray','daylan'], ['ray','tata'], ['ray','marla'], ['ray','mark'], ['ray','krinya'], ['ray','yurt'],
    ['mark','comander'], ['krinya','comander'], ['yurt','comander'],
    ['mark','krinya'], ['krinya','yurt'], ['mark','yurt'],
    ['loran','rovenna'], ['loran','garon'], ['rovenna','morva'],
    ['azarin','esmar'], ['azarin','valran'], ['azarin','harn']
  ];
  var BUST = '<span class="ph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1"><circle cx="12" cy="9" r="4"/><path d="M5 20c0-4.5 3-6.6 7-6.6s7 2.1 7 6.6"/></svg></span>';

  var svgns='http://www.w3.org/2000/svg';
  var byId = {}; NODES.forEach(function(n){ byId[n.id]=n; });

  /* first-dialogue quotes for character pairs */
  var REL_RAW = [
    ['loran','ray','Свадебный день · Торнхолл','Лоран','Ты красивая. Такой лоб высокий'],
    ['mark','ray','Первая совместная дорога','Рэй','Королём себя возомнил?! Я впереди, ты — на шаг позади.'],
    ['morva','ray','Первая встреча','Морва','Твоему отцу повезло сбыть такую прореху в чужую казну.'],
    ['ray','rovenna','Спор о законах Севера','Рэй','Ваша трактовка собственных законов восхищает.'],
    ['krinya','ray','В покоях Рэй','Криня','Ну и покои у вас! В таких и умереть не жаль.'],
    ['krinya','mark','Одна из первых перепалок','Марк','Опять волчьих ягод нажрался? Мавки не говорят.'],
    ['comander','mark','Разговор с командиром','Командир','Ты ценный, но не незаменимый.'],
    ['azarin','esmar','После спасения в море','Азарин','Мне не нужен выкуп. Я хочу сделать тебя своей королевой.'],
    ['garon','ray','Первая встреча','Рэй подумала','Слишком любезен. Значит, что-то скрывает.'],
    ['comander','rovenna','Первая встреча','Ровенна','Урману я доверяю больше.'],
    ['morva','rovenna','После приезда Рэй','Морва','Отошли её отцу, пока беда не случилась.'],
    ['loran','morva','','Морва','В следующий раз тебя разбудит не сапог Гарона, а нож Горваринов в боку.'],
    ['loran','rovenna','','Лоран','Вы уже достаточно насоветовали. Это мое решение.'],
    ['loran','harn','','Харн','Мы получим свое. А иначе Азарин заберет твой трон.'],
    ['garon','harn','','Харн','Старый язык, контроль над проливом и полная автономия.'],
    ['garon','morva','Разговор при дворе','Морва','Если я спрошу тебя, ты услышишь советника или Гарона?'],
    ['garon','rovenna','После спасения','Ровенна','В следующий раз, когда захотите поблагодарить богов, просто скажите: спасибо, Ровенна.'],
    ['marla','tata','В покоях Рэй','Марла','Я не о том беспокоюсь, а о том, чтобы ты помелом своим секреты госпожи не растрепала.'],
    ['comander','garon','Разговор о молодых правителях','Гарон','Молодые они — что король, что твой Воевластный.'],
    ['ray','rivald','Первая встреча','Ривальд','Когда армия, Рэй?'],
    ['daylan','ray','Перед поездкой','Дэйлан','Привезёшь ножик из небесного железа?'],
    ['marla','ray','До отъезда на Север','Марла','Корону-то за что в печь?!'],
    ['ray','tata','До отъезда на Север','Тата','Я тут такое узнала!'],
    ['mark','yurt','','Юрт','Тоже мне работа — стену подпирать. Сейчас бы кубок вина да девку покрепче…'],
    ['comander','yurt','','Юрт','Погоди, командир, мы так не договаривались.'],
    ['krinya','yurt','','Криня','Да чё ты, Юрт? Разнылся, как бабка старая.']
  ];
  function keyFor(a,b){ return [a,b].slice().sort().join('|'); }
  var REL={}; REL_RAW.forEach(function(r){ REL[keyFor(r[0],r[1])]={context:r[2],speaker:r[3],quote:r[4]}; });

  function edgePath(x1,y1,x2,y2,curve){
    var mx=(x1+x2)/2,my=(y1+y2)/2,dx=x2-x1,dy=y2-y1,len=Math.hypot(dx,dy)||1;
    var nx=-dy/len,ny=dx/len,k=curve*len;
    return 'M'+x1+' '+y1+' Q'+(mx+nx*k)+' '+(my+ny*k)+' '+x2+' '+y2;
  }
  var edgeEls = EDGES.map(function(e){
    var spine=e[2]==='spine';
    var g=document.createElementNS(svgns,'g');
    g.setAttribute('class','edge'+(spine?' spine':''));
    g.innerHTML='<path class="thread-glow"/><path class="thread-core"/>';
    edgeLayer.appendChild(g);
    return {g:g,glow:g.querySelector('.thread-glow'),core:g.querySelector('.thread-core'),a:e[0],b:e[1],spine:spine};
  });
  var nodeEls = NODES.map(function(n){
    var el=document.createElement('div');
    el.className='t-node'+(n.cls?' '+n.cls:'');
    el.dataset.id=n.id;
    el.innerHTML='<div class="disc">'+(n.img?'<img src="'+n.img+'" alt="'+n.name+'" loading="lazy">':BUST)+'</div><div class="nm">'+n.name+'</div><div class="role">'+n.role+'</div>';
    nodeLayer.appendChild(el);
    return {el:el,n:n};
  });

  /* highlighted line for the selected pair */
  var selLine=document.createElementNS(svgns,'path');
  selLine.setAttribute('class','tree-sel-line');
  svg.appendChild(selLine);

  var panel=document.getElementById('treePanel');
  var hint=document.getElementById('treeHint');
  var tpChips=document.getElementById('tpChips');
  var tpContext=document.getElementById('tpContext');
  var tpQuote=document.getElementById('tpQuote');
  var selected=[];

  function chip(id){
    var n=byId[id];
    return '<span class="tp-chip"><span class="tp-chip-img">'+(n.img?'<img src="'+n.img+'" alt="'+n.name+'">':'')+'</span><span class="tp-chip-nm">'+n.name+'</span></span>';
  }
  function drawSelLine(){
    if(selected.length!==2){ selLine.classList.remove('on'); return; }
    var m=curMobile, a=byId[selected[0]], b=byId[selected[1]];
    var ax=m?a.mx:a.x, ay=m?a.my:a.y, bx=m?b.mx:b.x, by=m?b.my:b.y;
    selLine.setAttribute('d', edgePath(ax,ay,bx,by,0.12));
    selLine.classList.add('on');
  }
  function positionPanel(){
    if(selected.length!==2){ panel.classList.remove('float-on'); return; }
    var m=curMobile, rs=m?RSM:RS, scale=frame.clientWidth/curBW;
    function C(n){ var cx=(m?n.mx:n.x)*scale, cy=(m?n.my:n.y)*scale, r=(n.cls?n.r:n.r*1.28)*rs*scale; return {x:cx,y:cy,r:r}; }
    var A=C(byId[selected[0]]), B=C(byId[selected[1]]);
    var fw=frame.clientWidth, fh=frame.clientHeight;
    panel.classList.add('float-on');
    var pw=panel.offsetWidth, ph=panel.offsetHeight, gap=20, pad=6;
    var minX=Math.min(A.x-A.r,B.x-B.r), maxX=Math.max(A.x+A.r,B.x+B.r);
    var minY=Math.min(A.y-A.r,B.y-B.r), maxY=Math.max(A.y+A.r,B.y+B.r);
    var midX=(A.x+B.x)/2, midY=(A.y+B.y)/2;
    var cand=[
      {x:maxX+gap+pw/2, y:midY}, {x:minX-gap-pw/2, y:midY},
      {x:midX, y:maxY+gap+ph/2}, {x:midX, y:minY-gap-ph/2},
      {x:pw/2+pad, y:ph/2+pad}, {x:fw-pw/2-pad, y:ph/2+pad},
      {x:pw/2+pad, y:fh-ph/2-pad}, {x:fw-pw/2-pad, y:fh-ph/2-pad},
      {x:midX, y:ph/2+pad}, {x:midX, y:fh-ph/2-pad}
    ];
    var labelPad=34*scale; // discs + name label roughly
    function overlap(c){
      var l=c.x-pw/2, r=c.x+pw/2, t=c.y-ph/2, bo=c.y+ph/2, s=0;
      [A,B].forEach(function(n){
        var nl=n.x-n.r, nr=n.x+n.r, nt=n.y-n.r, nb=n.y+n.r+labelPad;
        var ox=Math.max(0,Math.min(r,nr)-Math.max(l,nl)), oy=Math.max(0,Math.min(bo,nb)-Math.max(t,nt));
        s+=ox*oy;
      });
      return s;
    }
    var best=null, bestScore=Infinity;
    cand.forEach(function(c,i){
      var x=Math.max(pw/2+pad, Math.min(c.x, fw-pw/2-pad));
      var y=Math.max(ph/2+pad, Math.min(c.y, fh-ph/2-pad));
      var cc={x:x,y:y}, sc=overlap(cc)+i*0.001;
      if(sc<bestScore){ bestScore=sc; best=cc; }
    });
    panel.style.left=best.x+'px'; panel.style.top=best.y+'px';
  }
  function updatePanel(){
    if(selected.length<2){
      panel.classList.remove('float-on');
      hint.textContent = selected.length===1
        ? 'Выбран(а) '+byId[selected[0]].name+' — теперь выберите второго героя.'
        : 'Выберите двух героев — нажмите на портрет, затем на второй.';
      return;
    }
    var a=selected[0], b=selected[1], rel=REL[keyFor(a,b)];
    hint.textContent='Нажмите на пустое место, чтобы сбросить.';
    tpQuote.classList.add('is-changing');
    setTimeout(function(){
      tpChips.innerHTML=chip(a)+'<span class="tp-x" aria-hidden="true">—</span>'+chip(b);
      if(rel){
        tpQuote.innerHTML=(rel.speaker?'<span class="tp-sp">'+rel.speaker+':</span> ':'')+'«'+rel.quote+'»';
      } else {
        tpQuote.innerHTML='Их первая сцена пока не раскрыта.';
      }
      tpQuote.classList.remove('is-changing');
      positionPanel();
    },150);
  }
  function renderSel(){
    nodeEls.forEach(function(item){
      var id=item.n.id, sel=selected.indexOf(id)>-1;
      item.el.classList.toggle('is-sel', sel);
      item.el.classList.toggle('is-dim', selected.length===2 && !sel);
    });
    edgeEls.forEach(function(e){ e.g.classList.toggle('is-hot', selected.indexOf(e.a)>-1 && selected.indexOf(e.b)>-1); });
    stage.classList.toggle('focusing', selected.length>0);
    stage.classList.toggle('paired', selected.length===2);
    drawSelLine();
    updatePanel();
  }
  function selectNode(id){
    var i=selected.indexOf(id);
    if(i>-1) selected.splice(i,1);
    else if(selected.length<2) selected.push(id);
    else selected=[id];
    renderSel();
  }
  nodeEls.forEach(function(item){
    item.el.addEventListener('click',function(ev){ ev.stopPropagation(); selectNode(item.n.id); });
  });
  frame.addEventListener('click',function(ev){
    if(!ev.target.closest('.t-node') && selected.length){ selected=[]; renderSel(); }
  });

  function isMobile(){ return window.matchMedia('(max-width:880px)').matches; }
  var curBW = DESK.BW, curMobile = null;

  function layout(){
    var m = isMobile(), dim = m?MOB:DESK, rs = m?RSM:RS;
    curBW = dim.BW; curMobile = m;
    svg.setAttribute('viewBox','0 0 '+dim.BW+' '+dim.BH);
    svg.setAttribute('width',dim.BW); svg.setAttribute('height',dim.BH);
    stage.style.width=dim.BW+'px'; stage.style.height=dim.BH+'px';
    frame.style.aspectRatio = dim.BW+' / '+dim.BH;
    edgeEls.forEach(function(e){
      var a=byId[e.a], b=byId[e.b];
      var ax=m?a.mx:a.x, ay=m?a.my:a.y, bx=m?b.mx:b.x, by=m?b.my:b.y;
      var d=edgePath(ax,ay,bx,by, e.spine?0.05:(m?0.10:0.14));
      e.glow.setAttribute('d',d); e.core.setAttribute('d',d);
    });
    nodeEls.forEach(function(item){
      var n=item.n, el=item.el, cx=m?n.mx:n.x, cy=m?n.my:n.y;
      var r=(n.cls?n.r:n.r*1.28)*rs;
      el.style.left=(cx-r)+'px'; el.style.top=(cy-r)+'px';
      el.style.width=el.style.height=(r*2)+'px';
    });
    drawSelLine();
    fit();
  }
  function fit(){ stage.style.transform = 'scale('+(frame.clientWidth/curBW)+')'; positionPanel(); }
  function onResize(){ if(isMobile()!==curMobile) layout(); else fit(); }
  if(window.ResizeObserver){ new ResizeObserver(onResize).observe(frame); }
  else { window.addEventListener('resize',onResize); }
  layout();
  renderSel();
}

document.addEventListener('DOMContentLoaded', function(){
  renderRails();
  initTabs();
  initTree();
});
})();
