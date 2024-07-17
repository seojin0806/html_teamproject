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
        set_current_player();
    }
 }

 function slide_left(){
    //만약 마지막 인덱스가 아니라면..
    if(index != 3){
        $('.slider-character').animate({
            left: '-=550'
        })
        index++;
        set_current_player();
    }
}

function set_current_player(){
    //현재 선택된 플레이어 정보를 가져온 뒤...
    let value = JSON.parse(localStorage.getItem("player_info"));
    value['current_player'] = index;
    //다시 현재 정보 바꿔주고 저장..
    localStorage.setItem("player_info",JSON.stringify(value));   
}