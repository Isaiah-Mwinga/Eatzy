import React from 'react';

const Menu = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="cursor-pointer p-2"
      onMouseEnter={onMouseEnter} // Trigger on hover enter
      onMouseLeave={onMouseLeave} // Trigger on hover leave
    >
      {/* Insert your menu icon here */}
      ☰
    </div>
  );
};

export default Menu;