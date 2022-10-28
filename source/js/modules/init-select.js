const initSelect = () => {
  $('[data-button-select]').click(function (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    $(this).toggleClass('is-active');
    // $('[data-select]').show();
    $('[data-select]').toggleClass('is-visible');
    $(this).addClass('is-selected');
  });

  function closeSelect() {
    $('[data-select]').removeClass('is-visible');
    // $('[data-select]').hide();
    $('[data-button-select]').removeClass('is-active');
  }

  $('input[name="packagingType"]').click(function (evt) {
    evt.stopPropagation();
    // $('.basket__selected-value').submit();
    $('[data-button-select] .basket__select-title').text($(this).find(' +.basket__select-option').text());
    let selectValue = $(this).val();
    $('.basket__selected-value').val(selectValue);
    // let ddd = $('.basket__selected-value').val();
    // console.log(ddd);
    $('[data-button-select]').focus();
    closeSelect();

   

    // $('[data-select]').removeClass('is-visible');
    // $('[data-button-select]').removeClass('is-active');
  });

  $(document).click(function (evt) {
    if (evt.target !== $('[data-button-select]') || evt.target !== $('input[name="packagingType"]')) {
      closeSelect();
      // $('[data-select]').removeClass('is-visible');
      // $('[data-button-select]').removeClass('is-active');
    }
  });

  $(document).keydown(function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      closeSelect();
    }
  });
};

export {initSelect};
