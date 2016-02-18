$(document).ready(function(){

  // Slider of testimonials
  //---------------------------------------------------------------
  $('.bxslider').bxSlider({
    mode: 'fade',
    pager: false,
    nextSelector: '.slider-testimonial__next',
    prevSelector: '.slider-testimonial__prev',
    nextText: 'Próximo',
    prevText: 'Anterior',
    adaptiveHeight: true,
    responsive: true
  });

  // Phone number mask
  //---------------------------------------------------------------
  $("#Field16").mask("(99) 9999?9-9999");
  $("#Field16").on("blur", function() {
      var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );

      if( last.length == 3 ) {
          var move = $(this).val().substr( $(this).val().indexOf("-") - 1, 1 );
          var lastfour = move + last;

          var first = $(this).val().substr( 0, 9 );

          $(this).val( first + '-' + lastfour );
      }
  });

  // Form Wufoo validated with jquery
  //---------------------------------------------------------------
  $(".js-register-form").validate({

    //debug: true,

    // Define as regras
    rules:{

      Field43:{
        //name
        required: true, minlength: 2
      },

      Field44:{
        // sobrenome
        required: true, minlength: 2
      },

      Field41:{
        // projeto e empresa
        required: true, minlength: 2
      },

      Field3:{
        // email
        required: true, email: true
      },

      Field16:{
        // telefone
        required: true,
        minlength: 14,
        maxlength: 15
      },

      Field52:{
        // skype
        required: true, minlength: 2
      },

      Field48:{
        // descriçao do projeto
        required: true, minlength: 2
      }

    },

    // Define as mensagens de erro para cada regra
    messages:{

      Field43:{
        //name
        required: "Por favor, preencha com seu nome."
      },

      Field44:{
        // sobrenome
        required: "Por favor, preencha com seu sobrenome."
      },

      Field41:{
        // projeto e empresa
        required: "Por favor, preencha com o nome do projeto."
      },

      Field3:{
        // email
        required: "Por favor, preencha com um e-mail válido."
      },

      Field16:{
        // telefone
        required: "Por favor, preencha com um telefone válido."
      },

      Field52:{
        // skype
        required: "Por favor, preencha com seu nome."
      },

      Field48:{
        // descriçao do projeto
        required: "Por favor, descreva brevemente seu projeto."
      }

    },

    // submit form
    submitHandler: function(form) {
      form.submit();
    }


  });

  jQuery.extend(jQuery.validator.messages, {
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Este campo deve conter, no mínimo, {0} caracteres"),
    email: "Por favor, preencha com um e-mail válido.",
    number: "Por favor, preencha com um telefone válido.",
  });

  // Hamburger mobile menu
  //---------------------------------------------------------------
  var $btnMenu = $('.js-toggle-menu');
  var $navbar  = $('.js-navbar');
  var $menuItem = $('.header-navigation__item');

  $btnMenu.on('click', function(e) {
    e.preventDefault();
    $btnMenu.toggleClass('toggle--close');
    $navbar.toggleClass('header-navigation--is-open');
  });
  $menuItem.on('click', function(e) {
    $navbar.removeClass('header-navigation--is-open');
    $btnMenu.toggleClass('toggle--close');
  });


});












