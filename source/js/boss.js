var boss = null;
var time_limit;
var way;

function init_stage_boss(difficulty) {
    if (boss != null) { boss = null; }

    let meteor; // true or false
    boss_img_tag = document.querySelector('#boss_img');

    if (difficulty < 3)
        meteor = false;
    else
        meteor = true;

    boss = {
        shape: "./../images/Boss/boss" + difficulty + ".webp",
        HP: 10 * difficulty,
        패턴1: true,
        패턴2: meteor,
        attack_pattern_1_timer_id: null, // summon dragons pattern
        attack_pattern_2_timer_id: null, // meteor fall pattern
        top: 보스가위치할y좌표 - boss_img_tag.offsetHeight / 2,
        left: 보스가위치할x좌표 - boss_img_tag.offsetWidth / 2
    }
    $('#boss_img').attr('src', boss.shape);
    $('#boss_img').css({
        left: boss.left,
        top: 0 - boss_img_tag.offsetHeight
    });
    $('#boss_img').css('transform', 'translatey(' + boss.top + 'px)');// 화면 밖(화면 상단)에서 아래로 내려오는 애니메이션
    $('#boss_img').css('transition', '0.5s'); // 보스 내려오는 시간 조절하기

    if (boss.패턴1)
        boss.attack_pattern_1_timer_id = setInterval(summon_dragons, (15 - 1.5 * difiiculty) * 1000); // interval : (15-1.5n) sec

    if (boss.패턴2)
        boss.attack_pattern_2_timer_id = setInterval(meteor_fall, 20 * 1000); // interval : 20 sec

    time_limit = 60;
    setTimeout(time_limit_timer, 1000);
}

function time_limit_timer() {
    console.log('boss HP : ' + boss.HP);
    if ( boss != null && boss.HP <= 0) {
        clear_stage(); // 보스 몬스터 처치
    } else if (boss !== null && time_limit > 0) {
        time_limit--;
        $('#time_limit').css('display', 'block');
        $('#time_limit > span').text(time_limit);
        setTimeout(time_limit_timer, 1000);
    } else if (time_limit == 0) {
        delete_boss();
        game_over(); // 플레이어 패배
    } 
}

function meteor_fall() {
    way = Math.floor(Math.random() * 100 % 5); // 운석이 안떨어지는 위치
    $('.meteor').css('display', 'none');
    for (let i = 0; i < 5; ++i) {
        if ($('.meteor')[i].classList.contains('active')) {
            $('.meteor')[i].classList.remove('active');
            setTimeout(meteorfunc, 1000);
        }
        else {
            if(i != way )  $('.meteor')[i].style.display = 'block';
            $('.meteor')[i].classList.add('active');
        }
    } 
}

function meteorfunc() {
    for (let i = 0; i < 5; ++i) {
        if(i != way )  $('.meteor')[i].style.display = 'block';
        $('.meteor')[i].classList.add('active');
    }
}