function initMap() {

  const lugar1 = { lat: -5.1914, lng: -80.5897 };

  const lugar2 = { lat: -5.19389, lng: -80.59091 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16.5,
    center: lugar1,
  });

  new google.maps.Marker({
    position: lugar1,
    map: map,
    title: "Casa de Joshua",
    icon: {
      url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="70">
          <rect x="0" y="0" width="120" height="40" rx="8" ry="8" fill="skyblue"/>
          <text x="50%" y="25" font-size="12" font-family="Arial" font-weight="bold"
                text-anchor="middle" fill="white">Casa de Joshua</text>
          <polygon points="57,40 63,40 60,70" fill="skyblue"/>
        </svg>
      `),
      scaledSize: new google.maps.Size(120, 70)
    }
  });

  new google.maps.Marker({
    position: lugar2,
    map: map,
    title: "Casa de mi amigo",
    icon: {
      url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="70">
          <rect x="0" y="0" width="120" height="40" rx="8" ry="8" fill="tomato"/>
          <text x="50%" y="25" font-size="12" font-family="Arial" font-weight="bold"
                text-anchor="middle" fill="white">Casa de Luis</text>
          <polygon points="57,40 63,40 60,70" fill="tomato"/>
        </svg>
      `),
      scaledSize: new google.maps.Size(120, 70)
    }
  });
}

window.onload = initMap;