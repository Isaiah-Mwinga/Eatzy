import { useState } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Home />
      <Navbar />
      <Footer />
      <Login />
      <Signup />
    </>
  )
}

export default App
