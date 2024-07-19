var NotEnemy = false;

function arrow_position(){
    let positions_arrow = [];
    // 현재 'line' 요소 내에서 'monster' 또는 'treasure' 클래스를 가진 div 요소를 찾기

    $('#ClonePosition').each(function(){
        $(this).find('div.arrow').each(function(){
            // 요소의 위치와 크기 정보 가져오기
            let offset = $(this).offset();
            let width = $(this).outerWidth();
    
            // 오른쪽 아래와 왼쪽 아래 위치 계산
            let right_top = {
                x: offset.left + width,
                y: offset.top
            };
            let left_top = {
                x: offset.left,
                y: offset.top
            };
            // 위치 정보를 배열에 추가
            positions_arrow.push({
                element: this,
                righttop: right_top,
                lefttop: left_top
            });
        });
    });
    return(positions_arrow);
}

function monster_position() {
    // 결과를 저장할 배열
    let positions = [];

    // 'line' 클래스의 각 div 요소를 순회
    $('.line').each(function(){
        // 현재 'line' 요소 내에서 'monster' 또는 'treasure' 클래스를 가진 div 요소를 찾기
        $(this).find('div.monster, div.trasure').each(function(){
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
            let right_top = {
                x: offset.left + width,
                y: offset.top
            };
            let left_top = {
                x: offset.left,
                y: offset.top
            };
            // 위치 정보를 배열에 추가
            if(rightBottom.y > 900){

            }else{
                positions.push({
                    element: this,
                    rightBottom: rightBottom,
                    leftBottom: leftBottom,
                    left_top : left_top,
                    right_top : right_top
                });
            }
        });
    });
    return(positions);
}

function player_position(){
    // 결과를 저장할 배열
    let player_position = [];

    
    // $('#player_HitBox')로 선택된 요소에 대해 작업하기
    $('#Player_HitBox').each(function() {
        // 요소의 위치와 크기 정보 가져오기
        let offset = $(this).offset();
        let width = $(this).outerWidth();
        let height = $(this).outerHeight();

        //위치 전부 계산(충돌이 좀더 많길래)
        let right_Bottom = {
            x: offset.left + width,
            y: offset.top + height
        };
        let left_Bottom = {
            x: offset.left,
            y: offset.top + height
        };
        let right_top = {
            x: offset.left + width,
            y: offset.top
        };
        let left_top = {
            x: offset.left,
            y: offset.top
        };

        // 위치 정보를 배열에 추가
        player_position.push({
            element: this,
            right_top: right_top,
            left_top: left_top,
            right_Bottom: right_Bottom,
            left_Bottom : left_Bottom
        });
    });
    return(player_position);
}

function item_position(){
    // 결과를 저장할 배열
    let item_position = [];

    $('.gold, .gem, .item1').each(function(){
        // 요소의 위치와 크기 정보 가져오기
        let offset = $(this).offset();
        let width = $(this).outerWidth();
        let height = $(this).outerHeight();

        let right_Bottom = {
            x: offset.left + width,
            y: offset.top + height
        };
        let left_Bottom = {
            x: offset.left,
            y: offset.top + height
        };
        let right_top = {
            x: offset.left + width,
            y: offset.top
        };
        let left_top = {
            x: offset.left,
            y: offset.top
        };

        // 위치 정보를 배열에 추가
        item_position.push({
            element: this,
            right_top: right_top,
            left_top: left_top,
            right_Bottom: right_Bottom,
            left_Bottom : left_Bottom
        });
    });
    return(item_position);
}


// 충돌구현
// 투사체와 몬스터
function arrow_monster() {
    let monsters = monster_position();
    let arrows = arrow_position();


    // 두 배열을 순회하며 충돌 검사
    for (let i = 0; i < monsters.length; i++) {
        for (let j = 0; j < arrows.length; j++) {
            //몬스터의 맨 밑과 맨 위 충돌 판별
            if (monsters[i].rightBottom.x >= arrows[j].lefttop.x &&
                arrows[j].righttop.x >= monsters[i].leftBottom.x &&
                monsters[i].rightBottom.y >= arrows[j].righttop.y ) {
                    //이곳에 충돌 이벤트 구현
                $(monsters[i].element).click(); //몬스터 이벤트 (클릭으로 된거실행)(이게되네)
                $(arrows[j].element).remove();  //간단하게 삭제 시켰습니다.
            }
        }
    }
} 
// 플레이어와 몬스터 충돌
function player_monster(){
    
    let monsters = monster_position();
    let player = player_position();
    let ctx1 = $('#ingame_player');
    let ctx2 = $('#wing1');
    let ctx3 = $('#wing2');

    // 두 배열을 순회하며 충돌 검사
    for (let i = 0; i < monsters.length; i++) {
        for (let j = 0; j < player.length; j++) {
            //몬스터의 맨 밑과 맨 위 충돌 판별
            P_LT = player[j].left_top;
            P_RT = player[j].right_top;
            P_LB = player[j].left_Bottom;
            P_RB = player[j].right_Bottom;
            M_LT = monsters[i].left_top;
            M_RT = monsters[i].right_top;
            M_LB = monsters[i].leftBottom;
            M_RB = monsters[i].rightBottom;
            if (P_LT.x < M_RB.x && P_RT.x > M_LB.x
            ) {
                if(P_LT.y < M_RB.y && P_RB.y > M_LT.y){
                    //여기다 이벤트를 넣으심 됩니다.
                    if(NotEnemy === false){
                        NotEnemy = true;
                        jQuery.minusHeart();

                        let timecount = 0;
                        let interval = setInterval(callback, 500);
                        function callback() {
                            if (timecount >= 6){
                                ctx1.css({opacity : 1.0})
                                ctx2.css({opacity : 1.0})
                                ctx3.css({opacity : 1.0})
                                NotEnemy = false;
                                clearInterval(interval);
                            }
                            else {
                                console.log("충돌!");
                                ctx1.css({opacity : 0.5 + (0.5 * (timecount % 2))})
                                ctx2.css({opacity : 0.5 + (0.5 * (timecount % 2))})
                                ctx3.css({opacity : 0.5 + (0.5 * (timecount % 2))})
                                timecount++;
                            }
                        }

                    }

                }
            }
        }
    }
}

// 아이템과 플레이어
function item_player(){
    let items = item_position();
    let player = player_position();

    // 두 배열을 순회하며 충돌 검사
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < player.length; j++) {
            //몬스터의 맨 밑과 맨 위 충돌 판별
            P_LT = player[j].left_top;
            P_RT = player[j].right_top;
            P_LB = player[j].left_Bottom;
            P_RB = player[j].right_Bottom;
            I_LT = items[i].left_top;
            I_RT = items[i].right_top;
            I_LB = items[i].left_Bottom;
            I_RB = items[i].right_Bottom;

            if (P_LT.x < I_RB.x && P_RT.x > I_LB.x
            ) {
                if(P_LT.y < I_RB.y && P_RB.y > I_LT.y){

                    //여기에 추가로 이벤트를 넣으면 됩니다.
                    $(items[i].element).click();
                }
            }
        }
    }

}


setInterval(arrow_monster,5);
setInterval(player_monster,5);
setInterval(item_player,5);