$(function() {

  // picto animations in the top of lists

  $('.pictos-bar').css('opacity', '0');
  
  $('.column-header').mouseenter(function(){
    $(this).children().first().animate({opacity: 1}, 300);      
    });

  $('.column-header').mouseleave(function(){
    $(this).children().first().animate({opacity: 0}, 300);      
    });

  $('.pictos-bar').mouseenter(function(){
    $(this).css('cursor','pointer');      
    });

  $('.pictos-bar').mouseleave(function(){
    $(this).css('cursor','auto');      
    });

  // //changing width of list column

  // $('#list-column ul').mouseenter(function(){
  //   $(this).animate({width: 250}, 200, 'swing');      
  //   });

  // $('#list-column ul').mouseleave(function(){
  //   $(this).animate({width: 145}, 200, 'swing');      
  //   });

  // //focus d'une liste

  // $('#list-column ul li').mouseenter(function(){
  //   $(this).css('background-color','#58ACFA').css('cursor','pointer');      
  //   });

  // $('#list-column ul li').mouseleave(function(){
  //   $(this).css('background-color','transparent').css('cursor','auto');    
  //   });

  // focus on label

  $('span.label').mouseenter(function(){
    $(this).css('border-color','#FAFAFA').css('cursor','default');      
    });

  $('span.label').mouseleave(function(){
    $(this).css('border-color','#585858').css('cursor','auto');   
    });

  });

