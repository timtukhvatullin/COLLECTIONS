$(document).ready(function() {
  $('.snippet-list').on('click', '.like_btn', function(e) {
    $(e.currentTarget).toggleClass('like_btn_active');
  });
});
