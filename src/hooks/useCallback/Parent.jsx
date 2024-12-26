import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {

    const [count, setCount] = useState(0)

    const newFN =  useCallback( ()=>{ }, [] )
    

  return (
    <div>
        <h1>Parent</h1>

        <h2>Count : {count}</h2>

        <button onClick={() => setCount(c => c + 1)  } >Increase Count </button>

        <Child newFN = {newFN} />
    
    </div>
  )
}

export default Parent