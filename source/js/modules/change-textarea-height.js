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

export {changeTextareaHeight};
