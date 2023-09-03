import React from 'react';
import { Icon } from '@iconify/react';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav className="bg-purple-50 py-4 px-8">
      <SearchBar />
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-semibold ml-2'>Eatzy</h1>
        </div>
        <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-2 rounded-md w-full">
        <Icon icon="ph:phone" />
          <span>+254 745 10 1544</span>
        </div>
        <div className="relative">
        <Icon icon="bxs:cart" className="text-3xl"/>
        <p className="bg-orange-300 absolute -top-0 -right-0 text-[12px] rounded-full text-white h-4 w-4 grid place-items-center">3</p>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;