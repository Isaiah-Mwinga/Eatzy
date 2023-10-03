import React from 'react'
import { restaurant } from '../Data'

const RestaurantCard = () => {
  return (
    <div className='py-8'>
      <h1 className='text-2xl font-semibold mb-0'>Restaurants For You</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 hover:bg-fuchsia-50">
      {restaurant.map((category, index) => (
        <div key={index} className="p-4 bg-white rounded shadow">
          <img src={category.imageSrc} alt={category.name} className="mb-2 w-full h-32 object-cover rounded" />
          <h3 className="text-lg font-semibold">{category.name}</h3>
          <p>Rating: {restaurant.rating}</p>
          <p className="text-gray-500">{category.description}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default RestaurantCard