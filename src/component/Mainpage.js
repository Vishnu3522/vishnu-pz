import React from 'react'
import './Mainpage.css';
import icm from "../Assets/icm.png";

function Mainpage() {
  return (
    <div className="container">

<div className='text-col'>
   
  <h1 className='heading'><b>All-in-One HR & Payroll Software for India</b></h1><br></br>
  <p> Manage payroll & compliance in minutes and delight your employees with self-service app.</p>
  <br></br>
  <br></br>
  <button className="btn3">Start your free trial</button>
   </div>
   
   <div className='img-col'>
    <img  className='icon' src={icm} alt='img'></img>
   
   </div>
   </div>

  )
}

export default Mainpage