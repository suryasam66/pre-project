import React from 'react'
import Left from '../component/Left'
import SigninForm from './SigninForm'
import './signin.css'

const Signin = () => {
  return (
    <div className='main-signin-component'>
      <Left/>
      <div className="inner-signin-component">

      <SigninForm />
      </div>
    </div>
  )
}

export default Signin
