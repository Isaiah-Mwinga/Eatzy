import Home from './components/Home'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Signup from './components/Signup'

function App() {

  return (
    <div className=' flex py-2 overflow-hidden'>
      <Sidebar />
      <main className='flex-grow p-4'>
      <Home />
      <Login />
      <Signup />
      </main>
    </div>
  )
}

export default App
