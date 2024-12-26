import React, { Component } from 'react'

export class Class extends Component {

  constructor() {
    super();
    this.state = {color:"Blue", car:"Ferari"}
  }

  render() {
    const {studentInfo} = this.props;

    return (
      <div>
        <h1>Class</h1>
        
        <p>My Favourite Car is {this.state.color} {this.state.car}. </p>

        <p>Student Name: {studentInfo.name}</p>
        <p>Student Age: {studentInfo.age}</p>
        <p>Student Degree: {studentInfo.degree}</p>
        <p>Student Year: {studentInfo.year}</p>

        <button onClick={() => this.setState((previousState) => {return{...previousState,car:"Lambo" } })} >Class Color</button>

      </div>
    )
  }
}

export default Class