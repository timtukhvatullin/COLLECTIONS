$(function(){
  var $snippets = $('.snippet'); //Все сниппеты в переменную


  $snippets.on('mouseenter', function(e){
    var $snippet = $(this);
    var sheight = $snippet.outerHeight();

    $snippet.css({height: sheight});
    $snippet.data('origHeight', sheight); //Сохраняем знаечение дефолтной высоты
    $snippet.find('.plashka').css({display: 'block', paddingTop: sheight});

    $snippet.find('.plashka').animate(
      {opacity: '1'},
      200,
      function(e) {
        $snippet.find('.name').animate(
          {opacity: '1'},
          200
        )
      }
    );
  });


  $snippets.on('mouseleave', function(e){
    var $snippet = $(this);

    $snippet.find('.name').animate(
      {opacity: '0'},
      150,
      function() {
        $snippet.find('.plashka').animate(
          {opacity: '0'},
          150
        )
      }
    )
  });


});
