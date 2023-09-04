import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform the search based on 'searchQuery'
    // You can define your search logic or make an API request here
    // For this example, we'll just log the search query to the console
    console.log('Search query:', searchQuery);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="mb-4">
      <div className="flex items-center justify-center border border-gray-400 rounded-full">
        <input
          type="text"
          placeholder="Search for restaurants or dishes"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full py-2 px-4 rounded-full focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className=" text-black p-2 rounded-full hover:bg-white focus:outline-none"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;