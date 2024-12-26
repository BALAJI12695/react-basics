import React, { useReducer, useState } from 'react'

const UseReducer = () => {

    const intialState = {count: 0}

    
    const reducer = (state,action) => { 
        
        switch(action.type){
            
            case "increase" :{
                return{count : state.count +1}  
            }
            case "decrease" : {
                return {count : state.count -1} 
            }
            case "input" : {
                return {count : action.payload} 
            }
            default : {
                return state 
            }
        }
    }
    
    const[state,dispatch] = useReducer(reducer,intialState)

    return (
        <div> <h1>UseReducer</h1>

        <h2>Count : {state.count}</h2>

        <button onClick={() => dispatch({type:'increase'}) } >Increase</button>
        <button onClick={() => dispatch({type:'decrease'}) } >Decrease</button>
        <br /> <br />

        <label> Input : <input type="text" value={state.count} onClick={(e) => {dispatch({type:"input",payload:Number(e.target.value)}) }} /> </label>
         

        </div>
    )
}

export default UseReducer