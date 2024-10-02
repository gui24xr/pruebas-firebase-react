import React from 'react'
import './styles/forms.css'
import { AuthService } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const RegisterForm = () => {

  const handleSubmit = (event) =>{
    event.preventDefault()
    const formData = new FormData(event.target)
    const {username,password} = Object.fromEntries(formData.entries())
    console.log(username,password)
    createUserWithEmailAndPassword(AuthService,username,password)
    .then( res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <form className='myform' onSubmit={handleSubmit}>
        <span>REGISTRAR USUARIO</span>
        <label>Usuario</label>
        <input type='email' name='username' required/>
        <label>Contraseña</label>
        <input type='text' name='password' required/>
        <button type='submit'>Aceptar</button>
      </form>
    </div>
  )
}

export default RegisterForm