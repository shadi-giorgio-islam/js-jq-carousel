$(document).ready(function(){

  $('.next').click(pulsanteNext);

  $('.prev').click(pulsantePrev);

  $('.nav i').click(function(){
    var index = $(this).index();
    $('.nav i.active').removeClass('active');
    $(this).addClass('active');
    $('.images img.active').removeClass('active');
    $('.images img').eq(index).addClass('active');
  });

});
// Pulsante next
function pulsanteNext(){

  var imgAttiva = $('.images img.active');
  console.log(imgAttiva);

  var pallinoAttivo = $('.nav i.active');

  imgAttiva.removeClass('active');
  imgAttiva.next().addClass('active');

  pallinoAttivo.removeClass('active');
  pallinoAttivo.next().addClass('active');

  if(imgAttiva.hasClass('last')){
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }

}
// Pulsante prev
function pulsantePrev(){

  var imgAttiva = $('.images img.active');
  console.log(imgAttiva);

  var pallinoAttivo = $('.nav i.active');

  imgAttiva.removeClass('active');
  imgAttiva.prev().addClass('active');

  pallinoAttivo.removeClass('active');
  pallinoAttivo.prev().addClass('active');

  if(imgAttiva.hasClass('first')){
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }

}
