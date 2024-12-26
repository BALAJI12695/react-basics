import React, { useContext } from 'react'
import { myContext } from '../../App'

const Component2 = () => {

  const admin = useContext(myContext)

  return (
    <div>

      <h1>Component 2</h1>

      <h4>  {admin}   </h4>

    </div>
  )
}

export default Component2