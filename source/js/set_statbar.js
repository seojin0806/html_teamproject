//스택바 구현을 위한 곳...
$(document).ready(function () {
    jQuery.setStat();
});

jQuery.setStat = function(){
    console.log("스탯을 설정합니다..");
    //현재 캐릭터 정보를 가져옵니다..
    let character_info = JSON.parse(localStorage.getItem('character_info'));
    console.log(character_info);
    let current_char = character_info[jQuery.getIndex()];
    //text hp를 설정해줍니다...
    $('#text-hp').text(`체력: ${current_char.hp}`);
    //현재 차지하는 영역만큼 색 채워주기..
    let hp_level = current_char.level_hp;
    let stat = $('#stat-hp').find('.stat-level');
    //맨 처음에 배경색은 투명하게 설정한 뒤...
    for(let i = 0; i < stat.length; i++){
        console.log($(stat)[i]);
        $(stat[i]).css('background-color','transparent');
    }
    for(let i = 0; i < hp_level; i++){
        $(stat[i]).css('background-color','red');
    }
    let speed_level = current_char.level_speed;

    $('#text-speed').text(`공속: ${current_char.speed}`);
    stat = $('#stat-speed').find('.stat-level');
    for(let i = 0; i < stat.length; i++){
        console.log($(stat)[i]);
        $(stat[i]).css('background-color','transparent');
    }
    for(let i = 0; i < speed_level; i++){
        $(stat[i]).css('background-color','blue');
    }
}