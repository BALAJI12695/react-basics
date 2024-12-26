import React, { useMemo, useState } from 'react'

const UseMemo = () => {

  // useMemo Memorizes only value.

  // const [count, setCount] = useState(0)


  // const multipleValue = useMemo(() =>  { 

  //      return count * 2

  // } , [count])  

  // const handleChange = () => { 

  //   setCount(c =>  c + 1 )

  //  }

  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)


  const handleCount = () => {
    setCount(count + 1)
  }

  const handleValue = () => {
    setValue(value + 1)
  }

  const isEven = useMemo(() => {

    let i = 0

    while (i < 2000000000) i++

    return count % 2 == 0
  }, [count])





  return (
    <div>

      {/* <h1>UseMemo</h1>

        <h2>Count : {count} </h2>
        <button onClick={ handleChange }>Click</button>
        <h2>Multiples : { multipleValue } </h2> */}

      <h2>Count Increament {count} {isEven ? "Even" : "Odd"} </h2>

      <button type="button" onClick={handleCount} > Value Increment { } </button>

      <h2>Value Increament {value} </h2>

      <button type="button" onClick={handleValue} > Value Increment { } </button>

    </div>
  )
}

export default UseMemo