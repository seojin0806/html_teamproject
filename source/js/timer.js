let time;
var difficult = 1;
//난이도.

$(document).ready(function () {
    time = 0;
    // 1초 간격으로 실행
    setInterval(timer, 1000);
    setInterval(create_line, 2000);
});

function timer() {
    time += 1;
    let minute = Math.floor(time / 60);
    let second = time % 60;
    let set_text = `${String(minute).padStart(2, '0')} : ${String(second).padStart(2, '0')}`;
    $("#set_time").text(set_text);
}

function set_monster(n){
    clearInterval();
    setInterval(create_line, n);
} //n에 나타나길 원하는 시간을 적어주면 그것에 맞춰 나타납니다.

function clean_monster(){
    clearInterval(변수);
    setInterval(create_line, 2000);
}//보스전 끝나는 곳에 이거 넣어주셔서 원래 속도로 되돌려주세요.

function set_difficult(){
    difficult++;
}

function get_difficult(){
    return difficult;
}