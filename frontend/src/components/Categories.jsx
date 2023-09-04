
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Categories = () => {
  // Sample data for categories
  const categories = [
    {
      id: 1,
      name: 'Italian',
      image: 'https://hips.hearstapps.com/hmg-prod/images/delish-230307-sopes-328-rv-lead-6418de26e5178.jpg', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Mexican',
      image: 'https://hips.hearstapps.com/hmg-prod/images/delish-230307-sopes-328-rv-lead-6418de26e5178.jpg',
    },
    {
      id: 3,
      name: 'Chinese',
      image: 'https://hips.hearstapps.com/hmg-prod/images/delish-230307-sopes-328-rv-lead-6418de26e5178.jpg',
    },
    {
      id: 4,
      name: 'Italian',
      image: 'https://hips.hearstapps.com/hmg-prod/images/delish-230307-sopes-328-rv-lead-6418de26e5178.jpg',
    },
    {
      id: 5,
      name: 'Mexican',
      image: 'https://hips.hearstapps.com/hmg-prod/images/delish-230307-sopes-328-rv-lead-6418de26e5178.jpg'
    },
    {
      id: 6,
      name: 'Chinese',
      image: 'https://hips.hearstapps.com/hmg-prod/images/delish-230307-sopes-328-rv-lead-6418de26e5178.jpg',
    },
    {
      id: 7,
      name: 'Italian',
      image: 'https://hips.hearstapps.com/hmg-prod/images/delish-230307-sopes-328-rv-lead-6418de26e5178.jpg',
    },
    {
      id: 8,
      name: 'Mexican',
      image: 'https://hips.hearstapps.com/hmg-prod/images/delish-230307-sopes-328-rv-lead-6418de26e5178.jpg',
    },{
      id: 8,
      name: 'Mexican',
      image: 'https://hips.hearstapps.com/hmg-prod/images/delish-230307-sopes-328-rv-lead-6418de26e5178.jpg',
    },{
      id: 8,
      name: 'Mexican',
      image: 'https://hips.hearstapps.com/hmg-prod/images/delish-230307-sopes-328-rv-lead-6418de26e5178.jpg',
    },{
      id: 8,
      name: 'Mexican',
      image: 'https://hips.hearstapps.com/hmg-prod/images/delish-230307-sopes-328-rv-lead-6418de26e5178.jpg',
    },
    // Add more categories as needed
  ];

  return (
    <div className='py-8'>
    <h2 className="text-2xl font-semibold mb-2">Food For You</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 hover:bg-fuchsia-50 w-full ">
      <div className='flex overflow-auto gap-4 w-screen'>
      {categories.map((category, index) => (
        <div key={index} className="p-4 bg-white rounded-lg shadow-md">
        <img
          src={category.image}
          alt={category.name}
          className="max-w-7xl h-48 object-cover rounded-lg"
        />
          <h3 className="text-lg font-semibold">{category.name}</h3>
        </div>
      ))}
      </div>
    </div>
    </div>
  );
}

export default Categories;