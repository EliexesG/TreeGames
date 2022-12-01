
const div = document.getElementById("proyectos");

async function LlenarDiv() {

    try {

        let response = await fetch("https://eliexesg.github.io/TreeGamesApi/api.json");

        let data = await response.json();

        data = data.juegos;

        console.log(data)

        var htmlJuegos = "";

        $.each(data, function (key, juego) {
            htmlJuegos += `<article class="card p-0 col-md m-2 articulo">
            <img src="${juego.imagen}" height="250px"  class="card-img-top">
            <div class="card-body">
                <h5 class="card-title text-center">${juego.nombre}</h5>
                
                <p class="text-center">Descripcion<span class="mt-2"><br>${juego.descripcion}</span></p>
                <p class="text-center">Fecha de Salida<span class="mt-2"><br>${juego.fechaSalida}</span></p>
                <button onClick="AbrirPagina(${juego.id})"class="btn mt-3 w-50 juego">Conocer más</button>
                </div>
            </article>`;
        });

        div.innerHTML = htmlJuegos;

    } catch (error) {
        console.log(error);
    }
}

window.onload = LlenarDiv();

async function AbrirPagina(id) {

    try {

        let response = await fetch("https://eliexesg.github.io/TreeGamesApi/api.json");

        let data = await response.json();

        data = data.juegos;

        data = data.find(juego => juego.id === id);

        window.localStorage.clear();

        window.localStorage.setItem('juego', JSON.stringify(data));

        window.open("pages/proyecto.html", "_self")

    } catch (error) {
        console.log(error)
    }

}
