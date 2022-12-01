
let div = document.getElementById("proyecto")

function CargarDiv() {

    let juego = JSON.parse(window.localStorage.getItem('juego'));

    document.title = "TreeGames " + juego.nombre;

    div.innerHTML = `<div class="col-md-6 p-3 mb-3" id="fondo">
                        <h1 class="light">${juego.nombre}</h1>
                        <p class="light">Fecha de Salida: <span class="light">${juego.fechaSalida}</span></p>
                     </div>
                     <div>
                        <h2>Descripción</h2>
                        <p>${juego.descripcion}</p>
                     </div>
                     <hr class="table-group-divider">
                     <div>
                        <h2 class="mb-3">Video</h2>
                        <div class="ratio ratio-16x9">
                            <video controls>
                                <source type='video/mp4' src="${juego.video}">
                            </video>
                        </div>
                     </div>
                     `

    let divFondo = document.getElementById("fondo");


    divFondo.style.background = `url("${juego.imagen}") center`
    divFondo.style.borderRadius = '15px';
    divFondo.style.backgroundSize = "200% 200%";
    divFondo.style.height = "150px";
    divFondo.style.textShadow = "0px 6px 5px #1F0D08";
}

window.onload = CargarDiv;