import React from 'react'
import logo from "../Assets/logo.png";

export default function Navbar() {
  return (<>
    <div className="header">
     <a href='/'><button  className="btn1">Login</button></a>
     <a href='#website-footer'><button className="btn2">contact us</button></a>
    </div>
    <div className="nav-right">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
      <img src={logo} alt="" width="100" height="auto"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
       <ul class=" navbar-nav ml-md-auto">
      
        <li className="nav-item">
          <a className="nav-link" href="/">PROUDUCT FEATURES</a>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRICING
          </a>
         
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}
