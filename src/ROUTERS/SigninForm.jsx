import React from 'react'
import './signin.css'
import {  Link } from 'react-router-dom';
import Lottie from "lottie-react";

import animationData from "../assets/Animation - 1731566194584.json";

import Form from './Form';

const SigninForm = () => {

  return (
    <div className='signin-form-outer'>
        <div className="signin-form-left">
        <Lottie
              animationData={animationData}
              height={300}
            width={400}
              className="lottie-class-signin"
            />
        </div>
        <div className="signin-form-right">
        <h1 id='sign-in-title'>Sign in</h1>
           <form action="">
            <input type="text" placeholder='username'id="input" /> <br />
            <input type="password" placeholder="password"  id="input"></input>
            <p><input type="checkbox"   id="input-check"></input>Remember me</p>
            <button id='login-btn_' className="btn-hover color-3">Login</button>
            <br /> <br /> 
           <p>Don't have an account?<Link to="/register" id='page-link-to-login' >Create</Link></p>
           </form>
        </div>
    </div>
  )
}

export default SigninForm
