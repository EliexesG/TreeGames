const divInt = document.getElementById("integrantes");

async function LlenarDiv() {

    try {

        let response = await fetch("https://eliexesg.github.io/TreeGamesApi/api.json");

        let data = await response.json();

        data = data.integrantes;

        var htmlJuegos = "";

        $.each(data, function (key, integrante) {
            htmlJuegos += `<article class="card p-0 col-md m-2 articulo">
            <img height="300px" src="${integrante.foto}" alt="No hay Foto" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title text-center">${integrante.nombre}</h5>
                
                <p class="text-center">Cargo<span class="mt-2"><br>${integrante.cargo}</span></p>
                </div>
            </article>`;
        });

        divInt.innerHTML = htmlJuegos;

    } catch (error) {
        console.log(error);
    }
}

window.onload = LlenarDiv();
