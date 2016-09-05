$(function(){
  var $snippets = $('.snippet'); //Все сниппеты в переменную


  $snippets.on('mouseenter', function(e){
    var $snippet = $(this);
    var sheight = $snippet.outerHeight();

    $snippet.css({height: sheight});
    $snippet.data('origHeight', sheight); //Сохраняем знаечение дефолтной высоты
    $snippet.find('.name').css({display: 'block'});

    $snippet.animate(
      {height: this.scrollHeight},
      200,
      function(e) {
        $snippet.find('.name').animate(
          {opacity: 1},
          200
        )
      }
    );
  });


  $snippets.on('mouseleave', function(e){
    var $snippet = $(this);

    $snippet.find('.name').animate(
      {opacity: 0},
      150,
      function() {
        $snippet.animate(
          {height: $snippet.data('origHeight')},
          150
        )
      }
    )
  });


});
