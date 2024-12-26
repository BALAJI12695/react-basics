import React, { useContext } from 'react'
import { myContext } from '../../App'

const Component1 = () => {

  const user = useContext(myContext)

  return (
    <div>

      <h1>Component  1</h1>

      <h4>  {user}   </h4>

    </div>
  )
}

export default Component1