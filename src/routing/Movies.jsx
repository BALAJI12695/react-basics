import React from 'react'
import { useParams } from 'react-router-dom';

const Movies = () => {

    const {str} =  useParams()

  return (
    <div>
        
        <h1> {str} Movies </h1>
        
    </div>
  )
}

export default Movies;