import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'; // Import your Navbar component
import SearchBar from './SearchBar'; // Import your SearchBar component
import RestaurantCard from './RestaurantCard'; // You can create a component for displaying restaurant cards
import Footer from './Footer'; // Import your Footer component
import Categories from './Categories';

const Home = () => {
  

  return (
    <div>
      <Navbar />
      <SearchBar />
      <Categories />
      <RestaurantCard />
      <Footer />
    </div>
  );
};

export default Home;