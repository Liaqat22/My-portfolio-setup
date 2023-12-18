import React from 'react'
import { NavLink , Link } from 'react-router-dom'
function Header() {
  
  return (
    <div>
          <div >
  <nav className="navbar navbar-expand-lg bg-body-tertiary  p-0">
  <div className="container-fluid containerfluidnav" >
    <Link className="navbar-brand" to="#"><b >
Portfolio Setup </b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
      
      <li className="nav-item">
          <NavLink className="nav-link  m-2 " aria-current="page" to="https://liaqatali-portfoliowebsite-reactapp.netlify.app/" >Portfolio </NavLink>
        </li>
      <li className="nav-item">
          <NavLink className="nav-link  m-2 " aria-current="page" to="/" >Projects </NavLink>
        </li>
      <li className="nav-item">
          <NavLink className="nav-link  m-2 " aria-current="page" to="/allservices" >Services</NavLink>
        </li>
      <li className="nav-item">
          <NavLink className="nav-link  m-2 " aria-current="page" to="/addproject" >Add Projects </NavLink>
        </li>
      
          <li className="nav-item">
          <NavLink className="nav-link  m-2 " aria-current="page" to="/addservices" >Add Services </NavLink>
        </li>
          <li className="nav-item">
          <NavLink className="nav-link  m-2 " aria-current="page" to="/addcetificates" >Add Cetificates </NavLink>
        </li>
        <li className="nav-item" >
          <NavLink className="nav-link  m-2 " to="/clientresponse"  >Clients Response</NavLink>
        </li>
      
     
        
       
       
      
      </ul>
     
    </div>
  </div>
</nav>


    </div>
    </div>
  )
}

export default Header
