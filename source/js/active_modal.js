$(document).ready(function () {
    //모달 창 활성화...
    $('.active-modal').click(function (e) { 
        $('.modal-div').fadeIn();
    });
    //모달창 닫기...
    $('.deactive-modal').click(function(e){
        $('.modal-div').fadeOut();
    })
});
