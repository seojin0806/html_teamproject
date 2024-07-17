var boss = null;
var time_limit;
var way;

function init_stage_boss(difficulty) {
    if (boss != null) { boss = null; }

    let field = document.querySelector('.slider-container');
    let link = document.querySelector('#boss-css');
    let boss_layout = document.querySelector('.boss-zone > div');

    boss = {
        shape: "boss" + difficulty + ".css",
        HP: 10 * difficulty,
        attack_pattern_1_timer_id: null, // summon dragons pattern
        attack_pattern_2_timer_id: null, // meteor fall pattern
    }
    $(link).attr('href', boss.shape);
    setTimeout(function () {
        boss.top = 0 - boss_layout.offsetHeight;
        boss.left = field.offsetWidth / 2 - boss_layout.offsetWidth / 2;
        $('.boss-zone').css({
            left: boss.left,
            top: boss.top,
            visibility: 'visible',
            transform: 'translatey(' + (0 - boss.top / 2) + 'px)',
            transition: '0.5s'
        });
    }, 1000);

    boss.attack_pattern_1_timer_id = setInterval(summon_dragons, (15 - 1.5 * difiiculty) * 1000); // interval : (15-1.5n) sec
    if (2 < difficulty)
        boss.attack_pattern_2_timer_id = setInterval(meteor_fall, 20 * 1000); // interval : 20 sec

    time_limit = 60;
    setTimeout(time_limit_timer, 1000);
}

function time_limit_timer() {
    console.log('boss HP : ' + boss.HP);
    if (boss != null && boss.HP <= 0) {
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
            setTimeout(meteorfunc, 1000);
        }
    }
}

function meteorfunc() {
    let temp = setInterval(collision_detection, 100);
    setTimeout(() => { clearInterval(temp) }, 5 * 1000);
    for (let i = 0; i < 5; ++i) {
        if (i != way) $('.meteor')[i].style.display = 'block';
        $('.meteor')[i].classList.add('active');
    }
}

function delete_boss() {
    if (null != boss.attack_pattern_1_timer_id)
        clearInterval(boss.attack_pattern_1_timer_id);
    if (null != boss.attack_pattern_2_timer_id)
        clearInterval(boss.attack_pattern_2_timer_id);
    $('#time_limit').css('display', 'none');
    boss = null;
    time_limit = null;
    way = null;
}
function clear_stage() {
    // 보스 처치 모션 추가
    let boss_img_tag = document.querySelector('.boss-zone');
    boss_img_tag.classList.add('fadeout')
    delete_boss();
    gold = gold + 100 * difficulty
    if (difficulty < 5) {
        difficulty++;
    }
}
function collision_detection() {
    let hero = document.querySelector('#hero').getBoundingClientRect();
    hero_coordinate = [[hero.left, hero.top], [hero.right, hero.bottom], [hero.right, hero.top], [hero.left, hero.bottom]];

    for (let j = 0; j < 5; ++j) {
        let m = document.querySelectorAll('#meteor-zone > .meteor-line > img')[j].getBoundingClientRect();
        let t = m.top;
        let b = m.bottom;
        let l = m.left;
        let r = m.right;
        for (let i = 0; i < 4; ++i) {
            if (l <= hero_coordinate[i][0] && hero_coordinate[i][0] <= r) {
                if (t <= hero_coordinate[i][1] && hero_coordinate[i][1] <= b) {
                    console.log('충돌발생');
                }
            }
        }
    }
}