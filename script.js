$(function () {
  $('.js-all').on('click', function () {
    const target = $(this).data('target');
    const checkItem = document.getElementById(target);
    $($(checkItem).find('input')).prop('checked', this.checked);
  });
});

// $(function () {

//   $(".js-languageItem").on('click', function () {
//     if ($('.js-languageItem :checked').length == $('.js-languageItem :input').length) {
//       $('#js-language').prop('checked', true);
//     } else {
//       $('#js-language').prop('checked', false);
//     }
//   });

//   $(".js-checkItem input").on('click', function () {
//     if ($('.js-checkItem :checked').length == $('.js-checkItem :input').length) {
//       $('#js-income').prop('checked', true);
//     } else {
//       $('#js-income').prop('checked', false);
//     }
//   });
// });

// $('.js-modalOpen').on('click', function () {
//   const target = $(this).data('target');
//   const modal = document.getElementById(target);
//   scrollPosition1 = $(window).scrollTop();
//   $(modal).addClass('show_modal');
//   $('body').addClass('fixed').css({ 'top': -scrollPosition1 });
//   return false;
// });





