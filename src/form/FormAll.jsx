import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const FormAll = () => {


    const [inputs, setInputs] = useState({mobile:"+91",email:"@gmail.com",address:"Enter Your Address"});

    const handleSubmit = (e) => { 

        e.preventDefault();
        console.log(inputs);
        console.log("Form has been submitted");
  
     }

     const handleChange = (e) => { 

        // const {name,value} = e.target.name;
        const name = e.target.name;
        const value = e.target.value;
        e.preventDefault();
        setInputs((prev) => { return {...prev,[name] : value } })

      }

    return (
        <div>

            <h1>Form All</h1>

            <form onSubmit={handleSubmit}>

             <label>Name: <input type="text" name='name'onChange={handleChange} /> </label> <br /> <br />
             <label>Age: <input type="text" name='age' onChange={handleChange} /> </label> <br /> <br />
             <label>Email: <input type="text" name='email' value={inputs.email} onChange={handleChange} /> </label> <br /> <br />
             <label>Password: <input type="text" name='password' onChange={handleChange} /> </label> <br /> <br />
             <label>Mobile: <input type="text" name='mobile' value={inputs.mobile}  onChange={handleChange}  /> </label> <br /> <br />
             <label>Address: <textarea type="text" name='address' value={inputs.address} onChange={handleChange}  /> </label> <br /> <br />
             <label>Country: 
                <select type="text" name='country'  onChange={handleChange}> 
                    <option value="">Select</option>
                    <option value="India">India</option>
                    <option value="U.S.A">U.S.A</option>
                    <option value="German">German</option>
                </select>  </label> <br /> <br />
                <input type="submit" value="submit form" />

            </form>

             

        </div>
    )
}

export default FormAll;