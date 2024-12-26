import React from 'react'
import { useState } from 'react'
const UseStateObject = () => {

    const [car, setCar] = useState(
        {
            company: "Honda",
            color: "red",
            model: "Verna",
            year: "1995"
        }
    )

    const carData = () => { setCar( (prev) => { return {...prev,color:"Blue" }  } ) }

    console.log("currentstate",car);
    

    return (
        <div>


            <p>Name: {car.company}  </p>
            <p>Color: {car.color}  </p>
            <p>Model: {car.model}  </p>
            <p>Year: {car.year}  </p>

            <button onClick={carData} > Change </button>

        </div>
    )
}

export default UseStateObject;