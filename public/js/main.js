
$(function() {

  // Background image
  $.backstretch('./../images/back.jpg');

  $(window).on("backstretch.show", function (e, instance) {
    $('.sky').css('display','block');
    $('.messages').addClass('animated bounceIn');
  });
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