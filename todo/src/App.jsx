import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
