$(document).ready(function () {
   $('#go-to-store').click(function (e) {
        window.open('./main.html', '_self');
   });
   $('#restart').click(function () {
        console.log("선택됨..");
        window.open('./game.html',"_self");
   });
   let current_player  = JSON.parse(localStorage.getItem("player_info")).current_player;
   $('#img-charac').attr('src', `../images/SD/sd_0${current_player}.png`);
   console.log(current_player);
});