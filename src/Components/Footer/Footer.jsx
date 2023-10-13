import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="footer">
    <div className="footer-container">
      <div className="left">
        <h3>United States</h3>
        <h4>Advanced Tax Solutions LLC</h4>
        <p>1603 Capitol Avenue, Ste. 310 A254 
         Cheyenne, WY 82001</p>
         <h4>Product Support</h4>
         <p>307.414.1211</p>
         <Link className='footer-links'>MyTAXPrepOffice.com</Link>
      </div>
      <div className="middle">
        <h3>India</h3>
        <h4>Inventyv Software Services Pvt. Ltd.</h4>
        <p>2nd Floor, Office 211 - Binori B Square -3, Sindhu Bhavan Road, Nr. Trade Bulls, Bodakdev, Ahmedabad - 380054, Gujarat – INDIA</p>
      </div>
      <div className="right">
        <h3>Inquiries</h3>
        <h4>For Careers, please call us at:</h4>
        <p>+91 - 9979982311</p>
        <h4>Email :</h4>
        <Link className="footer-links" to="#">info@inventyv.com</Link>
      </div>
    </div>
    <p>© 2023 by Inventyv Software Services Pvt. Ltd.</p>
    <p>All logos and trademarks are the property of their respective owners.</p>
     </div>
    </>
  )
}

export default Footer