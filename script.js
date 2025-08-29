function initMap() {
  // Coordenadas (ejemplo: Piura, Perú)
  const lugar = { lat: -5.1914, lng: -80.5897 };

  // Crear el mapa centrado en "lugar"
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: lugar,
  });

  // Crear un marcador personalizado con SVG (rectángulo + flecha)
  const marker = new google.maps.Marker({
    position: lugar,
    map: map,
    title: "Mi Casa",
    icon: {
      url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="70">
          <!-- Rectángulo -->
          <rect x="0" y="0" width="100" height="40" rx="8" ry="8" 
                fill="skyblue"/>
          
          <!-- Texto centrado dentro del rectángulo -->
          <text x="50%" y="25" 
                font-size="14" font-family="Arial" font-weight="bold"
                text-anchor="middle" 
                fill="white">Mi Casa</text>
          
          <!-- Flecha más larga y fina -->
          <polygon points="47,40 53,40 50,70" fill="skyblue"/>
        </svg>
      `),
      scaledSize: new google.maps.Size(100, 70) // más alto por la flecha
    }
  });
}

// Inicializar el mapa al cargar la página
window.onload = initMap;
