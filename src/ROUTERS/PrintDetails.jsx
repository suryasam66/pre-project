import React from 'react'

const PrintDetails = ({name , age}) => {
    console.log(name)
   
  return (
    <div>
      <h2>Age: {age}</h2>
      <h2>Name: {name}</h2>

      
    </div>
  )
}

export default PrintDetails
