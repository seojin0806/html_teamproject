function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//체력물약은 5%의 확률로 나오게 하겠습니다.
function get_randitem(monster){
    item_call(monster);
}

function item_call(monster){
    const item = document.createElement('div');
    item.classList.add('item1');

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

    item.animate(drop1, options1).onfinish = () => {
        item.animate(drop2, options2);
    };

    item.addEventListener('animationend', () =>{
        item.remove();
    });

    monster.appendChild(item);

    //gold 충돌 이벤트 일단은 hover로 하겠습니다.
    item.addEventListener('click', () =>{
        item.remove();
    });
}
