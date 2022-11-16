let map;
let marker;
const miLatLong = { lat: 10.00807, lng: -84.21655 };
var directionsService = null;
var directionsRenderer = null;

function initMap() {

    try {

        directionsService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer();

        map = new google.maps.Map(document.getElementById("mapa"), {
            zoom: 16,
            center: miLatLong,
        });

        marker = new google.maps.Marker({
            position: miLatLong,
            map: map,
            title: 'TreeGames'
        });

        directionsRenderer.setMap(map);

    } catch (error) {
        console.log(error);
    }
}

function getActualLocation() {

    try {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position, ac) {

                let lat = position.coords.latitude;
                let lng = position.coords.longitude;

                drawRoute({ lat: lat, lng: lng });
            });
        }
        else {
            alert("El navegador no soporta la geolocalización");
        }

    } catch (error) {
        console.log(error);
    }
}

function drawRoute(coords) {
    try {

        var start = coords;
        var end = miLatLong;

        var request = {
            origin: start,
            destination: end,
            travelMode: 'DRIVING'
        };

        directionsService.route(request, function (result, status) {
            if (status == 'OK') {
                directionsRenderer.setDirections(result);
            }
        });

    } catch (error) {
        console.log(error);
    }
}

document.getElementById("trazarRuta").addEventListener('click', function () { getActualLocation() });

