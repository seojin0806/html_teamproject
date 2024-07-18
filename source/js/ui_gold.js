//초기 게임 재화는 0입니다.
let gold = 0;

jQuery.addGold = function(value){
    let current_val = $('#coin').text();
    gold = gold + value;
    $('#coin').text(`${gold}G`);
}