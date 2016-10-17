$(document).ready(function() {

  $('.snippet-list').on('click', '.price_btn', function(e) {
    var $snippet = $(e.currentTarget).closest('.snippet')
    $snippet.addClass('snippet_active');
    $snippet.find('.plashka').addClass('plashka_active');
    $snippet.find('.wrapper')
      .css({display: 'block'})
      .animate(
        {opacity: '1'},
        200);
      });

});
