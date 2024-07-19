//첫 실행
if (window.localStorage.getItem("gold")===null){
    window.localStorage.setItem("gold",20000);
}

window.onload = () => { 
    //로드 될때마다 업데이트
    const gold_displayer = document.querySelector(".gold-displayer");
    gold_displayer.innerHTML = window.localStorage.getItem("gold")+" G";
    console.log(window.localStorage.getItem("gold"));
    update_gold(gold_displayer)
};

function update_gold(gold_displayer){
    gold_displayer.innerHTML = window.localStorage.getItem("gold")+" G"
}