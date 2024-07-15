window.onload = function () {
    var ingame_player = document.querySelector('#ingame_player');
    ingame_player.src = "../images/Heroes/sunny_01.png";

    Cut_Player_Img(ingame_player.src);

    mouseLocation();
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

        //기본
        //ctx.drawImage(cutImage, 0, 0);

        // 원래 이미지에서 부분 자르기
        // drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
        // sx, sy: 원래 이미지에서 자를 영역이 왼쪽 위 모서리로부터의 가로와 세로로 얼마나 떨어져 있는지(오프셋) 지정
        // sw, sh: 원래 이미지에서 잘라낼 너비와 높이
        // dx, dy: 잘라 낸 이미지를 표시하기 위해 캔버스의 왼쪽 위 모서리에서 가로와 세로로 얼마나 떨어져서 표시할지 지정
        // dw, dh: 캔버스에 표시할 너비와 높이

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
            $('#cloneWICHI').css({
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
