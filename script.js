$(function () {
  $('.js-all').on('change', function () {
    const $this = $(this);
    const target = $this.data('target');
    const $checkInputs = $('#' + target).find('input');
    $($checkInputs).prop('checked', $this.prop('checked'));
  });

  //  js-checkBoxItemのinputが変化（チェック）が入ったら
  $('.js-checkBoxItem input').on('change', function () {
    const $this = $(this);
    const $jsAllWrap = $this.parents('.js-checkBoxItem');

    // その層にあるインプットタグの数を数える
    // const $inputLength = $this.parent().parent().find('input').length;

    // ペアレンツを使用してインプットの数を数える
    // const $inputLength = $this.parents('.js-languageItem').find('input').length;

    // inputを全て取得する
    const $inputItems = $jsAllWrap.find('input');

    // その層にチェックされているの数を数える
    // const $checkedLength = $this.parent().parent().find('li :checked').length;

    // その層にチェックされているの数を数える ペアレンツ
    // const $checkedLength = $this.parents('.js-languageItem').find('li :checked').length;

    // フィルターを使ってcheckedを取得
    const $checkedItems = $($inputItems).filter(':checked');

    // 親チェックボックス
    // const $parentInput = $this.parent().parent().prev().find('input');

    const $parentInput = $jsAllWrap.prev('.js-prev').find('input');
    // タグ数とチェックされている数が同じだったら、その親チェックをいれる

    if ($inputItems.length === $checkedItems.length) {
      $($parentInput).prop('checked', true);
      // タグ数とチェックされている数が違ったら、その親チェックを外す
    } else {
      $($parentInput).prop('checked', false);
    }
    // タグ数とチェックされている数が違ったら、その親チェックを外す
  });
});
