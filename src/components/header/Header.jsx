import React from 'react'
import Navbar from './Navbar'
import HeadBodysection from './HeadBodysection'

const Header = () => {
  return (
    <>
      <div className="headercontainer">
        <div className="headerSubconatiner">
          <Navbar />
          <HeadBodysection/>
        </div>
      </div>
    </>
  )
}

export default Header
