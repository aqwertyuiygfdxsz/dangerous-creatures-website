(function(){
'use strict';

/* ---------------- Главы (chapter covers) ---------------- */
var SERIES = [
  {num:'01',poster:'assets/cov_1.png',chapterHref:'read.html#ch1'},
  {num:'02',poster:'assets/cov_2.png',chapterHref:'read.html#ch2'},
  {num:'03',poster:'assets/cov_3.png',chapterHref:'read.html#ch3'},
  {num:'04',poster:'assets/cov_4.png',chapterHref:'read.html#ch4'},
  {num:'05',poster:'assets/cov_5.png',chapterHref:'read.html#ch5'},
  {num:'06',poster:'assets/cov_6.png',chapterHref:'read.html#ch6'}
];

/* ---------------- Персонажи (по фракциям) ---------------- */
var CHARS_HREF = 'universe.html#characters';
var LOOKS = {
  south:[
    {name:'Рэй',     role:'принцесса', poster:'assets/chars/ray.jpg',    href:CHARS_HREF},
    {name:'Ривальд', role:'король',    poster:'assets/chars/rivald.jpg', href:CHARS_HREF},
    {name:'Марла',   role:'служанка',  poster:'assets/chars/marla.jpg',  href:CHARS_HREF},
    {name:'Тата',    role:'служанка',  poster:'assets/chars/tata.jpg',   href:CHARS_HREF}
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
    {name:'Марк',     role:'жнец · Маркош',   poster:'assets/chars/mark.jpg',     href:CHARS_HREF},
    {name:'Юрт',      role:'жнец',            poster:'assets/chars/urt.jpg',      href:CHARS_HREF}
  ]
};

/* chapter cover — no text overlay; title + number live on the artwork */
function seriesCardHtml(s){
  return '<a class="card" data-kind="series" href="'+s.chapterHref+'" aria-label="Глава '+s.num.replace(/^0/,'')+'">'
    +'<img src="'+s.poster+'" alt="" loading="lazy">'
    +'</a>';
}

/* character portrait — name + role caption */
function lookCardHtml(item){
  return '<a class="card" data-kind="look" href="'+item.href+'" aria-label="'+item.name+'">'
    +'<img src="'+item.poster+'" alt="" loading="lazy">'
    +'<div class="card-tone"></div>'
    +'<div class="card-meta"><span class="card-kicker">'+item.name+'</span><p class="card-hook">'+item.role+'</p></div>'
    +'</a>';
}

function renderRails(){
  var seriesRail = document.getElementById('seriesRail');
  if(seriesRail){
    seriesRail.insertAdjacentHTML('afterbegin', SERIES.map(seriesCardHtml).join(''));
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

document.addEventListener('DOMContentLoaded', function(){
  renderRails();
  initTabs();
});
})();
