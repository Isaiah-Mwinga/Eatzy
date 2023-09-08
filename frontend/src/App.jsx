import React, {useState} from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Signup from './components/Signup'
import Menu from './components/Menu'

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className=' flex py-2 overflow-hidden'>
      {/* Menu icon */}
      <Menu
        onMouseEnter={openSidebar} // Show sidebar on hover enter
        onMouseLeave={closeSidebar} // Hide sidebar on hover leave
      />

      {/* Sidebar */}
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} />}

      <main className='flex-grow p-4'>
      <Home />
      <Login />
      <Signup />
      </main>
    </div>
  )
}

export default App
