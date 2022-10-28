const initLabel = () => {
  const $formInputs = $('.basket__input-label input');
  $formInputs.each(function () {
    $(this).on("input", function () {
      const val = $(this).val();
      if (val !== '') {
        $(this).parent().addClass('is-fielld');
        console.log('est');
      } else {
        console.log('net');
        $(this).parent().removeClass('is-fielld');
      }
    });
  });
};

export {initLabel};
