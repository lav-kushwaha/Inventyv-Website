import React from 'react'
import './Cards.css'
import { img1,img2,img3,img4,img5,img6 } from '../../Components/Cards'

const Cards = () => {
  return (
    <div className="containers">
        <h2>Inventyv Provides a Wide Range of Services Supporting the All-round Growth of Our Customers’ Businesses.</h2>
      <div className="cards">
      <div className="application">
          <img src={img1} alt="img"/>
          <h3>Application Development</h3>
          <p>We build end-to-end enterprise level web and mobiles solutions that are modular and decentralized into separate smaller components or services and compatible across different platforms through PWAs.</p>
        </div>
        <div className="application">
        <img src={img2} alt="img"/>
        <h3>Software Architecture</h3>
        <p>At Inventyv, we analyze the operational and technical requirements to design systems optimized in quality, performance, security and maintainability.</p>
        </div>
        <div className="application">
        <img src={img3} alt="img"/>
          <h3>Quality Management</h3>
          <p>Quality Management Our rigorous software testing practices are performed for multiple parameters like functionality, behavioral, performance, scalability and compatibility using both manual and automated software testing services.</p>
        </div>
        <div className="application">
        <img src={img4} alt="img"/>
        <h3>Data Center Design & Operations</h3>
        <p>Web design, manage and operate data center infrastructures to optimize uptime, safety and sustainability of the products and solutions that we offer.</p>
        </div>
        <div className="application">
        <img src={img5} alt="img"/>
        <h3>Cloud & DevOps</h3>
        <p>Our team of experts embrace all security and deployment best practices and have years of experience deploying applications with custom scalability requirements in different environments: On-Premises deployment, Google Cloud Platform and also Hybrid deployment.</p>
        </div>
        <div className="application">
        <img src={img6} alt="img"/>
        <h3>Security Specialization</h3>
        <p>Our security experts address Cyber security, Privacy, Cloud Infrastructure and Functional Safety Requirements to build trusted, connected platforms, conforming to the leading edge frameworks such as ISO 27000, NIST CyberSecurity Framework and others.</p>
        </div>
      </div>
    </div>
  )
}

export default Cards