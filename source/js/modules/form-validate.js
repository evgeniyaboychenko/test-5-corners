const formValidate = () => {
  const validateForm = $('.basket__form').validate({
    rules: {
      address: {
        required: true,
      },
      name: {
        required: true,
        minlength: 2,
      },
      phone: {
        required: true,
        phone: true,
      },
      email: {
        required: true,
        email: true,
      },
      selectValue: {
        required: true,
      },

    },
    messages: {
      address: {
        required: 'Ошибка ввода',
      },
      name: {
        required: 'Ошибка ввода',
        minlength: 'Ошибка ввода. Короткое имя',
      },
      phone: {
        required: 'Ошибка ввода',
        phone: 'Ошибка ввода.',
      },
      email: {
        required: 'Ошибка ввода',
        email: 'Неверный синтаксис email',
      },
      selectValue: {
        required: 'Ошибка ввода. Выберите тип упаковки',
      },
    },

    submitHandler: function(form) {
      // const $dataForm = $(".basket__form").serializeArray();
      const formData = new FormData(form);
      formData.delete('packagingType');

      for (const [key, value] of formData) {
        console.log(`${key}: ${value}\n`);
      }

      resetSelect();
      form.reset();
      resetAddress();
      resetFieldsLabel();
    },

  highlight: function(element, errorClass, validClass) {
    $(element).add($(element).parent()).addClass("is-invalid");
  },

  unhighlight: function(element, errorClass) {
    $(element).add($(element).parent()).removeClass("is-invalid");
  },

  });

  $.validator.addMethod('phone', function (value, element) {
    if (/[^0-9()+ /-]/.test(value)) {
      return false;
    } else {
      return true;
    }
  });

  $('input[name="packagingType"]').click(function () {
    validateForm.element($('.basket__selected-value'));
  });

  function resetSelect() {
    $('[data-button-select] .basket__select-title').text('Тип упаковки');
    $('[data-button-select]').removeClass('is-selected');
  }

  function resetAddress() {
    $('#suggest').text('');
  }

  function resetFieldsLabel() {
    const $formInputs = $('[data-input]');
    $formInputs.each(function () {
      $(this).parent().removeClass('is-fielld');
    });
  }
};

export {formValidate};
