import React, { useState } from 'react'

export default function Even() {
    const [myValue,setMyValue]=useState(0)


    const handleChange =(e)=>{
     setMyValue(e.target.value)
    }
    const hanleClick=()=>{
        myValue%2 === 0 ? console.log('even') : console.log('odd')
        
    }
  return (
    <div>
      <input type='number' value={myValue} onChange={handleChange} ></input>
      <button onClick={hanleClick}>Click me</button>
    </div>
  )
}
