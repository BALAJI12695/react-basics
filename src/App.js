
import './App.css';
import Class from './components/Class';
import Form from './form/Form';
import Functional from './components/Functional';
import List from './List';
import State from './hooks/State';
import UseEffect from './hooks/UseEffect';
import UseStateObject from './hooks/UseStateObject';
import FormAll from './form/FormAll';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './routing/Home';
import ContactUs from './routing/ContactUs';
import About from './routing/About';
import User from './routing/User';
import Movies from './routing/Movies';
import Crime from './routing/Crime';
import Horror from './routing/Horror';
import LogIn from './routing/LogIn';
import Dashboard from './routing/Dashboard';
import { createContext } from 'react';
import Component1 from './hooks/useContext/Component1';
import Component2 from './hooks/useContext/Component2';
import Component3 from './hooks/useContext/Component3';
import Component4 from './hooks/useContext/Component4';
import Component5 from './hooks/useContext/Component5';
import UseMemo from './hooks/UseMemo';
import RenderComp from './hooks/RenderComp';
import UseCallback from './hooks/UseCallback';
import Parent from './hooks/useCallback/Parent';
import UseReducer from './hooks/UseReducer';
import ApiReq from './ApiReq';
import Sample from './Sample';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const myContext = createContext();

function App() {

  const age = "24"

  const bio = { myname: "Steve", myage: "26", myrole: "Web Developer", mycompany: "Apple", ismarried: true }

  const product = { Pname: "Air Pods", Pprice: "25.00" }

  const studentInfo = {

    name: "Balaji",
    age: "24",
    degree: "M.A",
    year: "2nd"

  }

  const user = "Hi I am useContext"

  return (

    <div className="App">

       { <Functional age={age} company="Microsoft" bio={bio} product={product} />

     /*  <Class studentInfo={studentInfo} />

      <Form />
      
      <FormAll /> 

      <State />

      <UseEffect />

      <UseStateObject />


      <List />

      <Router>
        <ul>
          <li> <Link to='/' > Home </Link> </li>
          <li>  <Link to='/about' > About </Link>  </li>
          <li>  <Link to='/contact' > Contact </Link> </li>
          <li>  <Link to='/user/2' > User 2 </Link> </li>
          <li>  <Link to='/user/4' > User 4 </Link> </li>
          <li>  <Link to='/movies-genre/crime' > Crime </Link> </li>
          <li>  <Link to='/movies-genre/horror' > Horror  </Link> </li>
          <li>  <Link to='/movies/Horror' > Horror Movies  </Link> </li>
          <li>  <Link to='/movies/Crime' > Crime Movies  </Link> </li>
          <li>  <Link to='/login' > Login </Link> </li>
        </ul>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<About />} />
          <Route path='/user/:id' element={<User />} />
          <Route path='/movies/:str' element={<Movies />} />

          <Route path='/movies-genre' >
            <Route path='crime' element={<Crime />} />
            <Route path='horror' element={<Horror />} />
          </Route>

          <Route path='/login' element={<LogIn />} />
          <Route path='/dashboard' element={<Dashboard />} />

        </Routes>
      </Router>

        <myContext.Provider value={user} >

        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />

        </myContext.Provider>

        
      <UseMemo /> 

      <UseCallback /> 

      <RenderComp /> 

      <Parent /> 

      <UseReducer /> 

      <ApiReq /> */}

      {/* <Sample /> */}


    </div>
  );
}

export default App;
