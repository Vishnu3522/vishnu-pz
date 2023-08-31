import React from 'react'
import './Mainbody.css';

function Mainbody() {
  return (
    <div className='widget-container'>
   <h2 className='heading-title'>
   Are you a small business owner with up to 50 employees?
   </h2>
   <p className='p2'>
       <b>Check out our FREE FOREVER payroll app – Finjinn</b>
   </p>
   <div className='m-img'>
   <img  src='finjinn-logo-with-jinn.png' alt='finjin'></img>
   </div>
   <p className='p3'> 
   Finjinn calculates and pays salaries and compliances for small Indian businesses on autopilot.
   </p>
       <button  className='btn4'><b>KNOW MORE</b></button>
   
      
    </div>
    
  )
}

export default Mainbody