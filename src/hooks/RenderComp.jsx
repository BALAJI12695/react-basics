import React, { useState } from 'react'

const RenderComp = () => {

const [count, setCount] = useState(0)

const increment = () => { 

    setCount(c => c + 1 )
 }




  return (
    <div>RenderComp


    <h1>Count : {count}</h1>

    <Child1 increment = {increment} count = {count}  />


    </div>
  )
}


 const Child1 = ({increment,count}) => {
  return (
    <div>
      <h1>child</h1>

          <h2>Count : {count}</h2>
      <button onClick={increment} >Increment</button>
    
    
    
    </div>
  )
}



export default RenderComp