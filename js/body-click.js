$(document).ready(function() {

  $('body').on('click', function(e) {

    var $parentSnippet = $(e.target).closest('.snippet_active')

    if ($parentSnippet.length == 0) {

      var $activeSnippet = $('.snippet_active');

      if ($activeSnippet.length == 0) {
        return;
      }

      $activeSnippet
        .removeClass('snippet_active')
        .find('.plashka').removeClass('plashka_active').css({opacity: 0})
        .find('.wrapper').css({display: 'none'});

      $activeSnippet
        .find('.name').css({opacity: 0});
    }

  });

});
