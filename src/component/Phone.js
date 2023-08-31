import React from 'react'
import './Phone.css';
import dyew from "../Assets/dyew.jpg"
import pr from "../Assets/pr.jpg"
import len from "../Assets/len.jpg"
import itp from "../Assets/itp.jpg"

function Phone() {
  return (
    <div>
      <h2 className='p-head'> Delight your employees with self-service app</h2>
<div className='phone'>
  <div className='tb1'>
<table class="tb">

    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  
  <tbody>
    <tr>
      <th scope="row"><img  class="img1" src={pr}alt = "abc"></img></th>
      <td><strong>Payslip&amp;Reports</strong>
      <br></br>
      <p>Employees can view pay slips, year to-date salary reports, and Form 16<br></br>right from their mobile.</p></td>
      
     
    </tr>
    <tr>
      <th scope="row"><img className='img1' src={len} alt = "abc"></img></th>
      <td><strong>
LEAVE & EXPENSE MANAGEMENT</strong><br></br>
<p>Employees can view pay slips, year to-date salary reports, and Form 16<br></br>right from their mobile.</p>
</td>
      
    </tr>
    <tr>
      <th scope="row"><img className='img1' src={itp} alt = "abc"></img></th>
      <td><strong>INCOME TAX PLANNER</strong><br></br>
      <p>Employees can view pay slips, year to-date salary reports, and Form 16<br></br>right from their mobile.</p>
      </td>
      
    </tr>
  </tbody>
</table>
</div>
<div className='phone-img'>
  <img src={dyew}alt = "abc"></img>
</div>

      
    </div>
    </div>
  )
}

export default Phone