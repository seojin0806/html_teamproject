var boss = null;
var time_limit;

function init_stage_boss(difficulty) {
    if(boss != null) { boss = null; }

    let meteor; // true or false
    
    if(difficulty < 3)
        meteor = false;
    else 
        meteor = true;
    
    boss = {
        shape : "./../images/Boss/boss" + difficulty + ".webp",
        HP : 10 * difficulty,
        패턴1 : true,
        패턴2 : meteor,
        attack_pattern_1_timer_id : null, // summon dragons pattern
        attack_pattern_2_timer_id : null, // meteor fall pattern
        //coordinate : [보스의 x좌표, 보스의 y좌표] // 없어도 될지도...
    }

    if(boss.패턴1)
       boss.attack_pattern_1_timer_id = setInterval(summon_dragons , (15 - 1.5 * difiiculty) * 1000); // interval : (15-1.5n) sec

    if(boss.패턴2)
       boss.attack_pattern_2_timer_id = setInterval(meteor_fall , 20 * 1000); // interval : 20 sec

    time_limit = 60;
    setTimeout(time_limit_timer, 1000);
}

