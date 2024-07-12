//현재 화면을 가져옴...
$(document).ready(function () {
    //이동 시키는 함수를 호출...
    move();
});

function move(){
    //슬라이드를 움직일 요소를 가져옴..
    //첫번째 이미지를 가져옵니다
    console.log("이동합니다...");
    let img = $('.img-slide:first');
    console.log(img.width());
    let length = img.height();
    console.log(length);
    img.animate({
        top: `-=${length * 3}`
    },50);
}