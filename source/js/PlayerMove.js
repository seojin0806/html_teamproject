var PlayerStatus_Key = localStorage.getItem("PlayerStatus");
var CurrentPlayer_Key = localStorage.getItem("player_info");
 
$(document).ready(function () {
    // 역직렬화
    let PlayerStatus = JSON.parse(PlayerStatus_Key);
    let CurrentPlayer = JSON.parse(CurrentPlayer_Key);

    // 현재 선택된 플레이어 넘버
    let playerNum = CurrentPlayer["current_player"];
    let img_src = PlayerStatus[playerNum].ingame_src;

    PlayerChoice(img_src);
    mouseLocation();
    Player_N_Monster_crash(1,1);
});
// 캐릭터 이미지 선택
function PlayerChoice(img_src){
    let ingame_player = document.querySelector('#ingame_player');
    ingame_player.src = img_src;
    Cut_Player_Img(ingame_player.src);
}

// 이미지 커팅
function Cut_Player_Img(imgs) {

    let wing1 = document.querySelector('#wing1');
    let wing2 = document.querySelector('#wing2');
    let ctx1 = wing1.getContext("2d");
    let ctx2 = wing2.getContext("2d");

    let WingCutImg = new Image();
    WingCutImg.src = imgs;


    WingCutImg.onload = function () {
        ctx1.drawImage(WingCutImg, 55, 1, 64, 51, 0, 0, 64, 51);
        ctx2.drawImage(WingCutImg, 55, 1, 64, 51, 0, 0, 64, 51);
    }
}

function mouseLocation() {

    $(document).mousedown(function (e) {
        e.preventDefault();

        // 플레이어의 현재 좌표
        let Location_Top = $("#ingame_player").position().top;
        let Location_Left = $("#ingame_player").position().left;

        // 마우스 현재 좌표
        startX = e.clientX; // left
        startY = e.clientY; // top

        // 마우스 드래그 상태
        $(document).mousemove(function (e) {
            let moveX = e.clientX - startX + Location_Left;
            let moveY = e.clientY - startY + Location_Top;

            $('#ingame_player').css({
                left: moveX
            })
            $('#wing1_axis').css({
                left: -81+moveX
            })
            $('#wing2_axis').css({
                left: -81+moveX
            })
            $('#ArrowPosition').css({
                left: 19+moveX
            })
            $('#Player_HitBox').css({
                left: moveX
            })

        });
        // 마우스 드래그 상태가 아닐 때
        $(document).mouseup(function () {
            $(document).off("mousemove");
            $(document).off("mouseup");
        })
    });

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
