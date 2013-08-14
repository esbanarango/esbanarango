
$(function() {

  // Background image
  $.backstretch('./../images/back.jpg');

  $(window).on("backstretch.show", function (e, instance) {
    $('.sky').css('display','block');
    $('.messages').addClass('animated bounceIn');
  });

  // Fixes for the rest
  if (bowser.safari || (bowser.msie && bowser.version < 11)) {
    $('.containerc-content').find('.sidebar').css({'top': '-300px','left': '330px','position': 'relative'})
    $('#card').css({'height': '330px', 'margin': '0 auto', 'width': '550px','padding-left':'109px'});
  }
  $('.containerc-content').find('.sidebar').show();
  
  $('ul.contact_information').find('li.heart').on( "hover", function( e ) {
    var text = ($(this).find('span').text() == 'Animals!')? 'Vegetarian!':'Animals!'
    var t = this
    $(t).find('span').slideToggle('fast',function() {
      $(t).find('span').text(text);
      $(t).find('span').slideToggle('fast')
    });
  });

});