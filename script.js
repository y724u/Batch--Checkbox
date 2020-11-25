$(function () {
  $('.js-all').on('click', function () {
    const target = $(this).data('target');
    const checkItem = $('#' + target)
    const $checkInput = $(checkItem).find('input');
    $($checkInput).prop('checked', this.checked);
  });

  //  js-languageItemのinputが変化（チェック）が入ったら
  $('.js-languageItem input').on('change', function () {
    // その層にあるインプットタグの数を数える
    // const $inputLength = $(this).parent().parent().find('input').length;
    const $inputLength = $(this).parent().parent().find('input').length;
    console.log($inputLength);
    // その層にチェックされているの数を数える
    const $checkedLength = $(this).parent().parent().find('li :checked').length;
    console.log($checkedLength);

    // 親チェックボックス
    const $parentInput = $(this).parent().parent().prev().find('input');
    console.log($parentInput);
    // タグ数とチェックされている数が同じだったら、その親チェックをいれる
    if ($inputLength == $checkedLength) {
      $($parentInput).prop('checked', true);
    } else {
      $($parentInput).prop('checked', false);
    }
    // タグ数とチェックされている数が違ったら、その親チェックをいれる
  });
});


// $(function () {
//   $('.js-all').on('click', function () {
//     const target = $(this).data('target');
//     const checkItem = document.getElementById(target);
//     const $checkInput = $(checkItem).find('input');
//     $($checkInput).prop('checked', this.checked);
//   });

//     $( '.js-languageItem' ).on('click', function () {
//       const $inputLength = $('.js-languageItem').find('input').length;
//       // console.log($inputLength);
//       const $checkedLength = $(":checked").length;
//       // console.log($checkedLength);
//       const $test = $('.js-languageItem').prev().find('input');
//       if ($inputLength == $checkedLength) {
//         $($test).prop('checked', true);
//         console.log('hi');
//       } else {
//         console.log('no');
//         $($test).prop('checked', false);
//       }
//     });
// });

// $(function () {
//   $('.js-all').on('click', function () {
//     const target = $(this).data('target');
//     const checkItem = document.getElementById(target);
//     const $checkInput = $(checkItem).find('input');
//     $($checkInput).prop('checked', this.checked);
//   });

//     $( '.js-languageItem' ).on('change', function () {
//       const $jsCheck = $(this).attr('id')
//       console.log($jsCheck);
//       const $inputLength = $('#' + $jsCheck).find('input').length;
//       console.log($inputLength);
//       // const $checkedLength =  $('#' + $jsCheck ).find('input.checkbox:checked').length; 
//       const $checkedLength = $(":checked").length;
//       console.log($checkedLength);
//       // const $test = $('.js-languageItem').prev().find('input');
      // if ($inputLength == $checkedLength) {
      //   $($test).prop('checked', true);
      //   console.log('hi');
      // } else {
      //   console.log('no');
      //   $($test).prop('checked', false);
      // }
//     });
// });

// checkInput をクリックしたら

// その下層にあるインプットにチェックされている数とインプットの数を調べる

// 同じだったら、その親インプットのチェックを外す

// 違ったら、そのまま何もしない






// $(function () {
//   $('.js-all').on('click', function () {
//     const target = $(this).data('target');
//     const checkItem = document.getElementById(target);
//     const checkInput = $(checkItem).find('input');
//     $(checkInput).prop('checked', this.checked);
//   });


//   $(".js-languageItem").on('click', function () {
//     if ($('.js-languageItem :checked').length == $('.js-languageItem :input').length) {
//       $('#js-language').prop('checked', true);
//     } else {
//       $('#js-language').prop('checked', false);
//     }
//   });

//   $(".js-checkItem").on('click', function () {
//     if ($('.js-checkItem :checked').length == $('.js-checkItem :input').length) {
//       $('#js-income').prop('checked', true);
//     } else {
//       $('#js-income').prop('checked', false);
//     }
//   });
// });

// const checkItem = document.getElementById(target);