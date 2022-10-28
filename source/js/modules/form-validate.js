const formValidate = () => {
  const valideteForm = $('.basket__form').validate({
    rules: {
      address: {
        required: true,
        // minlength: 2
      },
      name: {
        required: true,
        // minlength: 2
      },
      email: {
        required: true,
        email: true,
        // minlength: 5
      },

      selectValue: {
        required: true,
      },

    },
    messages: {
      radio: 'This is a required field',
      address: {
        required: 'Ошибка ввода',
        // minlength: 2
      },
      name: {
        required: 'Ошибка ввода',
        minlength: 'Короткое имя',
      },
      email: {
        required: 'Ошибка ввода',
        // minlength: "Поле должно быть более 5-ти символов",
        email: 'Неверный синтаксис email',
      },
      selectValue: {
        required: 'Ошибка ввода. Выберите тип упаковки',
      },
    },

    // errorElement: "div",

    submitHandler: function(form) {
      console.log($('input[name="packagingType"]').val());
      const dataForm = $(".basket__form").serialize();
      console.log(dataForm);
      form.reset();
      // $("#form").serialize()
      // form.submit();
    },

    // errorPlacement: function(error, element) {
    //     var item = element.parents('.basket__fieldset');
    //     item.append(error);
    // },

    // success: function(label) {
    //   label.addClass("valid").text("Ok!")
    // },

    highlight: function(element, errorClass, validClass) {
      // console.log(element);
      $(element).add($(element).parent()).addClass("is-invalid");
      // $(element).addClass(errorClass).removeClass(validClass);
      // $(element.form).find("label[for=" + element.id + "]")
      //   .addClass(errorClass);
    },

    unhighlight: function(element, errorClass) {
      $(element).add($(element).parent()).removeClass("is-invalid");
    },

    // element: 'form',
    // errorClass: 'error',

    //   showErrors: function(errorMap, errorList) {
    //     $("#summary").html("Your form contains "
    //       + this.numberOfInvalids()
    //       + " errors, see details below.");
    //     this.defaultShowErrors();
    //   }

    // myErrors: function(element) {
    //   if(element.val() === '') {
    //     console.log('oshibkii');
    //   } else {
    //     console.log('net oshibok');
    //   };
    // },
  });

  // $.validator.addMethod("map", function (value, element, params) {
  //   return (value) ? true : false;
  // });

  // $.validator.addClassRules({
  //   selectValidation: {
  //     required: true,
  //   },
  // });

//   $('input[name="selectValue"]').addClass('flowerValidation').change(function(e) {
//     $('form').validate().element($(e.target));
// });
// validateForm.submit();

// var validator =  $('.basket__form').validate();
// valideteForm.element($('.basket__selected-value'));

$('input[name="packagingType"]').click(function (evt) {
  valideteForm.element($('.basket__selected-value'));
});

};

export {formValidate};
