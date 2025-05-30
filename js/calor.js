function initMap() {
  const mapa = new google.maps.Map(document.getElementById("mapaCalor"), {
    zoom: 5,
    center: { lat: 13.705243, lng: -89.24231 },
    mapTypeId: "roadmap",
  });

  const heatmapData = [
    new google.maps.LatLng(13.705243, -89.24231),   // Punto 1
    new google.maps.LatLng(13.696674, -89.197927),  // Punto 2
    new google.maps.LatLng(14.692511, -87.86136),   // Punto 3
    new google.maps.LatLng(12.022747, -86.252007),  // Punto 4
    new google.maps.LatLng(8.103289, -80.596013)    // Punto 5
  ];

  const heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    radius: 30
  });

  heatmap.setMap(mapa);
}
