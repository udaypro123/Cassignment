import React from 'react'
import { NavLink } from 'react-router-dom'

const Homenavabar = () => {
  return (
    <>
      <div className="navbar">
            <div className="navbarleftsection">
            <img src="./images/Logo-White.png" alt="" />
            </div>
            <div className="navbarrightsection">
               <NavLink to="/home1" activeClassName="active">Home</NavLink>
               <NavLink  activeClassName="active">Subscription</NavLink>
               <NavLink  activeClassName="active"> Feature</NavLink>
               <NavLink  activeClassName="active"> <img src="./images/Register-Icon.png" alt="" />Register</NavLink>
               <NavLink  activeClassName="active"><img src="./images/Login.png" alt="" /> Login</NavLink>
            </div>
      </div>
    </>
  )
}


export default Homenavabar;
