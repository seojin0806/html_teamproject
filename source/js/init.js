let character_json;
$(document).ready(function () {
    $.ajax({
        url: '../json/characterInfo.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            //console.log(JSON.stringify(data)); // JSON 데이터를 콘솔에 출력합니다.
            // 데이터를 사용하여 HTML 요소를 업데이트합니다.
            localStorage.setItem("character_info",JSON.stringify(data));
            
        },
        error: function (xhr, status, error) {
            console.error("JSON 파일을 불러오는 데 실패했습니다.");
        }
    });
    $.ajax({
        url: '../json/playerInfo.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            //console.log(JSON.stringify(data)); // JSON 데이터를 콘솔에 출력합니다.
            // 데이터를 사용하여 HTML 요소를 업데이트합니다.
            localStorage.setItem("player_info",JSON.stringify(data));
            
        },
        error: function (xhr, status, error) {
            console.error("JSON 파일을 불러오는 데 실패했습니다.");
        }
    });
});