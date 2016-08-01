$(function(){
  var $rotators = $('.fullsize-rotator');
  var $imglinks = $('.rotator-nav a');

  $rotators.on('mouseenter', function(e){
    $(this).find('.rotator-icons').animate({height: '20px'}, 200);
  }).on('mouseleave', function(e){
    $(this).find('.rotator-icons').animate({height: 0}, 150);
  });

  $imglinks.on('mouseenter', function(e){
    var imgclass = '.' + $(this).attr('class');
    var imglink  = $(this).attr('href');

    // update main image src
    var $rotators = $(this).parents('.fullsize-rotator').find('.currentimg').attr('src', imglink);

    // update current rotator icon
    var $rotators = $(this).parents('.fullsize-rotator').find('.rotator-icons');

    if($rotators.children(imgclass).hasClass('active')) {
      // already active icon -- do nothing
    } else {
      // remove active class then add to new icon
      $rotators.children('span').removeClass('active');
      $rotators.children(imgclass).addClass('active');
    }
  });
});
