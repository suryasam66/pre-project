import React, { useState } from "react";
import './login.css'
import { BsPersonCircle } from "react-icons/bs";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signin from "./Signin";
import axios from "axios";

export default function Form(){
    const [state, setState] = useState({
        name: "",
        subject: "",
        age: "",
        gender: "",
        checkbox: {
          bengali: false,
          hindi: false,
          english: false,
        },
      });
    
      const { name, subject, age, gender, checkbox } = state;
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
      };
    
    /*  const handleSubmit = (e) => {
        e.preventDefault();
        try {
          console.log({ ...state });
        } catch (err) {
          console.log(err);
        }
      }; */  // to print in console

      const handleSubmit = async() => {
       
        try {

          let  payload =  {name, subject ,age , gender , checkbox}
          let {data} = await axios.post("http://localhost:5000/users",payload);
         console.log(data)

        } catch (err) {
          console.log(err);
        }
      };
    
      const handleLang = (e) => {
        const { value, checked } = e.target;
    
        setState((prevState) => ({
          ...prevState,
          checkbox: {
            ...prevState.checkbox,
            [value]: checked,
          },
        }));
      };

      /*-------- Using axios to save the data in server
      

      ------- */
    
    return(
        <>
         <form onSubmit={handleSubmit}>
            <h1>Sign up</h1>
            
            <label className="visually-hidden"><BsPersonCircle id='icon-p'/>Age:</label> 
<input
  type="text"
  name="age"
  id="placeholder"
  value={age}
  onChange={handleChange}
  placeholder="Age"
/>
<br />
<br />
<label className="visually-hidden">Name:</label> 
<input
  type="text"
  name="name"
  id="placeholder"
  value={name}
  onChange={handleChange}
  placeholder="Name"
/>


<br />
<br />
<label className="visually-hidden">Password:</label> 
<input
  type="password"
  name="name"
  id="placeholder"
  value={name}
  onChange={handleChange}
  placeholder="Password"
/>

<br />
<br />
<label className="visually-hidden">Subject:</label> 
<input
  type="text"
  name="subject"
  id="placeholder"
  value={subject}
  onChange={handleChange}
  placeholder="Subject"
/>
{/*------------------------ */}
            <br />
            <br />
            <label>Gender: </label>
            Male
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />{" "}
            &nbsp; Female
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />
            <br />
            <br />
            <label>Languages: </label>
            Bengali
            <input
              type="checkbox"
              name="checkbox"
              value="bengali"
              checked={checkbox.bengali}
              onChange={handleLang}
            />{" "}
            &nbsp; Hindi
            <input
              type="checkbox"
              name="checkbox"
              value="hindi"
              checked={checkbox.hindi}
              onChange={handleLang}
            />{" "}
            &nbsp; English
            <input
              type="checkbox"
              name="checkbox"
              value="english"
              checked={checkbox.english}
              onChange={handleLang}
            />{" "}
            &nbsp;
            <br />
            <br />
            <label htmlFor="">Branch: </label>
            <select id="placeholder-b">
              <option name="dropdown" value="EE">
                EE
              </option>
              <option name="dropdown" value="ECE">
                ECE
              </option>
              <option name="dropdown" value="CSE">
                CSE
              </option>
            </select>
            <br />
          
            <div className="lower-button">
            
            <input type="submit" id='signup-submit-buttom_' className="btn-hover color-1" />
            
            </div>
            
          </form>
          <br />
          <Link to="/signin"id='page-link-login' >I am already member</Link>
          
        </>
    )
}