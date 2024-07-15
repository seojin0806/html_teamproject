const btn1 = document.getElementById("creates")
const container = document.getElementById("container");

//랜덤 함수 min~max 범위의 숫자를 랜덤하게 출력
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var sprite_list = ['sprite-1','sprite-2','sprite-3']

btn1.onclick= () => {
    var random_s = rand(2,3);

    switch (random_s){
        case 2:
            line_set(2);  
            break;
        case 3:
            line_set(3);  
            break;
    }
}

//몬스터 생성 함수
function create_monster(){
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


    // HTML에 추가
    container.appendChild(monster);

}

function create_empty(){
    const empty_mon = document.createElement('div');
    empty_mon.classList.add('empty_enemy');

    container.appendChild(empty_mon);
}

function line_set(n){
    //라인 생성
    console.log(n);
    var monster_line = new Array(); //초기화

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
    console.log(monster_line);
    //추가

    for(i=1; i < 6; i++){
        var check_num = false;
        for(j=0;j<monster_line.length;j++){
            if(i === monster_line[j]){
                check_num = true;
            }
        }
        if(check_num == false){
            create_empty();
        }else{
            create_monster();
        }
    }
}