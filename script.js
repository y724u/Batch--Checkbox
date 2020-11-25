$(function () {
  $('.js-all').on('change', function () {
    const $this =  $(this);
    const target = $this.data('target');
    // const $checkItem = $('#' + target)
    // const $checkInput = $($checkItem).find('input');
    const $checkInputs = $('#' + target).find('input');
    $($checkInputs).prop('checked', $this.prop('checked'));
  });

  //  js-languageItemのinputが変化（チェック）が入ったら
  $('.js-languageItem input').on('change', function () {
    // その層にあるインプットタグの数を数える
    const $inputLength = $(this).parent().parent().find('input').length;
    // その層にチェックされているの数を数える
    const $checkedLength = $(this).parent().parent().find('li :checked').length;
    // 親チェックボックス
    const $parentInput = $(this).parent().parent().prev().find('input');
    // タグ数とチェックされている数が同じだったら、その親チェックをいれる
    if ($inputLength == $checkedLength) {
      $($parentInput).prop('checked', true);
       // タグ数とチェックされている数が違ったら、その親チェックを外す
    } else {
      $($parentInput).prop('checked', false);
    }
    // タグ数とチェックされている数が違ったら、その親チェックを外す
  });
});
