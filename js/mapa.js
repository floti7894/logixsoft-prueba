function initMap() {
  const mapa = new google.maps.Map(document.getElementById("mapa"), {
    center: { lat: 13.705243, lng: -89.24231 },
    zoom: 6,
  });

  const puntos = [
    { nombre: "Punto 1", lat: 13.705243, lng: -89.24231 },
    { nombre: "Punto 2", lat: 13.696674, lng: -89.197927 },
    { nombre: "Punto 3", lat: 14.692511, lng: -87.86136 },
    { nombre: "Punto 4", lat: 12.022747, lng: -86.252007 },
    { nombre: "Punto 5", lat: 8.103289, lng: -80.596013 },
  ];

  puntos.forEach(punto => {
    new google.maps.Marker({
      position: { lat: punto.lat, lng: punto.lng },
      map: mapa,
      title: punto.nombre,
    });
  });
}
