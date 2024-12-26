import React from 'react'
import { Link, useParams } from 'react-router-dom'


const User = () => {

    const {id} = useParams()
  return (
    <div>

        <h1> User <b>{id}</b> </h1>
        
        <Link to={"/"} > Home </Link>

    </div>
  )
}

export default User;