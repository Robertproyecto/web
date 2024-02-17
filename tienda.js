function initMap() {
    // Coordenadas para centrar el mapa en Lima, Perú
    var lima = { lat: -12.0464, lng: -77.0428 };
  
    // Crea un mapa en el div con id "map"
    var map = new google.maps.Map(document.getElementById('map'), {
      center: lima,
      zoom: 11
    });
  
    // Lista de direcciones en Lima, Perú
    var addresses = [
      { address: 'Av. Bolivia 1198, Breña, Lima, Perú', title: 'Pizza Raul Breña' },
      { address: 'Avenida General Garzón 1585, Jesus Maria, Lima, Perú', title: 'Pizza Raul Jesús María' },
      { address: 'Jirón José de la Torre Ugarte 357, Lince, Lima, Perú', title: 'Pizza Raul Lince' },
      { address: 'Av. Alfredo Benavides 4340, Santiago de Surco, Lima, Perú', title: 'Pizza Raul Benavides' },
      { address: 'Avenida La Encalada 911, Santiago de Surco, Lima, Perú', title: 'Pizza Raul Encalada' },
      { address: 'Avenida Angamos 2506, Surquillo, Lima, Perú', title: 'Pizza Raul Primavera' },
      { address: 'Av. Angamos Este 1047, Surquillo, Lima, Perú', title: 'Pizza Raul Angamos' },
      { address: 'Avenida Manuel Villarán 0, Surquillo, Lima, Perú', title: 'Pizza Raúl Villaran' },
      { address: 'Avenida Tantamayo 0, San Martin de Porres, Lima, Perú', title: 'Pizza Raul Vipol' },
      { address: 'Avenida Tomas Valle MZ G LT 6, San Martin de Porres, Lima, Perú', title: 'Pizza Raul Tomas Valle' },
      { address: 'Av. Izaguirre 2578, San Martin de Porres, Lima, Perú', title: 'Pizza Raul Izaguirre' },
      { address: 'Avenida Canadá 3605, San Luis, Lima, Perú', title: 'Pizza Raul Canadá' },
      { address: 'Avenida Ramon Vargas Machuca 122, San Juan de Miraflores, Lima, Perú', title: 'Pizza Raul Pedro Miota' },
      { address: 'Avenida Canto Grande 0, San Juan de Lurigancho, Lima, Perú', title: 'Pizza Raul Canto Grande' },
      { address: 'Avenida Emilio Cavenecia 146, Miraflores, Lima, Perú', title: 'Pizza Raul Cavenecia' },
      { address: 'Av. Simon Bolivar 1710, Pueblo Libre, Lima, Perú', title: 'Pizza Raul Bolivar' },
      { address: 'Jirón Leoncio Prado 978, Magdalena, Lima, Perú', title: 'Pizza Raul Magdalena' },
      { address: 'Avenida Próceres 4952, Los Olivos, Lima, Perú', title: 'Pizza Raul Naranjal' },
      { address: 'Av. 13 de Enero 1863, Lurigancho, Lima, Perú', title: 'Pizza Raul Calle 13' },
      { address: 'Avenida las Flores de Primavera 1401, Lurigancho, Lima, Perú', title: 'Pizza Raul Jardines' },
      { address: 'Avenida Ricardo Elías Aparicio 141, La Molina, Lima, Perú', title: 'Pizza Raul Molicentro' },
      { address: 'Avenida Áncash MZ B LT 21, El Agustino, Lima, Perú', title: 'Pizza Raul El Agustino' },
      { address: 'Avenida Elmer Faucett 409, San Miguel, Lima, Perú', title: 'Pizza Raul San Miguel' }
      // Puedes agregar más direcciones según sea necesario
    ];
  
    // Crea un infowindow para mostrar la dirección al hacer clic en el marcador
    var infowindow = new google.maps.InfoWindow();
  
    // Crea marcadores para cada dirección en la lista
    addresses.forEach(function(address) {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': address.address }, function(results, status) {
        if (status === 'OK') {
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            title: address.title
          });
        // Agrega un evento de clic al marcador para mostrar la dirección en el infowindow
        marker.addListener('click', function() {
          infowindow.setContent('<div><strong>' + address.title + '</strong><br>' + address.address + '</div>');
          infowindow.open(map, marker);
        });
        } else {
          console.error('Geocoding failed: ' + status);
        }
      });
    });
  }
  
  initMap();