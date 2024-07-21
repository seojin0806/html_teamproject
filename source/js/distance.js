let distance = 0;
let stage = 1;
let count = 50;
$(document).ready(function () {
    //0.06초에 1m 증가..
    setInterval(set_distance, 60);
});

function set_distance(){
    distance += 1;
    $('.distance').text(`${distance}M`);
    //만약 50m를 통과했다면
    if(distance > count){
        jQuery.addScore(50 * stage);
        count += 50;
    }
    if(distance % 500 == 0) {
        init_stage_boss(difficulty);
    }
}

jQuery.setStage = function(value){
    stage = value;
}