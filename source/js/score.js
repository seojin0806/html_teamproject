let score = 0;

jQuery.addScore = function(value){
    score += value;
    $('#score').text("");
    $('#score').text(`${score}`);
}
