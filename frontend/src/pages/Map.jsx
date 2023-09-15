import React, { useState, useEffect } from 'react';

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Check if geolocation is available in the browser
    if ('geolocation' in navigator) {
      // Ask for the user's location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          // Once you have the user's location, you can fetch and display restaurants based on these coordinates
          fetchRestaurantsNearby(latitude, longitude);
        },
        (error) => {
          console.error('Error getting user location:', error);
          // Handle errors here, e.g., show an error message to the user
        }
      );
    } else {
      console.error('Geolocation is not available in this browser');
      // Handle cases where geolocation is not available
    }
  }, []);

  const fetchRestaurantsNearby = (latitude, longitude) => {
    // Implement the logic to fetch restaurants based on the user's coordinates
    // You can make an API request to a backend service or use a local data source
    // Update the 'restaurants' state with the fetched data
    const fetchedRestaurants = []; // Replace with actual data fetching
    setRestaurants(fetchedRestaurants);
  };

  return (
    <div>
      <h2>Restaurants Near You</h2>
      {userLocation ? (
        <p>Your current location: Latitude {userLocation.latitude}, Longitude {userLocation.longitude}</p>
      ) : (
        <p>Getting your location...</p>
      )}

      <ul>
        {restaurants.map((restaurant, index) => (
          <li key={index}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Map;