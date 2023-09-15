import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('leaflet-map').setView([51.505, -0.09], 13); // Set initial coordinates and zoom level

    // Add a base tile layer (you can replace this URL with your preferred tile layer)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker to the map
    L.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup('A marker on the map.')
      .openPopup();
  }, []);

  return (
    <div>
      <h2>Leaflet Map Example</h2>
      <div id="leaflet-map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default Map;