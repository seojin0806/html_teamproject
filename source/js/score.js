let score = 0;
window.localStorage.setItem("result_score",0);

jQuery.addScore = function(value){
    score += value;
    $('.total-score').text("");
    $('.total-score').text(`${score}`);
    window.localStorage.setItem("result_score",score);
}
