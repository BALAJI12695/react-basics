import React, { useCallback } from 'react'
import { useState } from 'react'

const UseCallback = () => {

    const [count, setCount] = useState(0)

    const countIncrement = useCallback( () => {
        
        console.log("Increment Function Called");

        setCount(c => c + 1)

    },[])

    console.log("Component Rendered");
    

  return (
    <div><h1>UseCallback</h1>
    
    <h1>Count :  {count}  </h1>
    <button onClick={countIncrement} > Increment </button>
    
    </div>
  )
}

export default UseCallback