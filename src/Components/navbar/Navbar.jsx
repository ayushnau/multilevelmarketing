import React, { useState } from 'react'
import './navbar.css'
import logo from '../static/logo.png'

const Navbar = () => {
  const [style, setstyle] = useState({ display: "initial" })
  const [style2, setstyle2] = useState({ display: "none" })

  const handleChange = (e) => {
    if (style.display === "initial") {
      setstyle({ display: "none" })
      setstyle2({ display: "none" })

    }

    else {
      setstyle({ display: "initial" })
      setstyle2({ display: "initial" })
    }
  }
  return (
    <div className="header">
      <div className="headerTop">
        <div className="headerTopfirst">

        </div>
        <div className="headerTopsecond">
          <div className="imagecontainer"><img src={logo} alt="logo" /></div>
        </div>
        <div className="headerTopThird">
          <div className="social upper">
            <span><i class="fab fa-instagram"></i></span>
            <span><i class="fab fa-linkedin-in"></i></span>
            <span><i class="fab fa-twitter"></i></span>
            <span><i class="fab fa-facebook-square"></i></span>
            <span><i class="fab fa-pinterest"></i></span>
          </div>
        </div>
      </div>
      <div className="Navbar" style={style}>
        <div className="NavbarContainer">
          <ul className="navbarlist">
            <li className="navbarlistitem">Home</li>
            <li className="navbarlistitem">Who we are</li>
            <li className="navbarlistitem">Products</li>
            <li className="navbarlistitem">Education</li>
            <li className="navbarlistitem">Testimonial</li>
            <li className="navbarlistitem">Legals</li>
            <li className="navbarlistitem">Company</li>
            <li className="navbarlistitem">Contact Us</li>
          </ul>
          <div className="signinbutton"><button className="signin">Sign In</button></div>
        </div>
      </div>
      <div className="hamburger" onClick={handleChange}>
        <i className="fas fa-bars fa-lg"></i>
      </div>
      <div className="responsiveToggle">
        <div className="social down" style={style2}>
          <span><i class="fab fa-instagram"></i></span>
          <span><i class="fab fa-linkedin-in"></i></span>
          <span><i class="fab fa-twitter"></i></span>
          <span><i class="fab fa-facebook-square"></i></span>
          <span><i class="fab fa-pinterest"></i></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar