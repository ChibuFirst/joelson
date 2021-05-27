$(document).ready(function(){
    
    $('.parallax').parallax();
    
//    $(window).scroll(function(){
//        if($(window).scrollTop() > 300){
//            $('nav').addClass('white');
//        }
//        
//        else{
//            $('nav').removeClass('white');
//        }
//        
//    });
    
    $('.materialboxed').materialbox();
    $('.slider').slider({
        indicators: false
    });
    $('.sidenav').sidenav();
});