import React, {useState} from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Signup from './components/Signup'
import Menu from './components/Menu'

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=' flex py-2 overflow-hidden'>
      {/* Menu icon */}
      <Menu onClick={toggleSidebar} />

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
