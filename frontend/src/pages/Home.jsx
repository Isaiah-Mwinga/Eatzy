import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'; // Import your Navbar component
import RestaurantCard from '../components/RestaurantCard'; // You can create a component for displaying restaurant cards
import Footer from '../components/Footer'; // Import your Footer component
import Categories from '../components/Categories';
import Sidebar from '../components/Sidebar';

const Home = () => {
  

  return (
    <div className='w-screen relative'>
      <div className="fixed top-0 left-0 bg-red-500 z-30">
      <Sidebar />
      </div>
      <div className="relative">
      <Navbar />
      <Categories />
      <RestaurantCard />
      <Footer />
      </div>
    </div>
  );
};

export default Home;