import React from 'react'
import './Footer.css';


function Footer() {
  return (
    <div>
      <>
      <div className='details'>
      <hr></hr>

<section id="website-footer" class="footer">

    <div class="box-container">

        <div class="box">
        <img className='footer-img' src="logo.png" alt="" width="100" height="auto"/>
            <p>
            Paybooks is on a mission to make payroll simple and delightful for businesses with cloud payroll software and payroll outsourcing services. 
            <br></br>
            <br></br>
Since 2012, we have helped 3,000+ businesses across India in automating their payroll, staying compliant with laws, and delighting their employees.
            </p>
        </div>
        <div class="box">
            <h4 className='quick'>Quick Links</h4>
            <span className='link'>
            <a href='/'>Blog</a>
            <a href='/'>Payrol software</a>
            <a href='/'>payrol outsourcing</a>
            <a href='/'>Leave Management system</a>
            <a href='/'>Attendance Management system</a>
            <a href='/'>ICICI Bnak Partnership</a>
            <a href='/'>Oracle Partnership</a>
            <a href='/'>Integration</a>
            <a href='/'>About us</a>
            <a href='/'>Customer Login</a>
            </span>
        </div>
        
        <div id="" class="box">
            <h4 id="below">Contact</h4>
            <p>
            Paybooks Technologies India Private Limited, 2nd Floor, Samrah Plaza, St Marks Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka, India - 560001<br></br><br></br>sales Number: +91 80 4710 7171<br></br>Sales Email: info@paybooks.in
<br></br>Support Number: +91 80 4710 7070<br></br>
Support Email: support@paybooks.in<br></br>
Support Portal: http://support.paybooks.in<br></br>
<br></br>
CIN: U72200KA2012PTC064362
            </p>
        </div>
    </div>
    <hr></hr>
    <span className='copy'>
            <p id='mlit'>© 2022 ALL RIGHTS RESERVED</p>
            <a id='lit' href='/'>PRIVACY POLICY</a>
            <a id='lit' href='/'>TERM AND CONDITION</a>
            </span>
</section>
      </div>
      <div className='icons'>
      {/* <i class="fa-brands fa-twitter-square"></i> */}
      <font-awesome-icon icon="fa-brands fa-twitter-square" />

        </div>
      </>
    </div>
  )
}

export default Footer