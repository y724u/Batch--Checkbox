$(function () {
  $(function() {
    // 1. 「全選択」する
    $('#all').on('click', function() {
      $("input[name='language']").prop('checked', this.checked);
    });
    // 2. 「全選択」以外のチェックボックスがクリックされたら、
    $("input[name='language']").on('click', function() {
      if ($('#check__item :checked').length == $('#check__item :input').length) {
        // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
        $('#all').prop('checked', true);
      } else {
        // 1つでもチェックが入っていたら、「全選択」 = checked
        $('#all').prop('checked', false);
      }
    });
  });

  $(function() {
    // 1. 「全選択」する
    $('#all-second').on('click', function() {
      $("input[name='income']").prop('checked', this.checked);
    });
    // 2. 「全選択」以外のチェックボックスがクリックされたら、
    $("input[name='income']").on('click', function() {
      if ($('#check__item2 :checked').length == $('#check__item2 :input').length) {
        // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
        $('#all-second').prop('checked', true);
      } else {
        // 1つでもチェックが入っていたら、「全選択」 = checked
        $('#all-second').prop('checked', false);
      }
    });
  });
});
