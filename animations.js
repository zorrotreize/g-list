$(function() {

  // initialisations

  var labelClicState = false;


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

// focus on list title

  $('.list-title').mouseenter(function(){
    $(this).css('background-color','white').css('box-shadow', '4px 4px 10px 2px #E6E6E6').css('cursor','pointer');      
    });

  $('.list-title').mouseleave(function(){
    $(this).css('background-color','transparent').css('box-shadow', 'none').css('cursor','auto');      
    });

  // focus on line

  $('span.line').mouseenter(function(){
    $(this).css('background-color','white').css('box-shadow', '4px 4px 10px 2px #E6E6E6').css('cursor','pointer');      
    });
  // css('box-shadow', '6px 6px 20px 4px #E6E6E6')

  $('span.line').mouseleave(function(){
    $(this).css('background-color','transparent').css('box-shadow', 'none').css('cursor','auto');      
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

  $('[class*="labeloff"]').mouseenter(function(){
      $(this).css('background-color','#0489B1').css('cursor','pointer');    
      });

  $('[class*="labelon"]').mouseenter(function(){
        $(this).css('background-color','#87C7DA').css('cursor','pointer');    
        });

  $('[class*="labeloff"]').mouseleave(function(){
      $(this).css('background-color','#87C7DA').css('cursor','auto');    
      });

  $('[class*="labelon"]').mouseleave(function(){
      $(this).css('background-color','#0489B1').css('cursor','auto');    
      });

  });

  // clic on label

  $('[class*="label"]').click(function(){
      labelClicState = !labelClicState;  
      });















