import React, { useState } from 'react'

const State = () => {
  
    const [color, setColor] = useState("Blue")

    const changeColor = () => { setColor("Green") }

    const [count, setCount] = useState(0)

    const increament = () => { setCount(count +1) }


  return (
    <div>


    <h1> My Favourite Color is {color}  </h1>

    <button onClick={changeColor} > Change Color </button>

    {/* <button onClick={()=>{setColor("Green")}} > Click </button> */}

    <h1> Increase by one {count}  </h1>

    <button onClick={increament} > Increase Count </button>

    {/* <button onClick={ () => { setCount( count +1)} } > Increase Count </button> */}


    </div>
  )
}

export default State;