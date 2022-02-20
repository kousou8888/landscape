// topのスライドショー
let width;
let slider;
let imageArray;
let activeImageIndex = 0;
window.onload = function() {
    width = window.innerWidth;
    show(width);
    background();
}
window.onresize = function() {
    width = window.innerWidth;
    show(width);
    background();
}
function show(showWidth) {
    // console.log(showWidth);
    if (showWidth <= 767) {  //レスポンシブ切り替えの値
        console.log('スマホ');
        slider = document.getElementById('slideshow-sp');
        imageArray = slider.getElementsByTagName('img');
        imageArray[activeImageIndex].style.opacity = 1;
    }else{
        console.log('PC');
        slider = document.getElementById('slideshow');
        imageArray = slider.getElementsByTagName('img');
        imageArray[activeImageIndex].style.opacity = 1;
    }
}
setTimeout('nextImage()', 2000);
function nextImage(){
    imageArray[activeImageIndex].style.opacity = 0;
    console.log(imageArray.length);
    if(activeImageIndex >= imageArray.length - 1){
        activeImageIndex = 0;
    }else{
        activeImageIndex += 1;
    }
    imageArray[activeImageIndex].style.opacity = 1;
    setTimeout('nextImage()', 4000);
}


// ▼　topロゴ移動コード
const scrollAnimeTop = function () {
    const classE = document.getElementById("latest");
    const ElementSvg = document.getElementById("oita-svg");
    window.addEventListener("scroll", function () {
        const scrollValue = window.pageYOffset;  //スクロール量の取得
        const scrollEle = classE;  // 要素の取得
        const windowHeight = window.innerHeight;  // 画面の高さを取得
        const value = windowHeight / 1.5;  // はみ出させる値（お好みで設定）
        const scrollTop = scrollEle.getBoundingClientRect().top + scrollValue;  // 取得した要素のtop値の取得 + スクロール量
        if (scrollValue > scrollTop - windowHeight + value) {
            ElementSvg.style.top = "2vh";
            ElementSvg.style.left = "6%";
            ElementSvg.style.width = "10%";
            ElementSvg.style.position = "fixed";
        }else{
            ElementSvg.style.top = "15vh"
            ElementSvg.style.left = "50%"
            ElementSvg.style.width = "30%"
            ElementSvg.style.position = "absolute";
        }
    });
}
scrollAnimeTop();



// ▼　スクロールアニメーション
const scrollEvent = function () {
    const ClassElem = document.getElementsByClassName("scroll");  //下からフェードイン
    const ClassElemRight = document.getElementsByClassName("pic-cartain-left");  //右からフェードイン
    const ClassElemLeft = document.getElementsByClassName("pic-cartain-right");  //右からフェードイン
    const ClassBgWrap = document.getElementsByClassName("al-text");  //右からフェードイン

    const scrollAnime = function (classE) {
        window.addEventListener("scroll", function () {
            const scrollValue = window.pageYOffset;  //スクロール量の取得
            const scrollEle = classE;  // 要素の取得
            const windowHeight = window.innerHeight;  // 画面の高さを取得
            const value = 180;  // はみ出させる値（お好みで設定）
            for (let a = 0; a < scrollEle.length; a++) {
                const scrollTop = scrollEle[a].getBoundingClientRect().top + scrollValue;  // 取得した要素のtop値の取得 + スクロール量
                if (scrollValue > scrollTop - windowHeight + value) {
                    scrollEle[a].classList.add("js-fade");
                }else{
                    // scrollEle[a].classList.remove("js-fade");
                }
            }
        });
    }
    scrollAnime(ClassElem);
    scrollAnime(ClassElemRight);
    scrollAnime(ClassElemLeft);
    scrollAnime(ClassBgWrap);
};
scrollEvent();


const hoverEvent = function() {
    const albumEvent =document.getElementsByClassName("album-pic");
    const closeEvent =document.getElementsByClassName("close-btn");
    
    for(let i = 0; i < albumEvent.length; i++) {
        albumEvent[i].onclick = function() {
            console.log(i);
            let albumsEl = document.getElementsByClassName('albums');
            albumsEl[i].classList.add('album-click');
        }
        closeEvent[i].onclick = function() {
            console.log(i);
            let albumsEl = document.getElementsByClassName('albums');
            albumsEl[i].classList.remove('album-click');
        }
    }
}
hoverEvent();


// ▼ Slick設定
$("document").ready(function () {
    $('.albums-tab').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1800,
        arrows: false,
        centerMode: true,
        centerPadding: '25%',
        variableWidth: true,
    });
});


//  アルバムエリアの背景パララックス
const background = function(){
    $('.contents').each(function(i, elem){
        var contentsPOS = $(elem).offset().top;
        $(window).on('load scroll resize', function(){
            var winHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var showClass = 'show';
            var timing = winHeight / 3; // 100pxコンテンツが見えたら次のif文がtrue
            if (scrollTop >= contentsPOS - winHeight + timing){
              $(elem).addClass(showClass);
            } else {
              $(elem).removeClass(showClass);
            }
        });
    });
}