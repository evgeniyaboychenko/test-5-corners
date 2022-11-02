const initLabel = () => {
  const $formInputs = $('[data-input]');
  $formInputs.each(function () {
    $(this).on("input", function () {
      const val = $(this).val();
      if (val !== '') {
        $(this).parent().addClass('is-fielld');
      } else {
        $(this).parent().removeClass('is-fielld');
      }
    });
  });
};

export {initLabel};
