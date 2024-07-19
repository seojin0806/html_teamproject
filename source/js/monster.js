const container1 = document.querySelector(".monster-container");
const btn1 = document.getElementById("creates-1");
let position_arr = [];

//랜덤 함수 min~max 범위의 숫자를 랜덤하게 출력
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var sprite_list = ['sprite-1','sprite-2','sprite-3']

function create_line(){
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
    };

}

btn1.addEventListener('click', () =>{
    create_line();
})

//몬스터 생성 함수
function create_monster(generation_line){
    const monster = document.createElement('div');
    monster.classList.add('monster');

    var random_s = rand(0,2);

    // 스프라이트 생성 함수
    const createSprite = (className) => {
        const sprite = document.createElement('div');
        sprite.classList.add(sprite_list[random_s], className);
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
    var now_difficult = get_difficulty();
    switch(now_difficult){
        case 1:
            if (random_s === 1){ //노란색 몬스터는 체력 +1
                var hp = 2;
                var score = 170 * now_difficult
            }else{
                var hp = 1;
                var score = 150 * now_difficult
            }
            break;
        case 2:
            if (random_s === 1){ 
                var hp = 3;
                var score = 170 * now_difficult
            }else{
                var hp = 2;
                var score = 150 * now_difficult
            }
            break;
        case 3:
            if (random_s === 1){ 
                var hp = 4;
                var score = 170 * now_difficult
            }else{
                var hp = 3;
                var score = 150 * now_difficult
            }
            break;
        case 4:
            if (random_s === 1){ 
                var hp = 5;
                var score = 170 * now_difficult
            }else{
                var hp = 4;
                var score = 150 * now_difficult
            }
            break;
        case 5:
            if (random_s === 1){ 
                var hp = 6;
                var score = 170 * now_difficult
            }else{
                var hp = 5;
                var score = 150 * now_difficult
            }
            break;
    }

    // HTML에 추가
    generation_line.appendChild(monster);


    //나중에 투사체 이벤트가 완성이 되면 캐릭터의 투사체에 맞을때 이벤트를 넣고 체력이 0이되면 삭제
    monster.addEventListener('click', (event) =>{
        hp = hp - 1;
        //체력 감소를 먼저시키고 체력이 0일때 삭제
        //난이도 조정도 고려해봐야함... 흠.. 난이도 체크 함수를 생각해봐야겠음.
        if(hp===0){
            while (monster.hasChildNodes()) {
                monster.removeChild(monster.firstChild);
            }
            //골드 생성
            switch(now_difficult){
                case 1:
                    drop_gold(monster,1);
                    break;
                case 2:
                    drop_gold(monster,2);
                    break;
                case 3:
                    drop_gold(monster,3);
                    break;
                case 4:
                    drop_gold(monster,4);
                    break;
                case 5:
                    drop_gold(monster,5);
                    break;
            }
            //물약 생성
            var item1_rand = rand(1,100);
            if(item1_rand > 94){
                get_randitem(monster)
            }
            //점수 올리기 및 피격 효과
            jQuery.addScore(score)
            const blow = document.createElement('div');
            blow.classList.add('burst');
            monster.appendChild(blow);

        
            monster.className = "empty_enemy";

        }
    });

}

//보물 상자 생성 함수
function create_treasure(generation_line){
    const trasure = document.createElement('div');
    trasure.classList.add('trasure');

    // 스프라이트 생성 함수
    const createSprite = (className) => {
        const sprite = document.createElement('div');
        sprite.classList.add("sprite-trasure", className);
        return sprite;
    };
    
    // 스프라이트 추가
    trasure.appendChild(createSprite('twing-left'));
    trasure.appendChild(createSprite('twing-right'));
    trasure.appendChild(createSprite('tbody'));

    //체력 생성
    //체력 생성
    var now_difficult = get_difficult();
    switch(now_difficult){
        case 1:
            var hp = 3;
            var score = 150 * now_difficult
            break;
        case 2:
            var hp = 4;
            var score = 150 * now_difficult
            break;
        case 3:
            var hp = 5;
            var score = 150 * now_difficult
            break;
        case 4:
            var hp = 6;
            var score = 150 * now_difficult
            break;
        case 5:
            var hp = 7;
            var score = 150 * now_difficult
            break;
    }

    // HTML에 추가
    generation_line.appendChild(trasure);

    trasure.addEventListener('click', () =>{
        const blow = document.createElement('div');
        blow.classList.add('burst');
        trasure.appendChild(blow);
        hp = hp - 1;
        var now_difficult = get_difficulty();
        //체력 감소를 먼저시키고 체력이 0일때 삭제
        //난이도 조정도 고려해봐야함... 흠.. 난이도 체크 함수를 생각해봐야겠음.
        if(hp===0){
            while (trasure.hasChildNodes()) {
                trasure.removeChild(trasure.firstChild);
            }

            switch(now_difficult){
                case 1:
                    drop_gold(trasure,4);
                    drop_gem(trasure,2);
                    break;
                case 2:
                    drop_gold(trasure,8);
                    drop_gem(trasure,4);
                    break;
                case 3:
                    drop_gold(trasure,12);
                    drop_gem(trasure,6);
                    break;
                case 4:
                    drop_gold(trasure,16);
                    drop_gem(trasure,8);
                    break;
                case 5:
                    drop_gold(trasure,20);
                    drop_gem(trasure,10);
                    break;
            }
            jQuery.addScore(score);
            trasure.className = "empty_enemy";

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
            //1%의 확률로 황금상자
            var gold_trasure = rand(1,3);
            if (gold_trasure===1)
                create_treasure(generation_line);
            else
                create_monster(generation_line);
        }
    }

    //콘테이너에 몬스터라인 추가
    container1.appendChild(generation_line);

    //애니메이션 끝날시 삭제
    generation_line.addEventListener('animationend', () =>{
        generation_line.remove();
    });
}

function monster_position() {
    // 결과를 저장할 배열
    let monster_positions = [];

    // 'line' 클래스의 각 div 요소를 순회
    $('.line').each(function(){
        // 현재 'line' 요소 내에서 'monster' 또는 'treasure' 클래스를 가진 div 요소를 찾기
        $(this).find('div.monster, div.treasure').each(function(){
            // 요소의 위치와 크기 정보 가져오기
            let offset = $(this).offset();
            let width = $(this).outerWidth();
            let height = $(this).outerHeight();

            // 오른쪽 아래와 왼쪽 아래 위치 계산
            let rightBottom = {
                x: offset.left + width,
                y: offset.top + height
            };
            let leftBottom = {
                x: offset.left,
                y: offset.top + height
            };

            // 위치 정보를 배열에 추가
            monster_positions.push({
                element: this,
                rightBottom: rightBottom,
                leftBottom: leftBottom
            });
        });
    });
    console.log(monster_positions);
}


//몬스터 생성을 사용하고 싶다면 create_line() 만 가져가서 사용하심 됩니다.
//일반 몬스터는 <div class=monster>로 생성되고 보물상자는 <div class=trasure>로 생성됩니다.
