import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import About from '../components/About'
function AboutPage() {
  return (
    <div className='page'>
        <NavBar/>
        <About/>
        <Footer/>
    </div>
  )
}

export default AboutPage