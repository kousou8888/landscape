// ▼　スクロールアニメーション
const scrollEvent = function () {
    const ClassElem = document.getElementsByClassName("scroll");  //下からフェードイン
    const ClassElemRight = document.getElementsByClassName("scroll-right");  //右からフェードイン
    const ClassElemLeft = document.getElementsByClassName("scroll-left");  //右からフェードイン

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
                    scrollEle[a].classList.remove("js-fade");
                }
            }
        });
    }
    scrollAnime(ClassElem);
    scrollAnime(ClassElemRight);
    scrollAnime(ClassElemLeft);
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