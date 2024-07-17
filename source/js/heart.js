let MAX_HEART;
let current_heart;
$(document).ready(function () {
    //플레이어 정보 가져오기
    let player_info = localStorage.getItem('player_info');
    player_info = JSON.parse(player_info);
    //캐릭터 정보 가져오기
    let character_info = localStorage.getItem('character_info');
    character_info = JSON.parse(character_info);

    let heart_charac = character_info[player_info.current_player].hp;
    let svg = $('.heart').find('svg');
    current_heart = heart_charac;
    MAX_HEART = heart_charac;
    console.log(svg);
    for(let i = heart_charac; i < 10; i++){
        $(svg[i]).hide();
    } 
});
// 체력 추가 함수 jQuery.addHeart()를 호출하면 됨...
jQuery.addHeart = function(){
    if(current_heart == MAX_HEART)
        return;
    else{
        let svg = $('.heart').find('svg');
        $(svg[current_heart]).attr('fill','red');
        current_heart++;
    }   
}

//체력 감소 함수
jQuery.minusHeart = function(){
       current_heart--;
       let svg = $('.heart').find('svg');
       $(svg[current_heart]).attr('fill','black');
       if(current_heart == 0){
            window.open('./end.html', '_self');
       }
}
