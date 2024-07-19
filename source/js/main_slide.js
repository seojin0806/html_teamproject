// 처음 인덱스는 1
let index = 1;
$(document).ready(function () {
    show_btn();
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
        show_btn();
        //status 바꿔주는 함수
        jQuery.setStat();
    }
 }

 function slide_left(){
    //만약 마지막 인덱스가 아니라면..
    if(index != 3){
        $('.slider-character').animate({
            left: '-=550'
        })
        index++;
        show_btn();
        //status 바꿔주는 함수
        jQuery.setStat();
    }
}

jQuery.getIndex = function(){
    return index;
}

function show_btn(){
    let value = JSON.parse(localStorage.getItem("player_info"));
    if(value['current_player'] != index){
        //현재 선택 버튼을 보여줍니다..
        //만약 구매하지 않았다면...
        if(value[jQuery.getIndex()])
            $('#select').text("선택");
        else{
            $('#select').text("구매");
        }
    }
    else{
        $('#select').text("선택됨");
    }
}