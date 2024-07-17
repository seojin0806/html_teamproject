let ingame_status = {
    // 인게임 중 체력
    get HP() { return ingame_status._HP; },
    set HP(value) { ingame_status._HP = value; },

    // 인게임 중 스피드(투사체)는 PlayerMove.js에서 조정되고 인게임에서 변경되는 경우가 아직까지는 없음
};
export { ingame_status };


$(document).ready(function () {

    ajaxTest();
    ingame_status.HP = 3;
});

function ajaxTest() {
    $.ajax({
        type: "get",
        url: "../json/PlayerStatus.json",
        dataType: "json",
        success: function (data) {
            localStorage.setItem('PlayerStatus', JSON.stringify(data));
        },
        error: function () {
            console.log("통신에러");
        }
    });
}

function status_of_ingame() {
    HP = 1;
    console.log(HP);
}