$(document).ready(function () {
    //모달 창 활성화...
    $('.active-modal').click(function (e) { 
        $('.modal-div').fadeIn();
        let id = $('.active-modal').attr('id');
        //만약 체력 증가 버튼을 눌렀다면..
        if(id=='hp')
        {
            //체력 정보가져오고 설정하는 로직...
            upgrade_hp();
        }
        else if(id=='speed'){
            //공격을 업그레이드 할려고 할때...
        }
    });
    //모달창 닫기...
    $('.deactive-modal').click(function(e){
        $('.modal-div').fadeOut();
    })
});

function upgrade_hp(){
    
}