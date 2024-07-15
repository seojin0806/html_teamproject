// 투사체 발사와 발사 속도만 조정
// 캐릭터를 따라다니면서 발사하는 것은 PlayerMove에서 조정
var speed = 3;
var idNum = 0;
$(document).ready(function(){
    var arrow = document.querySelector('#arrow');
    arrowImg(arrow);

    LaunchArrow_Move();
});

function arrowImg(arrow){
    arrow.src = "../images/Sfx/invincible_02.png";
}

function LaunchArrow_Move(){
    let count = 0;
    setInterval(function(){

        $('#arrow').css({
            top: $("#arrow").position().top - 2
        });
        count++;
        if(count > 80-(7*speed)){
            console.log("복제됨");
            LaunchArrow_clone();
            count = 0;
        }
    }, 10-(1.5*speed));

}

function LaunchArrow_clone(){
    //유연한 복제 고민하기
    $("#arrow").clone().appendTo("#cloneWICHI");
}
