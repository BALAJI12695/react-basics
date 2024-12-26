import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")


    const HandleSubmit = (e) => { 

        e.preventDefault();
        
        console.log("Form Submitted");
        
        console.log(name, age, mobile, password);
     }


    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={HandleSubmit} >
            <label>Name : <input value={name} type="text" onChange={(e) => { setName(e.target.value) }} /> </label> <br /> <br />
            <label>Age : <input value={age} type="number" onChange={(e) => setAge(e.target.value)} /> </label> <br /> <br />
            <label>Mobile No : <input value={mobile} type="tel" onChange={(e) => setMobile(e.target.value)} /> </label> <br /> <br />
            <label>Password : <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} /> </label> <br /> <br />
            <input type="submit" value="Submit Form" />
            </form>

        </div>
    )
}

export default Form