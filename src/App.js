import React from 'react'
import Navbar from './Components/navbar/Navbar.jsx'
import Carousel from './Components/introduction/Carousel.jsx'
import WhyusPage from './Components/introduction/WhyusPage'
import Products from './Components/mainsection/Products.jsx'
import Feature from './Components/Lastpart/Feature.jsx'
import Footer from './Components/footer/Footer.jsx'
const App = () => {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <WhyusPage/>
    <Products/>
    <Feature/>
    <Footer/>

    </>
  )
}

export default App