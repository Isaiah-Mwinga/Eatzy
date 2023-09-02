import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-xl font-semibold">Eatzy</div>
        <div className="space-x-4">
        </div>
      </div>
    </nav>
  );
};

export default Navbar;