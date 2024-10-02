
import './App.css'
import { DBService,AuthService } from './firebase/config'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

function App() {

  useEffect(()=>{
    const unsuscribe = onAuthStateChanged(AuthService,
      (currentUser)=>{
        if (currentUser) console.log('Usuario actual: ', currentUser)
          else console.log('Nadie logueado en la app')
      })
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<h1>FIREBASE PRACT</h1>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
