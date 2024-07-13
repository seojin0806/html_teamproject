//현재 화면을 가져옴...
$(document).ready(function () {
    //이동 시키는 함수를 호출...
    move();
});

function move(){
    //슬라이드를 움직일 요소를 가져옴..
    //첫번째 이미지를 가져옵니다
    let imgBottom = $('.img-slide:eq(1)');
    let length = imgBottom.height();
    //이미지 바텀위치를 설정....
    imgBottom.css("transform", `translateY(-${length}px)`);
    let imgTop = $('.img-slide:eq(0)');
    imgTop.animate({
       top:  `${length}`
    },2500);
    imgBottom.animate({
        top: `${length}`
    },2500,function(){
        let imgBottom = $('.img-slide:eq(1)');
        let imgTop = $('.img-slide:eq(0)');
        imgTop.insertBefore(imgBottom);
        imgBottom.css('top','0');
        imgTop.css('top','0');
        move();
    });
}
