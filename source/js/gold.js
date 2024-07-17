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

function drop_gold(monster,n){
    for (i=0;i<n;i++){

        const gold = document.createElement('div');
        gold.classList.add('gold');

        // 랜덤한 위치 설정
        var randomX = rand(1,300);
        randomX = randomX - 150;
        var randomY = rand(60,90);
        randomY = randomY - 150;
         let drop1 = [
            {transform : `translateX(${randomX}px) translateY(${randomY}px)`},
         ]
         var plus_X = rand(1,150);
         randomX = randomX + (plus_X - 75);
         let drop2 =[
            {transform: `translateX(${randomX}px) translateY(910px)`}
         ]
         let options1 = {
            delay: 0,
            duration: 200,
            easing: "linear",
            fill: "forwards"
        };
        let options2 = {
            delay: 0,
            duration: 1500,
            easing: "linear",
            fill: "forwards"
        };

        gold.animate(drop1, options1).onfinish = () => {
            gold.animate(drop2, options2);
        };

        gold.addEventListener('animationend', () =>{
            gold.remove();
        });

        monster.appendChild(gold);

        //gold 충돌 이벤트 일단은 hover로 하겠습니다.
    }
}

//세션 스토리지를 사용하였습니다 될지 모르겠네요.