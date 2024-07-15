let time;
$(document).ready(function () {
    time = 0;
    // 1초 간격으로 실행
    setInterval(timer, 1000);
});

function timer() {
    time += 1;
    let minute = Math.floor(time / 60);
    let second = time % 60;
    let set_text = `${String(minute).padStart(2, '0')} : ${String(second).padStart(2, '0')}`;
    $("#set_time").text(set_text);
}
