
$(function(){
    $('.header__userbox-name').click(function(event){
        if ($('body').hasClass('dark__theme')){
            $('body').removeClass('dark__theme');
        }else {
            $('body').addClass('dark__theme');
        }
      });
});