import {React,memo }from 'react'

const Child = () => {

  console.log("Child Rendered");
  
  return (
    <div>

      <h1>Child</h1>
    </div>
  )
}

export default memo(Child)