import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdLogIn } from "react-icons/io";
import { PiVideoDuotone } from "react-icons/pi";
import { MdOutlineLibraryMusic ,  MdOutlineSettingsSuggest ,  MdOutlineHome  } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import './component.css'
import './left.css'

const Left = () => {
  return (
    <div className='left'>
        <br /> <br />
        <Link to="/" id='logo'>LOGO.</Link> 
        <br />

        <div className="bottom-left">
        <span id='nav-component'>
        <MdOutlineHome id='icon'/>&nbsp;&nbsp;<Link to="/" id='page-link'>Home</Link>  
        </span>
        
        <br />
        <span id='nav-component'>
        <IoMdLogIn id='icon'/> &nbsp;&nbsp;<Link to='/register' id='page-link'>Register</Link>
        </span>
       
        <br />
        <span id='nav-component'>
        <PiVideoDuotone id='icon'/> &nbsp;&nbsp; <Link to='/video' id='page-link'>Videos</Link>
        </span>

        <br />
        <span id='nav-component'>
        <MdOutlineLibraryMusic id='icon'/> &nbsp;&nbsp; <Link to='/music' id='page-link'>Music</Link> 
        </span>

        <br />
        <span id='nav-component'>
        <MdOutlineSettingsSuggest id='icon'/> &nbsp;&nbsp; <Link to='/dashboard' id='page-link'>DashBoard</Link> 
        </span>
        
      </div>

      <div className="contacts">
          <span>
        <GrInstagram  id='contact-icon'/> 
        </span>

        <span>
        <RiTwitterXFill  id='contact-icon'/> 
        </span>

        <span>
        <FaFacebook id='contact-icon'/> 
        </span>

        
          </div>
     
    </div>
  )
}

export default Left
