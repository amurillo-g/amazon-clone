import React, { useState } from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'
import { auth }  from "./firebase.js"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth" 


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const signIn = async e => {
    e.preventDefault()
    try{
      const user = await signInWithEmailAndPassword(auth, email, password)
        console.log(user)
        if (auth) { 
          navigate("/")
          }
      } catch (error) {
        console.log(error.message)
      }
  }

  const register = async e => {
    e.preventDefault()
    try{
    const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user)
      if (auth) { 
        navigate("/")
        }
    } catch (error) {
      console.log(error.message)
    }
  }




  return (
    <div className='login'>
        <Link to='/' >
                <span className='login__logo'>FashionBox</span>
        </Link>

        <div className="login__container">
            <h1>Iniciar Sesion</h1>

            <form action="">
                <h5>E-Mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Contraseña</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='summit' onClick={signIn} className='login__signInButton'>Iniciar Sesion</button>
            </form>

            <p>Al iniciar sesión con mi login social, acepto vincular mi cuenta conforme a la Política de Privacidad</p>
            <button onClick={register} className='login__registerButton'>Crear Tu Cuenta FashionBox</button>
        </div>
    </div>
  )
}

export default Login