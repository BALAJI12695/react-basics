import React, { useEffect, useState } from 'react'


const UseEffect = () => {

    const [count,setCount] = useState(0)
    const [increase, setIncrease] = useState(1)

    useEffect(() => { 

        console.log("return");
        setIncrease(increase*2)
        return () =>{ }


    },[count])
    
    

  return (
    <div>
      
    <p> Render Screen By Click {count} </p>
    <p> Increase {increase} </p>

    <button onClick={()=>{setCount(count+1)}} > Click </button>
 

    </div>
  )
}

export default UseEffect;