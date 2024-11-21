import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MoonLoader } from 'react-spinners';
import PrintDetails from './PrintDetails';
const Dashboard = () => {

    let[state, setState] = useState(null);

    const getData = async() => {
       
        try {

          
          let {data} = await axios.get("http://localhost:5000/users");
            setState(data)

        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
        getData();
      })
    
  return (
    <div align="center">
       <h1>User Details</h1>
       <br />
        {
            state == null ? <MoonLoader color="aqua"/> : (state.map((details)=>{
                return <PrintDetails key={details.id} {...details}></PrintDetails>
            }))
        }
    </div>
  )
}

export default Dashboard
