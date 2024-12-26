import React from 'react'

const Functional = (props) => {

    
    const name = "jake"
    const message = `${name} is a Software Developer`
    const {company} = props
    const {age} = props

    const {bio} = props
    const {myname,myage,myrole,mycompany,ismarried} = bio

    const {product} = props 
    const {Pname,Pprice} = product

  return (
    <div>
        <h1>Functional</h1>

        <h2> Structured </h2>

        <p>Hi, {name} !, {message} in {props.company} and He is {props.age}.</p>

        <h2> Destructured </h2>

        <p>Hi, {name} !, {message} in {company} and He is {age}.</p>

        <h2> Structured </h2>

        <h4> Bio - Data </h4>

        <p> Name : {props.bio.myname} </p>
        <p> Age : {props.bio.myage} </p>
        <p> Role : {props.bio.myrole} </p>
        <p> Company : {props.bio.mycompany} </p>
        <p> Marital status : {props.bio.ismarried ? "Yes": "No"} </p>
        
        <h4> Bio - Data </h4>

        <h2> Destructured </h2>

        <p> Name : {bio.myname} </p>
        <p> Age : {bio.myage} </p>
        <p> Role : {bio.myrole} </p>
        <p> Company : {bio.mycompany} </p>
        <p> Marital status : {bio.ismarried ? "Yes": "No"} </p>

        <h2> Empty Object </h2>

        <h2> Product Details </h2>

        {product.Pname !== undefined ? <p>{product.Pname}</p> : "Undefined"} {product.Pprice !== undefined ? <p>{product.Pprice}</p>  : "Undefined"} 

        {product.Pname} {product.Pprice}

      

    </div>
  )
}

export default Functional