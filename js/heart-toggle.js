$(document).ready(function() {
  $('.snippet-list').on('click', '.like_btn', function(e) {
    $(e.currentTarget).toggleClass('like_btn_active');
  });

  $('.snippet-list').on('click', '.size_btn', function(e) {
    $(e.currentTarget).toggleClass('size_btn_active');
  });
});
