//인벤 db, 아직은 골드 밖에없다.
sessionStorage.setItem("gold", 20000);
//첫 실행
const gold_displayer = document.getElementById("gold-displayer");
gold_displayer.innerHTML = sessionStorage.getItem("gold")+" G";
//드랍 제어를 위한 랜덤 함수
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var gold = 10;

//확인용 함수
function editGold() {
    const newName = prompt("새 이름을 입력하세요:", sessionStorage.getItem("gold"));
    if (newName) {
        sessionStorage.setItem("gold", newName)
        update_gold(); 
    }
}

function update_gold(){
    gold_displayer.innerHTML = sessionStorage.getItem("gold")+" G"
}

//세션 스토리지를 사용하였습니다 될지 모르겠네요.