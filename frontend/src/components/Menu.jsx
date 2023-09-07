import React from 'react';

const Menu = ({ onClick }) => {
  return (
    <div
      className="cursor-pointer p-2"
      onClick={onClick}
    >
      {/* Insert your menu icon here */}
      ☰
    </div>
  );
};

export default Menu;