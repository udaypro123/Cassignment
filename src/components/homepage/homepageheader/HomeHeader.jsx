import React from 'react'
import HomeHeadBodysection from './HomeHeadBodysection'
import Homenavabar from './Homenavabar'

const HomeHeader = () => {
  return (
    <>
      <div className="headercontainer">
        <div className="headerSubconatiner">
          <Homenavabar />
          <HomeHeadBodysection/>
        </div>
      </div>
    </>
  )
}

export default HomeHeader;
