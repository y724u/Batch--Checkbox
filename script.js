
$(function () {
  $('#js-language').on('click', function () {
    $("input[name='language']").prop('checked', this.checked);
  });
  $("input[name='language']").on('click', function () {
    if ($('#check__item :checked').length == $('#check__item :input').length) {
      $('#js-language').prop('checked', true);
    } else {
      $('#js-language').prop('checked', false);
    }
  });

  $('#js-income').on('click', function () {
    $("input[name='income']").prop('checked', this.checked);
  });
  $("input[name='income']").on('click', function () {
    if ($('#check__item2 :checked').length == $('#check__item2 :input').length) {
      $('#js-income').prop('checked', true);
    } else {
      $('#js-income').prop('checked', false);
    }
  });
});



