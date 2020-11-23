
$(function () {
  $('#js-language').on('click', function () {
    $(".js-languageItem input").prop('checked', this.checked);
  });
  $(".js-languageItem").on('click', function () {
    if ($('.js-languageItem :checked').length == $('.js-languageItem :input').length) {
      $('#js-language').prop('checked', true);
    } else {
      $('#js-language').prop('checked', false);
    }
  });

  $('#js-income').on('click', function () {
    $(".js-checkItem input").prop('checked', this.checked);
  });
  $(".js-checkItem input").on('click', function () {
    if ($('.js-checkItem :checked').length == $('.js-checkItem :input').length) {
      $('#js-income').prop('checked', true);
    } else {
      $('#js-income').prop('checked', false);
    }
  });
});



