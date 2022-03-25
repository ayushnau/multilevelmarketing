import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className="footermaster">

        <div className="footerContactus">
        <div className="footerheader">Contact Us</div>
          <ul className="footerlistmaster">
            <li className="footerlist">Address: Evoke Sales and Services Pvt. Ltd.
              C-1/104, Vaibhav Palace (4th Floor), ITBP Road, Indira Nagar, Vasant Vihar
              Dehradun , Uttarakhand -248001</li>
            <li className="footerlist">Email: info@ourevoke.com</li>
            <li className="footerlist">Phone: 7006852763</li>
            <li className="footerlist">
              <div className="social footersocial">
                <span><i className="fab fa-instagram"></i></span>
                <span><i className="fab fa-linkedin-in"></i></span>
                <span><i className="fab fa-twitter"></i></span>
                <span><i className="fab fa-facebook-square"></i></span>
                <span><i className="fab fa-pinterest"></i></span>
              </div>
          </li>
        </ul>
      </div>


      <div className="footerquicklinks">
        <div className="footerheader">Quick Links</div>
        <ul className="footerlistmaster">
          <li className="footerlist"> About Us</li>
          <li className="footerlist">FAQs</li>
          <li className="footerlist">Contact Us</li>
          <li className="footerlist">Customer Interaction Form</li>
        </ul>
      </div>


      <div className="footerimportantlinks">
        <div className="footerheader">Important Link</div>
        <ul className="footerlistmaster">
          <li className="footerlist">Terms & Condition</li>
          <li className="footerlist">Legals</li>
          <li className="footerlist">Banking</li>
          <li className="footerlist">Quick Payment</li>
        </ul>
      </div>

    </div>
    <hr />
    <div className="footerbottom">
    Copyright 2022 All rights reserved by Evoke Sales and Services Pvt. Ltd.
    </div>
    </>
  )
}

export default Footer