$(document).ready(function () {
    $('#select').click(function (e) {
        let index = jQuery.getIndex();
        if(jQuery.canSelect())
        {
            set_current_player(index);
            $(this).text("선택됨");
        }
        else{
            //구매 로직
            buy_character();
        }
        e.preventDefault();
    });
});

function set_current_player(index){
    //현재 선택된 플레이어 정보를 가져온 뒤...
    let value = JSON.parse(localStorage.getItem("player_info"));
    //구매 여부에 따라 로직 변경해서 쓰기...
    value['current_player'] = index;
    //다시 현재 정보 바꿔주고 저장..
    localStorage.setItem("player_info",JSON.stringify(value));   
}

jQuery.canSelect = function(){
    let player_info = localStorage.getItem('player_info');
    player_info = JSON.parse(player_info);
    if(player_info[jQuery.getIndex()]){
        return true;
    }
    else return false;
}

function buy_character(){
    let character = JSON.parse(localStorage.getItem('character_info'));
    character = character[jQuery.getIndex()];
    let cost = character.cost;
    //캐릭터 이미지 배경...
    $('.character-profile').attr("src", character.source);
    $('.modal-title').text("캐릭터 구매 비용");
    $('.title-content').text("");
    $('.title-gold').text(`소모 골드: ${cost}`);
    jQuery.setCost(cost);
    jQuery.setText("charac");
    $('.deactive-modal').show(); 
    $('.modal-div').fadeIn();
}
