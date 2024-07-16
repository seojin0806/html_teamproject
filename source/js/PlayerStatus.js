$(document).ready(function () {

    ajaxTest();
});

function ajaxTest(){
    $.ajax({
        type: "get",
        url:"../json/PlayerStatus.json",
        dataType:"json",
        success:function(data){
            localStorage.setItem('PlayerStatus', JSON.stringify(data));
        },
        error:function(){
            console.log("통신에러");
        }
    });
}

function changeValue(){
    var a = localStorage.getItem("PlayerStatus");
    var b = JSON.parse(a);
    console.log(b[1].HP);
}