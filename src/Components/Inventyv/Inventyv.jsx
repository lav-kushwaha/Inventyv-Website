import React from 'react'
import './Inventyv.css'
import {Link} from 'react-router-dom'
const Inventyv = () => {
  return (
    <>
    <div className="inventyv">
    <span>We're Inventyv</span>
    <p> 
     At Inventyv, we build advanced web and mobile applications using the latest technologies. We're focused on delivering high-quality services that help our clients achieve business goals. Our objective is to solve our clients' business challenges...technology is just a tool.</p>
    </div>
   <div className="container">
   <div className="image-box">
        <div className="taxt-software">
            <div className="taxt">
                <h3 className='headings'>Tax Software Development</h3>
                <p>MyTAXPrepOffice is a reliable and accurate tax software solution with simple, but powerful productivity tools aimed at making tax preparation fast and easy. </p>
                <Link className='learn-more' to="coming-soon">Learn More</Link>
            </div>
        </div>
        <div className="health-care">
           <div className="health">
           <h3 className='headings'>Healthcare Solutions</h3>
            <p>Handling sensitive healthcare data securely for a market leading customer in the health and well-being sector.</p>
           </div>
       </div>
        <div className="carrers">
           <div className="health carrer-health">
           <h3 className='headings'>Careers at Inventyv</h3>
            <p>Join our talented team of dedicated professionals.</p>
            <Link  className="learn-more" to="coming-soon">Find a Career</Link>
           </div>
        </div>
    </div>
   </div>
    </>
  )
}

export default Inventyv