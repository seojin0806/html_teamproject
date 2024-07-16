var PlayerStatus = JSON.parse(localStorage.getItem("PlayerStatus"));
$(document).ready(function () {

    // playerNum 변수는 테스트를 위한 임시 값
    var playerNum = 2;
    PlayerChoice(playerNum);

    mouseLocation();
});
function PlayerChoice(playerNum){
    let ingame_player = document.querySelector('#ingame_player');
    ingame_player.src = PlayerStatus[playerNum].ingame_src;
    Cut_Player_Img(ingame_player.src);
}

//이미지 커팅
function Cut_Player_Img(imgs) {

    var wing1 = document.querySelector('#wing1');
    var wing2 = document.querySelector('#wing2');
    var ctx1 = wing1.getContext("2d");
    var ctx2 = wing2.getContext("2d");

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
        var Location_Top = $("#ingame_player").position().top;
        var Location_Left = $("#ingame_player").position().left;

        // 마우스 현재 좌표
        startX = e.clientX; // left
        startY = e.clientY; // top

        // 마우스 드래그 상태
        $(document).mousemove(function (e) {
            var moveX = e.clientX - startX + Location_Left;
            var moveY = e.clientY - startY + Location_Top;
            var moveY = 622;

            $('#ingame_player').css({
                top: moveY, left: moveX
            })
            $('#wing1').css({
                top: 64 + moveY, left: -71 + moveX
            })
            $('#wing2').css({
                top: 64 + moveY, left: -191 + moveX
            })
            $('#ArrowPosition').css({
                top: -40+moveY, left: -6+moveX
            })

        });
        //마우스 드래그 상태가 아닐 때
        $(document).mouseup(function () {
            $(document).off("mousemove");
            $(document).off("mouseup");
        })
    });

}
