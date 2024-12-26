import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {

    const navigate = useNavigate()

    const LogIn = () => { 

        navigate("/dashboard")
     }


  return (
    <div>

    <h1>Login</h1>

    <button type='button' onClick={LogIn} > Login </button>


    </div>
  )
}

export default LogIn