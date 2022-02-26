let width;
let slider;
let imageArray;
let activeImageIndex = 0;
window.onload = function() {
    width = window.innerWidth;
    show(width);
    bgpara();
    scrollEvent();
}
window.onresize = function() {
    width = window.innerWidth;
    show(width);
    bgpara();
    scrollEvent();
}


const scrollEvent = function () {
    const ClassElem = document.getElementsByClassName("scroll");  //下からフェードイン
    const ClassElemRight = document.getElementsByClassName("scroll-album");  //右からフェードイン
    const ClassAlTitle = document.getElementsByClassName("album-title");  //右からフェードイン
    const Height = window.innerHeight / 4;
    scrolleve(ClassElem, Height, 'js-fade');
    scrolleve(ClassElemRight, Height, 'js-fade');
    scrolleve(ClassAlTitle, Height, 'js-fade');
};
const bgpara = function () {
    const Ele = document.getElementsByClassName('contents');
    const Height = window.innerHeight / 8;
    scrolleve(Ele, Height, 'show'); 
};

// ▼　topのスライドショー
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

// ▼　スクロールアニメーション
const scrolleve = function(classE, TopPass, clList) {
    window.addEventListener("scroll", function () {
        const scrollValue = window.pageYOffset;  //スクロール量の取得
        const scrollEle = classE;  // 要素の取得
        const windowHeight = window.innerHeight;  // 画面の高さを取得
        const value = TopPass;  // はみ出させる値（お好みで設定）
        for (let a = 0; a < scrollEle.length; a++) {
            const scrollTop = scrollEle[a].getBoundingClientRect().top + scrollValue;  // 取得した要素のtop値の取得 + スクロール量
            if (scrollValue > scrollTop - windowHeight + value) {
                scrollEle[a].classList.add(clList);
            }else{
                scrollEle[a].classList.remove(clList);
            };
        };
    });
};

// ▼ Slick設定
$("document").ready(function () {
    $('.albums-tab').slick({
        autoplay: false,
        // autoplaySpeed: 2500,
        speed: 1500,
        arrows: true,
        centerMode: true,
        centerPadding: '35%',
        variableWidth: true,
    });
});

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
            ElementSvg.classList.add('js-logo');
        }else{
            ElementSvg.classList.remove('js-logo');
        }
    });
}
scrollAnimeTop();