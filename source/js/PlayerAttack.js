var reloadCount = 4;
var speed = reloadCount;
var idNum = 0;
var reloading = 800-190*reloadCount+10.5*reloadCount**2;

$(document).ready(function () {
    console.log("reloading: " + reloading);
    setInterval(function () {
        
        Clone_Arrow();
        idNum++;
    },reloading);

});

function Clone_Arrow(){
    // 플레이어의 현재 좌표
    let Location_Top = $("#ArrowPosition").position().top;
    let Location_Left = $("#ArrowPosition").position().left;
    let arrowID = "cloneArrow" + idNum;
    let count = 0;
    $("#ArrowPosition").clone().appendTo("#ClonePosition").attr("id", arrowID).attr("class", "arrow");
    $("#"+arrowID).css({
        "top": Location_Top, 
        "left": Location_Left + 9
    });


    setInterval(function () {
        // arrowLocate는 현재 투사체의 위치.
        var arrowLocate = Location_Top - (2 * count);
        $("#"+arrowID).css({
            top: arrowLocate
        });
        count++;
        // 투사체 삭제 이벤트, 천장에 닿았거나 몬스터에 충돌했을 때를 가정
        // 1. 천장에 닿았을 때
        if(arrowLocate < 50){
            //해당 개체 삭제하는 이벤트 추가하기
            $("#"+arrowID).remove();
        }
        // 2. 일반 몬스터와 충돌했을 때

        // 3. 보스 몬스터와 충돌했을 때

        // 4. 캐릭터의 채력이 0이 되었을 때

    }, 10 - (1.5 * speed));
    
}