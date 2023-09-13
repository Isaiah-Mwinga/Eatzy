import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl';

// Define your restaurant data (replace with actual data)
const restaurants = [
  { name: 'Restaurant A', latitude: 37.7749, longitude: -122.4194 },
  { name: 'Restaurant B', latitude: 37.7749, longitude: -122.4294 },
  // Add more restaurants as needed
];

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 12,
  });

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setViewport({
          ...viewport,
          latitude,
          longitude,
        });
      });
    }
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="400px"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(newViewport) => setViewport(newViewport)}
        mapboxApiAccessToken="Ypk.eyJ1IjoibXdpbmdhNyIsImEiOiJjbG1mdWVraWMxdjVwM2NqcmQ0ajZhdHduIn0.adhfTMOEzftFBlBmmlthNg"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />

        {restaurants.map((restaurant, index) => (
          <Marker
            key={index}
            latitude={restaurant.latitude}
            longitude={restaurant.longitude}
          >
            <div className="marker">R</div>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Map;
