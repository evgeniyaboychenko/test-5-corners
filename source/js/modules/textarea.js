import {changeTextareaHeight} from '../modules/change-textarea-height';

const textarea = () => {
  $('textarea').on('keyup', function () {
    changeTextareaHeight();
    // $(this).height(0);
    // $(this).height(this.scrollHeight);

    // if ($(window).height() > 1023) {
    //   if ($('textarea').height() > 27) {
    //     $('textarea').parent().css('height', '66px');
    //   } else {
    //     $('textarea').parent().css('height', '45px');
    //   }
    // } else {
    //   if ($('textarea').height() > 27) {
    //     $('textarea').parent().css('height', '66px');
    //   } else {
    //     $('textarea').parent().css('height', '45px');
    //   }
    // }
});


  $(window).on('resize', function () {
    changeTextareaHeight();

    // const win = $(this);
    // $('textarea').height(0);
    // $('textarea').height($('textarea').get(0).scrollHeight);

    // if (win.height() > 1023) {
    //   if ($('textarea').height() > 27) {
    //     $('textarea').parent().css('height', '66px');
    //   } else {
    //     $('textarea').parent().css('height', '45px');
    //   }
    // } else {
    //   if ($('textarea').height() > 27) {
    //     $('textarea').parent().css('height', '66px');
    //   } else {
    //     $('textarea').parent().css('height', '45px');
    //   }
    // }
  });


  $('textarea').on("input", function () {
    changeTextareaHeight();
  //   $(this).height(0);
  //   $(this).height(this.scrollHeight);

  //   if ($(window).height() > 1023) {
  //     if ($('textarea').height() > 27) {
  //       $('textarea').parent().css('height', '66px');
  //     } else {
  //       $('textarea').parent().css('height', '45px');
  //     }
  //   } else {
  //     if ($('textarea').height() > 27) {
  //       $('textarea').parent().css('height', '66px');
  //     } else {
  //       $('textarea').parent().css('height', '45px');
  //     }
  //   }
 });
};


export {textarea};
