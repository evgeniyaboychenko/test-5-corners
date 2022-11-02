const changeTextareaHeight = () => {
  const textarea = $('textarea');
  textarea.height(0);
  textarea.height(textarea.get(0).scrollHeight);

  if (textarea.height() > 27) {
    textarea.parent().css('height', '66px');
  } else {
    textarea.parent().css('height', '45px');
  }
};

//   $('textarea').on( 'keyup', function () {
//     $(this).height(0);
//     $(this).height(this.scrollHeight);

//     if ($(window).height() > 1023) {
//       if ($('textarea').height() > 27) {
//         $('textarea').parent().css('height', '66px');
//       } else {
//         $('textarea').parent().css('height', '45px');
//       }
//     } else {
//       if ($('textarea').height() > 27) {
//         $('textarea').parent().css('height', '66px');
//       } else {
//         $('textarea').parent().css('height', '45px');
//       }
//     }
// });


//   $(window).on('resize', function () {

//     const win = $(this);
//     $('textarea').height(0);
//     $('textarea').height($('textarea').get(0).scrollHeight);

//     if (win.height() > 1023) {
//       if ($('textarea').height() > 27) {
//         $('textarea').parent().css('height', '66px');
//       } else {
//         $('textarea').parent().css('height', '45px');
//       }
//     } else {
//       if ($('textarea').height() > 27) {
//         $('textarea').parent().css('height', '66px');
//       } else {
//         $('textarea').parent().css('height', '45px');
//       }
//     }
//   });


//   $('textarea').on("input", function () {
//     $(this).height(0);
//     $(this).height(this.scrollHeight);

//     if ($(window).height() > 1023) {
//       if ($('textarea').height() > 27) {
//         $('textarea').parent().css('height', '66px');
//       } else {
//         $('textarea').parent().css('height', '45px');
//       }
//     } else {
//       if ($('textarea').height() > 27) {
//         $('textarea').parent().css('height', '66px');
//       } else {
//         $('textarea').parent().css('height', '45px');
//       }
//     }
//   });
// };

export {changeTextareaHeight};
