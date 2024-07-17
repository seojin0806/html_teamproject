let heart;

$(document).ready(function () {
    //플레이어 정보 가져오기
    let player_info = localStorage.getItem('player_info');
    player_info = JSON.parse(player_info);
    //캐릭터 정보 가져오기
    let character_info = localStorage.getItem('character_info');
    character_info = JSON.parse(character_info);

    let heart_charac = character_info[player_info.current_player].hp;
    let svg = $('.heart').find('svg');
    heart = heart_charac;
    console.log(svg);
    for(let i = heart_charac; i < 10; i++){
        $(svg[i]).hide();
    } 
});