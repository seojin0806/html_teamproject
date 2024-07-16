// 메인화면 슬라이더
// 처음 인덱스는 1
let index = 1;
$(document).ready(function () {
    // 이전 버튼은 왼쪽...
    $('.before-btn').click(function (e) { 
        slide_right();
    });
    // 다음 버튼은 오른쪽..
    $('.next-btn').click(function (e){
        slide_left();
    })
});

function slide_right() { 
    // 만약 인덱스가 1이 아니라면
    if(index != 1){
        $('.slider-character').animate({
            left : '+=550'
        })
        console.log('이동합니다..');
        index--;
    }
 }

 function slide_left(){
    //만약 마지막 인덱스가 아니라면..
    if(index != 3){
        $('.slider-character').animate({
            left: '-=550'
        })
        index++;
    }
 }