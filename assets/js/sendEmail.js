
$("#formulario").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        nombre: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        fecha: {
            required: true,
            date: true
        },
        genero: {
            required: true
        },
        mensaje: {
            required: true,
            minlength: 5,
            maxlength: 200
        }
    }
});

document.getElementById("contactar").addEventListener('click', async () => {
    
    if($("#formulario").valid() == false){
        return;
    }

    await sendEmail();
});

async function sendEmail() {

    var ok = false;

    let email = $("#email").val();
    let nombre = $("#nombre").val();
    let fecha = $("#fecha").val();
    let rango = $("#rango").val();
    let genero = '';
    let grados = [];
    let mensaje = $("#mensaje").val();
    let edad = $("#edad").html();

    if ($('#masculino').is(":checked")) {
        genero = $('#masculino').val();
    } else if ($('#femenino').is(":checked")) {
        genero = $('#femenino').val();
    } else {
        alert("Debe seleccionar un género");
    }

    let gradosAcademicos = document.getElementsByClassName("opcionCheck")//.find(grado=> grado.checked);

    Array.from(gradosAcademicos).forEach((el) => {
        if (el.checked) {
            grados.push(el.value);
        }
    });

    var gradosStr = '';

    grados.forEach(e => {
        gradosStr += `<li>${e}</li>`;
    })


    await Email.send({
        Host: "smtp.elasticemail.com",
        Username: "eliasgabriel6100@gmail.com",
        Password: "C94FBD417510DC4B19F0074F32A2E4DF6336",
        To: 'eliasgabriel6100@gmail.com',
        From: "nodemailerproyecto@gmail.com",
        Subject: "This is the subject",
        Body: `<table border="1">
                        <thead>
                            <th>Email</th>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Rango</th>
                            <th>Genero</th>
                            <th>Grados</th>
                            <th>Mensaje</th>
                            <th>Edad</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${email}</td>
                                <td>${nombre}</td>
                                <td>${fecha}</td>
                                <td>${rango}</td>
                                <td>${genero}</td>
                                <td>
                                    <ol>
                                        ${gradosStr}
                                    </ol>
                                </td>
                                <td>${mensaje}</td>
                                <td>${edad}</td>
                            </tr>
                        </tbody>
                    </table>`,
        Port: "2525"
    }).then(
        message => {
            if(message == 'OK') {
                alert("Mensaje Enviado");
            }
            else{
                alert("Error al Enviar Mensaje");
            }
        }
    ).catch(e => {
        console.log(e);
    });

}