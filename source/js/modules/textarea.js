import {changeTextareaHeight} from '../modules/change-textarea-height';

const textarea = () => {
  $('textarea').on('keyup', function () {
    changeTextareaHeight();
  });

  $(window).on('resize', function () {
    changeTextareaHeight();
  });

  $('textarea').on('input', function () {
    changeTextareaHeight();
  });
};

export {textarea};
