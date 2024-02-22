import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css'
import { Outlet } from 'react-router'
import { api } from './utilities'

function App() {
  const [user, setUser] = useState(undefined)
  const whoAmI =async()=>{
    let token = localStorage.getItem('token')
    if (token){
      api.defaults.headers.common['Authorization'] = `Token ${token}`
      let response = await api.get('user/info/')
      setUser(response.data.username)
    }
  }
  useEffect(()=>{
    whoAmI()
  }, [])
  return (
    <>
      <Navbar user={user}/>
      <Outlet context={[user, setUser]}/>
    </>
  )
}

export default App
