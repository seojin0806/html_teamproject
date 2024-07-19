// 다른 스크립트에서 전역 변수로 선언하면 아래 선언을 삭제해도 됨.
// 현재 통합을 고려하여 var로 변경하고 선언함.
import { ingame_status } from "./PlayerStatus.js"

var PlayerStatus_Key = localStorage.getItem("PlayerStatus");
var CurrentPlayer_Key = localStorage.getItem("player_info");

var reloadCount;
var speed;
var idNum = 0;
var reloading;

let CloneATTACK;

$(document).ready(function () {
    //역직렬화
    var PlayerStatus = JSON.parse(PlayerStatus_Key);
    var CurrentPlayer = JSON.parse(CurrentPlayer_Key);

    //현재 선택된 플레이어 넘버
    var playerNum = CurrentPlayer["current_player"]

    reloadCount = PlayerStatus[playerNum].Speed;//
    speed = reloadCount;
    reloading = 800 - 190 * reloadCount + 10.5 * reloadCount ** 2;
    console.log("reloading: " + reloading);

    //PlayerStatus.js에서 가져옴.
    ingame_status.HP = PlayerStatus[playerNum].HP; // 게임 시작 시 초기 체력 설정
    console.log("시작 체력 : " + ingame_status.HP);

    // 투사체 연속 발사 시스템
    CloneATTACK = setInterval(function () {
        Clone_Arrow();
        idNum++;
    }, reloading);

    //테스트를 위해 넣은 코드. 나중에 삭제
    $("#btn1_test").click(function () {
        //ingame_status.HP = 0;
        jQuery.minusHeart();
    });

});

function Clone_Arrow() {
    // 플레이어의 현재 좌표
    let Location_Top = $("#ArrowPosition").position().top;
    let Location_Left = $("#ArrowPosition").position().left;
    let arrowID = "cloneArrow" + idNum;
    let count = 0;
    $("#ArrowPosition").clone().appendTo("#ClonePosition").attr("id", arrowID).attr("class", "arrow");
    $("#" + arrowID).css({
        "top": Location_Top,
        "left": Location_Left + 9
    });


    setInterval(function () {
        // arrowLocate는 현재 투사체의 위치.
        var arrowLocate = Location_Top - (2 * count);
        $("#" + arrowID).css({
            top: arrowLocate
        });
        count++;
        // 투사체 삭제 이벤트, 천장에 닿았거나 몬스터에 충돌했을 때를 가정
        // 1. 천장에 닿았을 때
        if (arrowLocate < 50) {
            //해당 개체 삭제하는 이벤트 추가하기
            $("#" + arrowID).remove();
        }
        // 2. 일반 몬스터와 투사체가 충돌했을 때 -> remove

        // 3. 보스 몬스터와 투사체가 충돌했을 때 -> remove

        // 4. 캐릭터의 채력이 0이 되었을 때 -> 전부 다 remove
        if (ingame_status.HP <= 0) {
            $(".arrow").remove();
            clearInterval(CloneATTACK);
        }
    }, 10 - (1.5 * speed));

}
function Player_N_Monster_crash(monster_LocationX, monster_LocationY){

    let A_X, A_Y, A_W, A_H, B_X, B_Y, B_W, B_H;
    //A = PLAYER B = OTHER
    A_X = $("#Player_HitBox").position().left;
    A_Y = $("#Player_HitBox").position().top;
    A_W = $("#Player_HitBox").width();
    A_H = $("#Player_HitBox").height();
    B_X;
    B_Y;
    B_W;
    B_H;

    if((B_X+B_W)>=A_X && (A_X+A_W)>=B_X){
        if((B_Y+B_H)>=A_Y && (A_Y+A_H)>=B_Y){
            console.log("플레이어와 상대 객체와 충돌 발생!");

            // 1. 상대 객체의 id나 클래스가 몬스터인 경우

            // 2. 상대 객체의 id나 클래스가 아이템인 경우
            
        }
    }
}