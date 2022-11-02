const initSelect = () => {
  $('[data-button-select]').click(function (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    $(this).toggleClass('is-active');
    $('[data-select]').toggleClass('is-visible');
    $(this).addClass('is-selected');
  });

  function closeSelect() {
    $('[data-select]').removeClass('is-visible');
    $('[data-button-select]').removeClass('is-active');
  }

  $('input[name="selectValue"]').click(function (evt) {
    evt.stopPropagation();
    $('[data-button-select] .basket__select-title').text($(this).find(' +.basket__select-option').text());
    let packagingType = $(this).val();
    $('.basket__selected-value').val(packagingType);
    $('[data-button-select]').focus();
    closeSelect();
  });

  $(document).click(function (evt) {
    if (evt.target !== $('[data-button-select]') || evt.target !== $('input[name="selectValue"]')) {
      closeSelect();
    }
  });

  $(document).keydown(function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      closeSelect();
    }
  });
};

export {initSelect};
