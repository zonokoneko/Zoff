// ナビゲーションバー固定
$(document).ready(function () { $("header").frix(); });

// トレンド
$('.trend-img').vegas({
  slides: [
    { src: 'image/article_trend_image01@2x.jpg' },
    { src: 'image/article_trend_image02@2x.jpg' },
  ],
  transition: 'fade',
  timer: false,
  transitionDuration: 1000,
  delay: 3000,
});

$('.trendItems .images a').vegas({
  slides: [
    { src: 'image/ZJ71017-B-1_01@2x.jpg' },
    { src: 'image/ZJ71017-C-1A_01@2x.jpg' },
  ],
  transition: 'fade',
  timer: false,
  transitionDuration: 1000,
  delay: 3000,
});

jQuery(function ($) {
  setAutoColorChange();

  function setAutoColorChange(index) {
    var colorlist = ["#E9C24F", "#D9E4EA"];
    if (!index || index > (colorlist.length - 1)) {
      index = 0;
    }
    var color = colorlist[index];
    $('.trend .slide-btn-left').animate({
      backgroundColor: color
    }, 3000);
    setAutoColorChange(++index);
  }
});

jQuery(function ($) {
  setAutoColorChange();

  function setAutoColorChange(index) {
    var colorlist = ["#D9E4EA", "#E9C24F"];
    if (!index || index > (colorlist.length - 1)) {
      index = 0;
    }
    var color = colorlist[index];
    $('.trend .slide-btn-right').animate({
      backgroundColor: color
    }, 3000);
    setAutoColorChange(++index);
  }
});

// ソフト
$('.soft-img').vegas({
  slides: [
    { src: 'image/article_soft_image01@2x.jpg' },
    { src: 'image/article_soft_image02@2x.jpg' },
  ],
  transition: 'fade',
  timer: false,
  transitionDuration: 1000,
  delay: 3000,
});

jQuery(function ($) {
  setAutoColorChange();

  function setAutoColorChange(index) {
    var colorlist = ["#D4858B", "#D9E4EA"];
    if (!index || index > (colorlist.length - 1)) {
      index = 0;
    }
    var color = colorlist[index];
    $('.soft .slide-btn-left').animate({
      backgroundColor: color
    }, 3000);
    setAutoColorChange(++index);
  }
});

jQuery(function ($) {
  setAutoColorChange();

  function setAutoColorChange(index) {
    var colorlist = ["#D9E4EA", "#D4858B"];
    if (!index || index > (colorlist.length - 1)) {
      index = 0;
    }
    var color = colorlist[index];
    $('.soft .slide-btn-right').animate({
      backgroundColor: color
    }, 3000);
    setAutoColorChange(++index);
  }
});


// ナチュラル
$('.natural-img').vegas({
  slides: [
    { src: 'image/article_natural_image01@2x.jpg' },
    { src: 'image/article_natural_image02@2x.jpg' },
  ],
  transition: 'fade',
  timer: false,
  transitionDuration: 1000,
  delay: 3000,
});

jQuery(function ($) {
  setAutoColorChange();

  function setAutoColorChange(index) {
    var colorlist = ["#8E729A", "#D9E4EA"];
    if (!index || index > (colorlist.length - 1)) {
      index = 0;
    }
    var color = colorlist[index];
    $('.natural .slide-btn-left').animate({
      backgroundColor: color
    }, 3000);
    setAutoColorChange(++index);
  }
});

jQuery(function ($) {
  setAutoColorChange();

  function setAutoColorChange(index) {
    var colorlist = ["#D9E4EA", "#8E729A"];
    if (!index || index > (colorlist.length - 1)) {
      index = 0;
    }
    var color = colorlist[index];
    $('.natural .slide-btn-right').animate({
      backgroundColor: color
    }, 3000);
    setAutoColorChange(++index);
  }
});


// シャープ
$('.sharp-img').vegas({
  slides: [
    { src: 'image/article_sharp_image01@2x.jpg' },
    { src: 'image/article_sharp_image02@2x.jpg' },
  ],
  transition: 'fade',
  timer: false,
  transitionDuration: 1000,
  delay: 3000,
});

jQuery(function ($) {
  setAutoColorChange();

  function setAutoColorChange(index) {
    var colorlist = ["#54B27D", "#D9E4EA"];
    if (!index || index > (colorlist.length - 1)) {
      index = 0;
    }
    var color = colorlist[index];
    $('.sharp .slide-btn-left').animate({
      backgroundColor: color
    }, 3000);
    setAutoColorChange(++index);
  }
});

jQuery(function ($) {
  setAutoColorChange();

  function setAutoColorChange(index) {
    var colorlist = ["#D9E4EA", "#54B27D"];
    if (!index || index > (colorlist.length - 1)) {
      index = 0;
    }
    var color = colorlist[index];
    $('.sharp .slide-btn-right').animate({
      backgroundColor: color
    }, 3000);
    setAutoColorChange(++index);
  }
});

// スタイリッシュ
$('.stylish-img').vegas({
  slides: [
    { src: 'image/article_stylish_image01@2x.jpg' },
    { src: 'image/article_stylish_image02@2x.jpg' },
  ],
  transition: 'fade',
  timer: false,
  transitionDuration: 1000,
  delay: 3000,
});

jQuery(function ($) {
  setAutoColorChange();

  function setAutoColorChange(index) {
    var colorlist = ["#48AFDA", "#D9E4EA"];
    if (!index || index > (colorlist.length - 1)) {
      index = 0;
    }
    var color = colorlist[index];
    $('.stylish .slide-btn-left').animate({
      backgroundColor: color
    }, 3000);
    setAutoColorChange(++index);
  }
});

jQuery(function ($) {
  setAutoColorChange();

  function setAutoColorChange(index) {
    var colorlist = ["#D9E4EA", "#48AFDA"];
    if (!index || index > (colorlist.length - 1)) {
      index = 0;
    }
    var color = colorlist[index];
    $('.stylish .slide-btn-right').animate({
      backgroundColor: color
    }, 3000);
    setAutoColorChange(++index);
  }
});

// ポピュラー
$('.popular-img').vegas({
  slides: [
    { src: 'image/article_popular_image01@2x.jpg' },
    { src: 'image/article_popular_image02@2x.jpg' },
  ],
  transition: 'fade',
  timer: false,
  transitionDuration: 1000,
  delay: 3000,
});

$('.popularItems .images a').vegas({
  slides: [
    { src: 'image/ZJ71012-B-1B_01@2x.jpg' },
    { src: 'image/ZJ71012-C-1B_01@2x.jpg' },
  ],
  transition: 'fade',
  timer: false,
  transitionDuration: 1000,
  delay: 3000,
});

jQuery(function ($) {
  setAutoColorChange();

  function setAutoColorChange(index) {
    var colorlist = ["#DD7F4B", "#D9E4EA"];
    if (!index || index > (colorlist.length - 1)) {
      index = 0;
    }
    var color = colorlist[index];
    $('.popular .slide-btn-left').animate({
      backgroundColor: color
    }, 3000);
    setAutoColorChange(++index);
  }
});

jQuery(function ($) {
  setAutoColorChange();

  function setAutoColorChange(index) {
    var colorlist = ["#D9E4EA", "#DD7F4B"];
    if (!index || index > (colorlist.length - 1)) {
      index = 0;
    }
    var color = colorlist[index];
    $('.popular .slide-btn-right').animate({
      backgroundColor: color
    }, 3000);
    setAutoColorChange(++index);
  }
});

// ページスクロールボタン
$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = 0;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

// フェードイン
$(function () {
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});
