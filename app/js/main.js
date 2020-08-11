
$(function(){
    $('.header__userbox-name').click(function(event){
        if ($('body').hasClass('dark__theme')){
            $('body').removeClass('dark__theme');
        }else {
            $('body').addClass('dark__theme');
        }
      });
    
    $('.leftside__person-name').click(function(event){
        if ($('.leftside__person__inner').hasClass('open')){
            $('.leftside__person__inner').removeClass('open');
            $('.leftside__person__inner').slideDown(300);
            $('.arrow__name').toggleClass('arrow-down');
        }else {
            $('.leftside__person__inner').addClass('open');
            $('.leftside__person__inner').slideUp(300);
            $('.arrow__name').toggleClass('arrow-down');
        };
      });
       
    $('.action__type').on('click',function(){
        $('.action__list').slideToggle();
    }); 
        
    $('.deal__rightside-show-btn').on('click',function(){
        $('.deal__rightside').toggleClass('width-zero');
        $('.ico-show-btn').toggleClass('rotate__180');
    }); 

});