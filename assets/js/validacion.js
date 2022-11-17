// Validaciones
$("#formulario").validate({

    rules:{
        email:{
            email: true
        },
        nombre:{
            minlength: 2
        },
        fecha:{
            fecha:true
        }
    },
    messages: {
        email:"Por favor, ingresa tu email",
        nombre:{
            required: "Por favor, ingresa tu nombre",
            minlength: "Debe haber un minimo de 2 caracteres"
        },
        fecha:"Ingresa una fecha de nacimiento",

    },

    submitHandler: function(form) {
      form.submit();
    }
   }); 