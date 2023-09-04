import React from 'react';
import { Icon } from '@iconify/react';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className=" py-8 h-12 bg-purple-50 text-black p-4 flex items-center justify-between  uppercase md:h-24 lg:px-20 xl:px-40">
      <div className="flex w-full items-center">
        <div className='flex justify-start items-center'>
        <SearchBar />
        </div>
        <div className=" relative flex ml-auto gap-4 ">
          <Icon icon="ooui:message" className='text-xl'/>
          <Icon icon="gg:profile" className='text-xl'/>
          <Icon icon="mdi:cart-outline" className="text-xl" />
          <p className="bg-orange-300 absolute -top-0 -right-0 text-[12px] rounded-full text-white h-4 w-4 grid place-items-center">3</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;