
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

    $('.arrow__work').click(function(event){
        if ($('.rightside__work-inner').hasClass('open')){
            $('.rightside__work-inner').removeClass('open');
            $('.rightside__work-inner').slideDown(300);
            $('.arrow__work').toggleClass('arrow-down-right');
        }else {
            $('.rightside__work-inner').addClass('open');
            $('.rightside__work-inner').slideUp(300);
            $('.arrow__work').toggleClass('arrow-down-right');
        };
      });

    $('.arrow__avtorepair').click(function(event){
        if ($('.rightside__avtorepair-inner').hasClass('open')){
            $('.rightside__avtorepair-inner').removeClass('open');
            $('.rightside__avtorepair-inner').slideDown(300);
            $('.arrow__avtorepair').toggleClass('arrow-down-right');
        }else {
            $('.rightside__avtorepair-inner').addClass('open');
            $('.rightside__avtorepair-inner').slideUp(300);
            $('.arrow__avtorepair').toggleClass('arrow-down-right');
        };
      });

      $('.arrow__account').click(function(event){
        if ($('.rightside__account-inner').hasClass('open')){
            $('.rightside__account-inner').removeClass('open');
            $('.rightside__account-inner').slideDown(300);
            $('.arrow__account').toggleClass('arrow-down-right');
        }else {
            $('.rightside__account-inner').addClass('open');
            $('.rightside__account-inner').slideUp(300);
            $('.arrow__account').toggleClass('arrow-down-right');
        };
      });

      $('.arrow__answer').click(function(event){
        if ($('.rightside__answer-inner').hasClass('open')){
            $('.rightside__answer-inner').removeClass('open');
            $('.rightside__answer-inner').slideDown(300);
            $('.arrow__answer').toggleClass('arrow-down-right');
        }else {
            $('.rightside__answer-inner').addClass('open');
            $('.rightside__answer-inner').slideUp(300);
            $('.arrow__answer').toggleClass('arrow-down-right');
        };
      });

});