let distance = 0;

$(document).ready(function () {
    //0.06초에 1m 증가..
    setInterval(set_distance, 60);
});

function set_distance(){
    distance += 1;
    $('.distance').text(`${distance}M`);
}