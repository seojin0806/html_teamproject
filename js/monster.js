const btn1 = document.getElementById("creates")
const container = document.getElementById("container");

//랜덤 함수 min~max 범위의 숫자를 랜덤하게 출력
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var sprite_list = ['sprite-1','sprite-2','sprite-3']

btn1.onclick= () => {
    var random_s = rand(2,5);

    switch (random_s){
        case 2:
            line_set(2);  
            break;
        case 3:
            line_set(3);  
            break;
        case 4:
            line_set(4);  
            break;
        case 5:
            line_set(5);  
            break;
    }
}

//몬스터 생성 함수
function create_monster(generation_line){
    const monster = document.createElement('div');
    monster.classList.add('monster');
    
    // 스프라이트 생성 함수
    const createSprite = (className) => {
        const sprite = document.createElement('div');
        sprite.classList.add('sprite-1', className);
        //console.log(random_s);
        return sprite;
    };
    
    // 스프라이트 추가
    monster.appendChild(createSprite('wing-left'));
    monster.appendChild(createSprite('wing-right'));
    monster.appendChild(createSprite('body'));
    monster.appendChild(createSprite('eyes-left'));
    monster.appendChild(createSprite('eyes-right'));

    //체력 생성
    var hp = 10;

    // HTML에 추가
    generation_line.appendChild(monster);


    //나중에 투사체 이벤트가 완성이 되면 캐릭터의 투사체에 맞을때 이벤트를 넣고 체력이 0이되면 삭제
    monster.addEventListener('click', () =>{

        hp = hp - 10;
        //체력 감소를 먼저시키고 체력이 0일때 삭제
        //난이도 조정도 고려해봐야함... 흠.. 난이도 체크 함수를 생각해봐야겠음.
        if(hp===0){
            while (monster.hasChildNodes()) {
                monster.removeChild(monster.firstChild);
            }
            
            const gold = document.createElement('div');
            gold.classList.add('gold');

            // 랜덤한 위치 설정
            var randomX = rand(1,300);
            randomX = randomX - 150;
            console.log(randomX);
             
             let drop1 = [
                {transform : `translateX(0px) translateY(0px)`},
                {transform : `translateX(${randomX}px) translateY(-60px)`},
             ]
             let drop2 =[
                {transform : `translateX(0px) translateY(0px)`},
                {transform: `translateX(${randomX}px) translateY(910px)`}
             ]
             let options1 = {
                delay: 0,
                duration: 700,
                easing: "linear",
                fill: "forwards"
            };
            let options2 = {
                delay: 0,
                duration: 1500,
                easing: "linear",
                fill: "forwards"
            };
            

            gold.animate(drop1, options1);
            gold.animate(drop2, options2);
            
            monster.className = "empty_enemy";
            monster.appendChild(gold);

            

        }
    });

}
//빈공간 생성 함수
function create_empty(generation_line){
    const empty_mon = document.createElement('div');
    empty_mon.classList.add('empty_enemy');

    generation_line.appendChild(empty_mon);
}
//몬스터 줄 생성 함수
function line_set(n){
    //라인 생성
    console.log(n);
    var monster_line = new Array(); //초기화
    var generation_line = document.createElement('div');
    generation_line.classList.add('line');

    //몬스터를 생성할 곳 정하기
    while(monster_line.length < n ){
        var check_num = false;
        var check_line = rand(1,5);
        for(i=0;i<monster_line[i];i++){
            if(check_line === monster_line[i]){
                check_num = true;
            }
        }
        if(check_num == false){
            monster_line.push(check_line);
        }
    }

    //몬스터 추가
    for(i=1; i < 6; i++){
        var check_num = false;
        for(j=0;j<monster_line.length;j++){
            if(i === monster_line[j]){
                check_num = true;
            }
        }
        if(check_num == false){
            create_empty(generation_line);
        }else{
            create_monster(generation_line);
        }
    }

    //콘테이너에 몬스터라인 추가
    container.appendChild(generation_line);

    //애니메이션 끝날시 삭제
    //generation_line.addEventListener('animationend', () =>{
        //generation_line.remove();
    //});
}
