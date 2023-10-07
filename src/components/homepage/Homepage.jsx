import React from 'react'

import HomeHeader from './homepageheader/HomeHeader'
import Loginsection from './Loginsection';
import SolutionSection from './SolutionSection';
import SolVideosection from './SolVideosection';
import Footer from '../footer/Footer';

const Homepage = () => {
  return (
    <>
      <div className="homecontainer">
        <HomeHeader />
        <Loginsection />
        <SolutionSection />
        <SolVideosection/>
        <Footer/>
      </div>
    </>
  )
}

export default Homepage

