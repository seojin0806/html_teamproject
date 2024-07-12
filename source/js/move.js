$(document).ready(function(){

    var ingame_player = document.querySelector('#ingame_player');
    ingame_player.src = "../images/Heroes/sunny_01.png";

    Cut_Player_Img(ingame_player.src);

});


//이미지 커팅
function Cut_Player_Img(imgs){

    var cutID = document.querySelector('#cutID');
    var ctx = cutID.getContext("2d");

    let cutImage = new Image();
    cutImage.src = imgs;

    cutImage.onload = function() {
    
        //기본
        //ctx.drawImage(cutImage, 0, 0);
    
        // 원래 이미지에서 부분 자르기
        // drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
        // sx, sy: 원래 이미지에서 자를 영역이 왼쪽 위 모서리로부터의 가로와 세로로 얼마나 떨어져 있는지(오프셋) 지정
        // sw, sh: 원래 이미지에서 잘라낼 너비와 높이
        // dx, dy: 잘라 낸 이미지를 표시하기 위해 캔버스의 왼쪽 위 모서리에서 가로와 세로로 얼마나 떨어져서 표시할지 지정
        // dw, dh: 캔버스에 표시할 너비와 높이
        
        ctx.drawImage(cutImage, 55, 1, 64, 51, 0, 0, 64, 51);

        $("#cutID").css({
            "position" : "absolute",
            "top" : "500px",
            "left" : "500px"
        });

    }
    
    
}

