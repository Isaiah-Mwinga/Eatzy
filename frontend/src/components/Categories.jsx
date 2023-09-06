
import React from 'react';
import { categories } from '../Data';

const Categories = () => {

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


// import { SetStateAction, useEffect, useState } from "react";
// import { IoRadioButtonOffSharp, IoRadioButtonOnOutline } from "react-icons/io5";
export const Slider = () => {
  // const images = [
  //   {
  //     url: "src/assets/Images/slider-1.jpg",
  //   },
  // ];

  // const [currentImage, setCurrentImage] = useState(0);

  // const changeImage = (slideImage: SetStateAction<number>) => {
  //   setCurrentImage(slideImage);
  // };
  // const [activeSlide, setActiveSlide] = useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveSlide(activeSlide === images.length ? 1 : activeSlide + 1);
  //   }, 12000);

  //   return () => clearInterval(interval);
  // }, [activeSlide]);

  return <div className="relative max-w-[1440px] h-[450px] m-auto"></div>;
};