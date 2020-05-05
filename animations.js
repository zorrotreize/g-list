$(function() {

  // animmations des pictos en haut des colonnes-listes

  $('.env-pictos').css('opacity', '0');
  
  $('.entete-col').mouseenter(function(){
    $(this).children().first().animate({opacity: 1}, 300);      
    });

  $('.entete-col').mouseleave(function(){
    $(this).children().first().animate({opacity: 0}, 300);      
    });

  $('.env-pictos').mouseenter(function(){
    $(this).css('cursor','pointer');      
    });

  $('.env-pictos').mouseleave(function(){
    $(this).css('cursor','auto');      
    });

  // élargissement de la colonne des listes

  $('#piano ul').mouseenter(function(){
    $(this).animate({width: 250}, 200, 'swing');      
    });

  $('#piano ul').mouseleave(function(){
    $(this).animate({width: 145}, 200, 'swing');      
    });

  // focus d'une liste

  $('#piano ul li').mouseenter(function(){
    $(this).css('background-color','#58ACFA').css('cursor','pointer');      
    });

  $('#piano ul li').mouseleave(function(){
    $(this).css('background-color','transparent').css('cursor','auto');    
    });

  // focus d'une étiquette

  $('span.etiquette').mouseenter(function(){
    $(this).css('border-color','#FAFAFA').css('cursor','default');      
    });

  $('span.etiquette').mouseleave(function(){
    $(this).css('border-color','#585858').css('cursor','auto');   
    });

  });

