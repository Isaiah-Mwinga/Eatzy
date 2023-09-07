import React from 'react'


const Sidebar = ({ isOpen }) => {
  // Use the `isOpen` prop to conditionally apply CSS classes or styles
  const sidebarClass = isOpen ? 'w-1/4' : 'w-0';
    return (
      <div className={`bg-white h-screen ${sidebarClass} p-4 transition-all duration-300`}>
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