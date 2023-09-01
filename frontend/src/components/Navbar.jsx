import React from 'react';

const Navbar = () => {
  return (
    <nav className="h-12 text-black p-4 flex items-center justify-between  uppercase md:h-24 lg:px-20 xl:px-40">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-xl font-semibold">Eatzy</div>
        <ul className="flex space-x-4 justify-center text-center">
          <li>
            <a href="/" className="text-white hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="/categories" className="text-white hover:text-gray-400">Categories</a>
          </li>
          <li>
            <a href="/cart" className="text-white hover:text-gray-400">Cart</a>
          </li>
          <li>
            <a href="/profile" className="text-white hover:text-gray-400">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;