import React from 'react'
import { Link } from 'react-router-dom'
import './Router.css'
import Left from '../component/Left'
import Right from '../component/Right'

const Home = () => {
  return (
    <div className='outer-div'>
      
      {/*<Link to="/nav">Nav</Link> */}
       <div className="inner-left-div">
          <Left/>
       </div>
       <div className="inner-right-div">
           <Right className="inner-right-div-content"/>
       </div>
      
    </div>
  )
}

export default Home
