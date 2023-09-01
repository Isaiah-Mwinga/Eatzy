import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'; // Import your Navbar component
import SearchBar from './SearchBar'; // Import your SearchBar component
import RestaurantCard from './RestaurantCard'; // You can create a component for displaying restaurant cards
import Footer from './Footer'; // Import your Footer component

const Home = () => {
  const [restaurants, setRestaurants] = useState([]); // State to store restaurant data

  useEffect(() => {
    // Fetch restaurant data from an API or database when the component mounts
    // You can use libraries like Axios or fetch() for API requests
    // Update the 'restaurants' state with the fetched data
    // Example:
    // fetch('https://api.example.com/restaurants')
    //   .then((response) => response.json())
    //   .then((data) => setRestaurants(data))
    //   .catch((error) => console.error('Error fetching data:', error));
    
    // For demonstration purposes, we'll use sample data
    const sampleData = [
      {
        id: 1,
        name: 'Restaurant 1',
        cuisine: 'Italian',
        rating: 4.5,
        image: 'restaurant1.jpg',
      },
      {
        id: 2,
        name: 'Restaurant 2',
        cuisine: 'Mexican',
        rating: 4.2,
        image: 'restaurant2.jpg',
      },
      // Add more restaurant objects as needed
    ];

    setRestaurants(sampleData);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <SearchBar />
        <h1 className="text-3xl font-semibold my-4">Discover Restaurants</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Map through the 'restaurants' array and render restaurant cards */}
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              cuisine={restaurant.cuisine}
              rating={restaurant.rating}
              image={restaurant.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;