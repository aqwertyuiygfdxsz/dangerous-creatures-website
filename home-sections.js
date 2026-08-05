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
    {name:'Лоран',   role:'король Торнхолла', poster:'assets/chars/loran.jpg',   href:CHARS_HREF},
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
var FACTION_LABEL = { south:'Ловарра', north:'Торнхолл', reapers:'Цитадель' };

/* homepage cast — fixed order, faction label, role, hover line */
var CAST_HOME = [
  {name:'Рэй',     faction:'Ловарра', role:'принцесса',        poster:'assets/chars/ray.jpg',      hover:'Хочет стать королевой и найти убийцу брата.'},
  {name:'Тата',    faction:'Ловарра', role:'служанка принцессы', poster:'assets/chars/tata.jpg',     hover:'Хочет быть полезной для Рэй.'},
  {name:'Марк',     faction:'Жнецы',   role:'свита принцессы',    poster:'assets/chars/mark.jpg',     hover:'Скрывает от Рэй тайное задание — поиск культа.'},
  {name:'Криня',    faction:'Жнецы',   role:'свита принцессы',    poster:'assets/chars/krinya.jpg',   hover:'Пытается помочь принцессе узнать, кто стоит за убийством брата.'},
  {name:'Лоран',   faction:'Торнхолл', role:'король Торнхолла', poster:'assets/chars/loran.jpg',   hover:'Несёт корону своего брата.'},
  {name:'Ровенна', faction:'Торнхолл', role:'королева',        poster:'assets/chars/rovenna.jpg', hover:'Пытается сохранить наследие семьи.'},
  {name:'Азарин',  faction:'Горварины', role:'державец Морского Дома', poster:'assets/chars/azarin.jpg', hover:'Верит, что он — истинный король.'},
  {name:'Эсмар',    faction:'Восток',   role:'дочь императора · жена Азарина', poster:'assets/chars/esmar.jpg', hover:'Верит в Азарина и приход Кассии.'}
];

/* chapter card — vertical cover + caption below (realista episode style) */
function trailerBtns(s){
  if(!s.trailers||!s.trailers.length) return '';
  var IG='<svg class="ig-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>';
  return '<div class="ch-trailers">'+s.trailers.map(function(t){
    return '<a class="ch-trailer" href="'+t.url+'" target="_blank" rel="noopener" aria-label="'+t.label+'">'+IG+'<span>'+t.label+'</span></a>';
  }).join('')+'</div>';
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

  var BW = 1780, BH = 1300, C = 'assets/chars/', RS = 1.34;
  var NODES = [
    { id:'ray',    name:'Рэй',    role:'принцесса',        img:C+'ray-c.jpg',   x:430,  y:560, r:82, cls:'center' },
    { id:'loran',  name:'Лоран',  role:'король севера', img:C+'loran-c.jpg', x:960,  y:500, r:82, cls:'center' },
    { id:'azarin', name:'Азарин', role:'глава дома Горваринов,<br>считает себя истинным королём', img:C+'azarin-c.jpg',  x:1450, y:520, r:82, cls:'center' },
    { id:'rivald', name:'Ривальд',role:'король Ловарры',   img:C+'rivald.jpg',  x:300,  y:110, r:52 },
    { id:'daylan', name:'Дэйлан', role:'брат Рэй',         img:C+'daylan.jpg',  x:560,  y:250, r:52 },
    { id:'tata',   name:'Тата',   role:'служанка',         img:C+'tata-c.jpg',  x:170,  y:340, r:52 },
    { id:'marla',  name:'Марла',  role:'служанка',         img:C+'marla.jpg',   x:150,  y:600, r:52 },
    { id:'mark',   name:'Марк',   role:'жнец',             img:C+'mark.jpg',    x:360,  y:860, r:52 },
    { id:'krinya', name:'Криня',  role:'жнец',             img:C+'krinya-c.jpg',  x:640,  y:860, r:52 },
    { id:'yurt',   name:'Юрт',    role:'жнец',             img:C+'yurt.jpg',    x:920,  y:860, r:52 },
    { id:'comander',name:'Урман',role:'командир жнецов',   img:C+'comander.jpg',x:640,  y:1160,r:60, cls:'hub' },
    { id:'rovenna',name:'Ровенна',role:'мать Лорана,<br>оставила за собой титул королевы', img:C+'rovenna-c.png', x:960,  y:220, r:52 },
    { id:'garon',  name:'Гарон',  role:'советник и дядя короля', img:C+'garon-c.jpg',   x:1160, y:720, r:52 },
    { id:'morva',  name:'Морва',  role:'мать Ровенны',     img:C+'morva-c.png',   x:1170, y:150, r:52 },
    { id:'esmar',  name:'Эсмар',  role:'жена Азарина',     img:C+'esmar.jpg',   x:1650, y:290, r:52 },
    { id:'valran', name:'Валран', role:'отец Азарина',     img:C+'valran-c.jpg',x:1650, y:650, r:52 },
    { id:'harn',   name:'Харн',   role:'командующий флота',img:C+'harn.jpg',    x:1420, y:880, r:52 }
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

  svg.setAttribute('viewBox','0 0 '+BW+' '+BH);
  svg.setAttribute('width',BW); svg.setAttribute('height',BH);
  var byId = {}; NODES.forEach(function(n){ byId[n.id]=n; });

  function edgePath(a,b,curve){
    var x1=a.x,y1=a.y,x2=b.x,y2=b.y;
    var mx=(x1+x2)/2,my=(y1+y2)/2,dx=x2-x1,dy=y2-y1,len=Math.hypot(dx,dy)||1;
    var nx=-dy/len,ny=dx/len,k=(curve==null?0.14:curve)*len;
    return 'M'+x1+' '+y1+' Q'+(mx+nx*k)+' '+(my+ny*k)+' '+x2+' '+y2;
  }
  var edgeEls = EDGES.map(function(e){
    var a=byId[e[0]],b=byId[e[1]],spine=e[2]==='spine';
    var d=edgePath(a,b,spine?0.05:0.14);
    var g=document.createElementNS('http://www.w3.org/2000/svg','g');
    g.setAttribute('class','edge'+(spine?' spine':''));
    g.innerHTML='<path class="thread-glow" d="'+d+'"/><path class="thread-core" d="'+d+'"/>';
    edgeLayer.appendChild(g);
    return {g:g,a:e[0],b:e[1]};
  });
  var nodeEls = NODES.map(function(n){
    var el=document.createElement('div');
    el.className='t-node'+(n.cls?' '+n.cls:'');
    el.dataset.id=n.id;
    var r=(n.cls?n.r:n.r*1.28)*RS;
    el.style.left=(n.x-r)+'px'; el.style.top=(n.y-r)+'px';
    el.style.width=el.style.height=(r*2)+'px';
    el.innerHTML='<div class="disc">'+(n.img?'<img src="'+n.img+'" alt="'+n.name+'" loading="lazy">':BUST)+'</div><div class="nm">'+n.name+'</div><div class="role">'+n.role+'</div>';
    nodeLayer.appendChild(el);
    return el;
  });

  function neighbors(id){
    var s={}; s[id]=1;
    EDGES.forEach(function(e){ if(e[0]===id)s[e[1]]=1; if(e[1]===id)s[e[0]]=1; });
    return s;
  }
  function focus(id){
    stage.classList.add('focusing');
    edgeEls.forEach(function(e){ e.g.classList.toggle('is-hot', e.a===id||e.b===id); });
    var nb=neighbors(id);
    nodeEls.forEach(function(el){
      el.classList.toggle('is-dim', !nb[el.dataset.id]);
      el.classList.toggle('is-active', el.dataset.id===id);
    });
  }
  function unfocus(){
    stage.classList.remove('focusing');
    edgeEls.forEach(function(e){ e.g.classList.remove('is-hot'); });
    nodeEls.forEach(function(el){ el.classList.remove('is-dim','is-active'); });
  }
  nodeEls.forEach(function(el){
    el.addEventListener('mouseenter',function(){ focus(el.dataset.id); });
    el.addEventListener('mouseleave',unfocus);
    el.addEventListener('click',function(ev){
      // touch/tap: toggle focus without following through
      if(window.matchMedia('(hover:none)').matches){
        ev.preventDefault();
        if(el.classList.contains('is-active')) unfocus(); else focus(el.dataset.id);
      }
    });
  });

  function fit(){
    var s = frame.clientWidth / BW;
    stage.style.transform = 'scale('+s+')';
  }
  if(window.ResizeObserver){ new ResizeObserver(fit).observe(frame); }
  else { window.addEventListener('resize',fit); }
  fit();
}

document.addEventListener('DOMContentLoaded', function(){
  renderRails();
  initTabs();
  initTree();
});
})();
