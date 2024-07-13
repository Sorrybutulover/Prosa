import React from 'react'
import Main from '../components/Main'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
function MainPage() {
  return (
    <div className='page'>
        <NavBar/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default MainPage