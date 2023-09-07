import React from 'react'


const Sidebar = () => {
    return (
      <div className="bg-gray-200 h-screen w-1/4 p-4 hidden sm:block">
        <ul>
          <li className="mb-4">
            <a href="#" className="text-blue-500 hover:underline">Dashboard</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-blue-500 hover:underline">Products</a>
          </li>
          {/* Add more sidebar items */}
        </ul>
      </div>
    );
  };
  
  export default Sidebar;