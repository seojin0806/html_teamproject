var score_display = document.querySelector(".score-display");
var gold_display = document.querySelector(".gold-display");
var distance_display = document.querySelector(".distance-display");

var distance1 = window.localStorage.getItem("result_distance");
var gold = window.localStorage.getItem("result_gold");
var score = window.localStorage.getItem("result_score");

score_display.innerHTML =  score;
gold_display.innerHTML = gold + "G";
distance_display.innerHTML = distance1 + "M";

var total_gold = document.querySelector(".money");
total_gold.innerHTML = window.localStorage.getItem("gold")+" G"