import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">

        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>


        <div className="navbarleftsection">
          <img src="./images/Logo-White.png" alt="" />
        </div>
        <div className={isOpen ? "navbarrightsectionshow":"navbarrightsection"}>
          <NavLink to="/home" activeClassName="active">Home</NavLink>
          <NavLink to="/contact" activeClassName="active">Subscription</NavLink>
          <NavLink to="/feature" activeClassName="active"> Feature</NavLink>
          <NavLink to="/register" activeClassName="active"> <img src="./images/Register-Icon.png" alt="" />Register</NavLink>
          <NavLink to="/login" activeClassName="active"><img src="./images/Login.png" alt="" /> Login</NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar
