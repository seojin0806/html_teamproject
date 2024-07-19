let cost;
let caseText;
$(document).ready(function () {
    //모달 창 활성화...
    $('.active-modal').click(function (e) {
        //만약 구매한 캐릭터라면...
        if(jQuery.canSelect())
        {
            $('.deactive-modal').show(); 
            $('.modal-div').fadeIn();
            let id = $(this).attr('id');
            //만약 체력 증가 버튼을 눌렀다면..
            console.log(id);
            if(id=='hp')
            {
                //체력 정보가져오고 설정하는 로직...
                cost = upgrade_hp();
                caseText = "hp";
            }
            else if(id=='speed'){
                //공격을 업그레이드 할려고 할때...
                console.log(id);
                cost = upgrade_speed();
                caseText = "speed";
        }
    }
    });
    //모달창 닫기...
    $('#cancel').click(function(e){
        $('.modal-div').fadeOut();
    })
    $('#addstat').click(function(e){
        jQuery.check_valid(cost);
    })
});

function upgrade_hp(){
    let character = JSON.parse(localStorage.getItem('character_info'));
    let index = jQuery.getIndex();
    let character_stat = character[index];
    $('.modal-title').text("체력");
    let hp_level = character_stat.level_hp;
    console.log(hp_level);
    
    //캐릭터 이미지 배경...
    $('.character-profile').attr("src", character_stat.source);

    //체력 증가 코스트 비용...
    let cost;
    switch (hp_level) {
        case 0:
            cost = 300;
            break;
    
        case 1:
            cost = 700;
            break;
        case 2:
            cost = 1000;
            break;
    }
    //체력 만땅인 경우...
    if(hp_level == 3){
        $('.deactive-modal').hide();
        $('.title-content').text("MAX");
        $('.title-gold').text("");
        setTimeout(function(){
            $('.modal-div').fadeOut();
        },2000);
    }
    else{
        $('.title-content').text(`${character_stat.hp} \u2192 ${character_stat.hp + 1}`);
        //100000G에 원래 현재 유저 소유 골드 들어가야함...
        $('.title-gold').text(`소모 골드: ${cost}`);
    }
    return cost;
}

function upgrade_speed(){
    let character = JSON.parse(localStorage.getItem('character_info'));
    let index = jQuery.getIndex();
    let character_stat = character[index];
    $('.modal-title').text("공속");
    let speed_level = character_stat.level_speed;
    console.log(speed_level);

     //캐릭터 배경 설정
     $('.character-profile').attr("src", character_stat.source);

    //체력 증가 코스트 비용...
    let cost;
    switch (speed_level) {
        case 0:
            cost = 1000;
            break;
    
        case 1:
            cost = 2000;
            break;
        case 2:
            cost = 3000;
            break;
    }
    //공속 만땅인 경우...
    if(speed_level == 3){
        $('.deactive-modal').hide();
        $('.title-content').text("MAX");
        $('.title-gold').text("");
        setTimeout(function(){
            $('.modal-div').fadeOut();
        },2000);
    }
    else{
        $('.title-content').text(`${character_stat.speed} \u2192 ${(character_stat.speed + 1)}`);
        //100000G에 원래 현재 유저 소유 골드 들어가야함...
        $('.title-gold').text(`소모 골드: ${cost}`);
    }
    return cost;
}

//살 수 있는지 유효성 검사
jQuery.check_valid = function(cost){
    //현재 돈을 가져오는 로직을 짭니다...
    let currentMoney = localStorage.getItem('gold');
    if(currentMoney < cost){
        $('.title-content').text("돈 부족!");
        $('.title-gold').text("");
        $('.deactive-modal').hide();
        setTimeout(function(){
            $('.modal-div').fadeOut();
        },2000);
    }
    else{
        //유저 돈까는 로직 추가..
        currentMoney -= cost;
        $('.gold-displayer').text(currentMoney);
        localStorage.setItem('gold',currentMoney);
        //ui의 돈 변경...

        let character = JSON.parse(localStorage.getItem('character_info'));
        let index = jQuery.getIndex();
        switch (caseText) {
            //hp인경우..
            case "hp":
                character[index].level_hp += 1;
                character[index].hp += 1;
                localStorage.setItem('character_info',JSON.stringify(character));
                break;
        
            case "speed":
                character[index].level_speed += 1;
                character[index].speed += 1;
                localStorage.setItem('character_info',JSON.stringify(character));
                break;
            
            case "charac":
                let player = JSON.parse(localStorage.getItem("player_info"));
                player[jQuery.getIndex()] = true;
                localStorage.setItem("player_info",JSON.stringify(player));
                $('#select').text("선택");
                break;
        }
        //캐릭터 체력 변경...
        jQuery.setStat();
        $('.modal-div').fadeOut();
    }
}
 
jQuery.setCost = function(value){
    cost = value;
};

jQuery.setText = function(value){
    caseText= value;
}