//main_gold는 메인화면의 골드 수정 및 총합 보여주는 코드
//여기 gold는 게임내 골드 변화및 드랍 제어.

var gold_inven = 0;
update_gold();

//드랍 제어를 위한 랜덤 함수
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//골드 드랍애니메이션
function drop_gold(monster,n){
    //골드 n개 만큼 생성
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

        gold.addEventListener('mouseover', () =>{
            var new_gold = Number(window.localStorage.getItem("gold"))+10;
            gold_inven = gold_inven + 10;
            update_gold()
            window.localStorage.setItem("gold", new_gold)
            gold.remove();
        });
    }
}

function drop_gem(monster,n){
    //보석을 n개 만큼 생성
    for (i=0;i<n;i++){

        const gem = document.createElement('div');
        gem.classList.add('gem');
        var sprite_list = ['gem-1','gem-2','gem-3']
        var random_s = rand(0,2);
        gem.classList.add(sprite_list[random_s]);


        // 랜덤한 위치 설정
        var randomX = rand(1,300);
        randomX = randomX - 150;
        var randomY = rand(60,90);
        randomY = randomY - 150;
        //애니메이션 설정
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
        gem.animate(drop1, options1).onfinish = () => {
            gem.animate(drop2, options2);
        };
        gem.addEventListener('animationend', () =>{
            gem.remove();
        });

        //애니메이션 설정 끝!

        monster.appendChild(gem);

        //gold 충돌 이벤트 일단은 hover로 하겠습니다.

        gem.addEventListener('mouseover', () =>{
            var new_gold = Number(window.localStorage.getItem("gold"))+30;
            gold_inven = gold_inven + 30;
            update_gold()
            window.localStorage.setItem("gold", new_gold);
            gem.remove();
        });
    }
}

function update_gold(){
    var total_gold =  document.querySelector(".total-coin");

    total_gold.innerHTML = gold_inven + "G";
    window.localStorage.setItem("result_gold", gold_inven);
}


//monster 에는 보스 몹 div를 넣고 n에는 생성하고 싶은 양을 넣어주세요
//gold는 하나당 10G gem은 하나당 30G입니다 생성에 참고해주세요.
// 골드랑 젬이 함께 터지면 예쁠거예요. b

//그리고 상점 구현할때 데이터 베이스 저장 키값 gold 입니다
//window.localStorage.getItem("gold") 해서 사용해주세요.